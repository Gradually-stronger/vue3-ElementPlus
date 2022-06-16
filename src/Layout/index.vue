<template>
  <div class="common-layout">
    <el-container>
      <el-backtop :right="200" :bottom="100">
        <!-- <div style="
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
          Up
        </div> -->
      </el-backtop>
      <el-header>
        <div class="header">
          <div class="header-left">
            <el-image class="logo" :preview-src-list="['/image/logo.webp']" alt="要努力、要加油！" src="/image/logo.webp">
            </el-image>
            <Menu />
          </div>
          <div class="right">
            <Partten />
            <el-button type="primary" class="loginout" @click="handleLoginout">
              退出登录
            </el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <div class="record">© 2022 Learn Frontend. All rights reserved. 备案号: 鲁ICP备2020034460号-2</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './Menu/index.vue';
import Partten from '../components/partten.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Layout',
  components: {
    Menu,
    Partten,
  },
  setup() {
    const router = useRouter();
    const handleLoginout = () => {
      localStorage.clear();
      router.replace('/');
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
    height: 100%;
    min-height: 864px;

    .el-header {
      height: 80px;
      border-bottom: 1px solid #eaeaea;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 62.5%;
        margin: 0 auto;

        &-left {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .logo {
            margin-top: 10px;
            width: 60px;
            min-width: 20px;
            border-radius: 10%;
            margin-right: 40px;
          }
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

    }

    .el-main {
      height: 100%;
    }

    .el-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #eaeaea;

      .record {
        text-align: center;
        font-size: 10px;
      }
    }
  }
}
</style>
