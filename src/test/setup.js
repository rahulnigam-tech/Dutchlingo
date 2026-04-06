import '@testing-library/jest-dom/vitest';

const emptyProgress = {
  completed: {},
  scores: {},
  lessons: {},
  weakPoints: {},
  assessments: {}
};

beforeEach(() => {
  window.localStorage.clear();
  window.location.hash = '';

  window.fetch = async (url, options = {}) => {
    if (url === '/api/progress' && (!options.method || options.method === 'GET')) {
      return {
        ok: true,
        json: async () => emptyProgress
      };
    }

    if (url === '/api/progress' && options.method === 'POST') {
      return {
        ok: true,
        json: async () => ({ ok: true })
      };
    }

    throw new Error(`Unhandled fetch in test: ${url}`);
  };

  window.speechSynthesis = {
    cancel: () => {},
    speak: () => {},
    getVoices: () => [{ lang: 'nl-NL', name: 'Dutch Test Voice' }]
  };

  window.SpeechSynthesisUtterance = class {
    constructor(text) {
      this.text = text;
    }
  };
});
