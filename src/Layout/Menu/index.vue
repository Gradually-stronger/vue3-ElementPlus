<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2"> Workspace </el-menu-item>
    <el-menu-item index="3"> About </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Menu",
  setup() {
    const store = useStore();
    const titleShow = computed(() => store.state.Layout.titleShow);
    const activeIndex = ref("1");
    return {
      titleShow,
      activeIndex,
    };
  },
});
</script>
