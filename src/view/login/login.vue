<template>
  <div class="backgorund">
    <div class="card" shadow="never">
      <div class="title">Welcome To WebSite</div>
      <el-form ref="form" class="form" :model="formData" :rules="loginRules">
        <el-form-item prop="account">
          <el-input
            v-model="formData.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="rememberMe">
          <el-checkbox
            v-model="formData.rememberMe"
            type="password"
            style="color: #fff"
          >
            记住我
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="logins">
            登陆
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button
            type="text"
            style="margin: auto; width: 100%; color: #ccc"
            @click="register"
          >
            忘记密码？
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <!-- <particle /> -->
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import particle from '../../components/particles.vue';
import { formValidation } from './form';
export default defineComponent({
  name: 'Login',
  components: {
    particle,
  },
  setup() {
    return {
      ...toRefs(formValidation()),
    };
  },
});
</script>

<style lang="less">
.backgorund {
  background-image: url('./image/login/login_background.png');
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  margin: auto;
  /* width: 500px; */
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
}

.title {
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  // text-transform: uppercase;
  display: block;
  margin: 2rem 0;
}
</style>
