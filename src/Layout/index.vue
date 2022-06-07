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
      <el-footer>
        <div class="record">备案号: 鲁ICP备2020034460号-2</div>
      </el-footer>
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
    .el-footer {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .record {
        text-align: center;
        font-size: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
