import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

export const isDark = useDark({
    storageKey: "vue-theme-appearance",
});

export const toggleDark = useToggle(isDark);
