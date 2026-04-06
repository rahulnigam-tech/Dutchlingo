import { useEffect, useState } from 'react';

const DEFAULT_ROUTE = 'home';
const allowedRoutes = new Set(['home', 'course']);

function getRouteFromHash() {
  const value = window.location.hash.replace('#', '');
  return allowedRoutes.has(value) ? value : DEFAULT_ROUTE;
}

function useHashRoute() {
  const [route, setRoute] = useState(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_ROUTE;
    }

    return getRouteFromHash();
  });

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = DEFAULT_ROUTE;
    }

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (nextRoute) => {
    if (!allowedRoutes.has(nextRoute)) {
      return;
    }

    window.location.hash = nextRoute;
  };

  return {
    route,
    navigate
  };
}

export default useHashRoute;
