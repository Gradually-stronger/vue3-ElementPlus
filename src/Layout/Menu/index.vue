<template>
  <el-menu
    :default-active="activeIndex"
    class=""
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="1">
      <router-link to="/home">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about">About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Menu',
  setup() {
    const store = useStore();
    const titleShow = computed(() => store.state.Layout.titleShow);
    const activeIndex = ref('1');
    return {
      titleShow,
      activeIndex,
    };
  },
});
</script>
<style lang="less" scoped>
.el-menu {
  border: none;
  .el-menu-item {
    border: none;
  }
}
</style>
>
