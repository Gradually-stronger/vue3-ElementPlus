<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :collapse="false">
    <el-menu-item index="1">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <template #title>About</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElMenu } from "element-plus";

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
