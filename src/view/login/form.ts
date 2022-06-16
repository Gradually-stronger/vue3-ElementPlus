import {
  reactive,
  ref,
  onUnmounted,
  computed,
  onMounted,
} from 'vue';
import { ElMessage } from 'element-plus';
import { formData } from '../../interpreter/login';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export function formValidation() {
  const form = ref();
  const store = useStore();

  const formData = reactive<formData>({
    account: 'admin',
    password: 'admin',
    rememberMe: false,
  });

  const router = useRouter();
  onMounted(() => {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13 || evt.code == 'Enter') {
        logins();
      }
    });

    const rememberMe = computed(() => store.state.login.loginStatus);
    formData.rememberMe = rememberMe.value;
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', () => {
      console.log('清除按键事件监听');
    }, true);
  });
  const logins = (): void => {
    form.value.validate((valid: any) => {
      if (valid) {
        if (formData.rememberMe) {
          store.commit('login/remeberMe', {
            loginStatus: true,
          });
        }
        ElMessage.success({
          message: '登陆成功',
          type: 'success',
        });
        router.push({
          name: 'home',
          params: {},
        });
      }
    });
  };
  const loginRules = {
    account: [
      {
        required: true,
        message: '请输入账号名称',
        trigger: true,
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: true,
      },
    ],
  };

  const register = (): void => {
    ElMessage.warning({
      message: '暂未开放注册功能',
      type: 'warning',
    });
  };
  return {
    formData,
    logins,
    loginRules,
    register,
    form,
    onUnmounted,
    onMounted,
  };
}
