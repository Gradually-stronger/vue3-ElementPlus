<template>
  <div style="cursor: pointer" @click="toggleDark()">
    <span v-if="isDark" class="iconfont icon-yueliang"></span>
    <span v-else class="iconfont icon-taiyang-copy" style="color: #000"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { toggleDark, isDark } from '@/until/modes';

export default defineComponent({
  setup() {
    return {
      toggleDark,
      isDark,
    };
  },
});
</script>
