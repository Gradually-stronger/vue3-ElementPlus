<template>
  <div @click="toggleDark()">
    <span class="iconfont icon-yueliang" v-if="isDark"></span>
    <span class="iconfont icon-taiyang-copy" style="color: #000" v-else></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toggleDark, isDark } from "@/until/modes";

export default defineComponent({
  setup() {
    return {
      toggleDark,
      isDark,
    };
  },
});
</script>
