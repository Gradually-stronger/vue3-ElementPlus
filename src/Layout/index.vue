<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Menu />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './Menu/index.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Menu,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less"></style>
