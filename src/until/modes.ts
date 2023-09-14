import { useDark } from '@vueuse/core';
import { useToggle } from '@vueuse/shared';

export const isDark = useDark({
  storageKey: 'vue-theme-appearance',
});

export const toggleDark = useToggle(isDark);

let debounceTimer: NodeJS.Timeout | null, throttleTimer: NodeJS.Timeout | null;

// 防抖
export const debounce = (fn: Function, delay: number): Function => {
  return (...args: unknown[]) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
