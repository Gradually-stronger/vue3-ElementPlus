<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-image class="logo" :preview-src-list="['/image/logo.webp']" alt="要努力、要加油！" src="/image/logo.webp">
        </el-image>
        <Menu />
        <div class="right">
          <Partten />
          <el-button type="primary" @click="handleLoginout" class="loginout"> 退出登录 </el-button>
        </div>
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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Layout",
  components: {
    Menu,
    Partten,
  },
  setup() {
    const router = useRouter();
    const handleLoginout = () => {
      localStorage.clear();
      router.replace("/login");
    };
    return {
      handleLoginout,
    };
  },
});
</script>

<style lang="less">
.common-layout {
  a {
    text-decoration: none;
  }

  .el-container {
    height: 100vh;

    .el-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;

      .logo {
        margin-top: 10px;
        width: 60px;
        border-radius: 10%;
      }

      .right {
        display: flex;
        align-items: center;

        .loginout {
          margin-left: 10px;
          cursor: pointer;
        }
      }
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
