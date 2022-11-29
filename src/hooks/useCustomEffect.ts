import { useEffect, useRef } from 'react';

const isDevelopmentRun = import.meta.env.DEV && import.meta.env.MODE !== 'test';

const useCustomEffect = (cb: () => void, deps: []) => {
  const isMountedRef = useRef(!isDevelopmentRun);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useCustomEffect;
