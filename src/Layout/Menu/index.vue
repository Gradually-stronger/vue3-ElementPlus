<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :collapse="false"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import { useStore } from "vuex";
import { ElMenu } from "element-plus";

export default defineComponent({
  name:'Menu',
  setup(){
    const store = useStore();
    const titleShow=computed(()=>store.state.Layout.titleShow)
    const activeIndex = ref('1')
    return {
      titleShow,
      activeIndex
    }
  }
})
</script>