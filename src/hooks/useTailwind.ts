// From https://stackoverflow.com/a/77346945/2303432
import { useMemo } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

export function useTailwind() {
  const tailwind = useMemo(() => resolveConfig(tailwindConfig), [tailwindConfig]);

  return tailwind;
}
