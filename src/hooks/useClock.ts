import dayjs from 'dayjs';
import { useState } from 'react';

import { useInterval } from '@/hooks/useInterval';

interface ClockOptions {
  startTimeInMs?: number;
}

export const useClock = (options?: ClockOptions) => {
  const startTimeMs = options?.startTimeInMs || Date.now();

  const [value, setValue] = useState(startTimeMs);

  useInterval(() => {
    setValue(value + 1000);
  }, 1000);

  const date = dayjs(value);

  const dateTimeString = date.format('YYYY年MM月DD日 dddd HH:mm:ss');

  return [dateTimeString, stop] as const;
};
