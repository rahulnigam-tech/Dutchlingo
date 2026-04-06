import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const progressDir = path.join(__dirname, 'data');
const progressFile = path.join(progressDir, 'progress.json');
const defaultProgress = {
  completed: {},
  scores: {},
  lessons: {},
  weakPoints: {},
  assessments: {}
};

async function ensureProgressFile() {
  await mkdir(progressDir, { recursive: true });

  try {
    await readFile(progressFile, 'utf8');
  } catch {
    await writeFile(progressFile, `${JSON.stringify(defaultProgress, null, 2)}\n`, 'utf8');
  }
}

async function readProgress() {
  await ensureProgressFile();
  const raw = await readFile(progressFile, 'utf8');
  return JSON.parse(raw);
}

async function writeProgress(data) {
  await ensureProgressFile();
  await writeFile(progressFile, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function progressApiPlugin() {
  const handler = async (req, res, next) => {
    if (!req.url?.startsWith('/api/progress')) {
      next();
      return;
    }

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
      const progress = await readProgress();
      res.end(JSON.stringify(progress));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const parsed = JSON.parse(body || '{}');
          await writeProgress(parsed);
          res.end(JSON.stringify({ ok: true }));
        } catch {
          res.statusCode = 400;
          res.end(JSON.stringify({ ok: false }));
        }
      });
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ ok: false }));
  };

  return {
    name: 'progress-api-plugin',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    }
  };
}

export default defineConfig({
  plugins: [react(), progressApiPlugin()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './src/test/setup.js'
  }
});
