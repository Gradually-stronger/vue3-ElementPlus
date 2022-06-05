<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>logo</div>
        <Menu />
        <Partten />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./Menu/index.vue";
import Partten from "../components/partten.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Menu,
    Partten,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.common-layout {
  .el-container {
    height: 100vh;
    .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  }
}
</style>
