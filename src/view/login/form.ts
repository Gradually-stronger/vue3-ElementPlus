import { reactive, ref, onUnmounted, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { formData } from '../../interpreter/login';
import { useStore } from 'vuex';
import { md5 } from 'js-md5';
import login from '@/services/login';
import { useRouter } from 'vue-router';

export function formValidation() {
  const form = ref();
  const store = useStore();

  const formData = reactive<formData>({
    account: '',
    password: '',
    rememberMe: false,
  });
  const router = useRouter();
  const submit = (evt: any) => {
    if (evt.keyCode === 13 || evt.code == 'Enter') {
      logins();
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', submit);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', submit);
  });

  const logins = (): void => {
    form.value.validate(async (valid: any) => {
      if (valid) {
        const data = {
          ...formData,
          password: md5(formData.password),
        };
        login.login(data).then((res: any) => {
          if (res && res.code === 200) {
            localStorage.setItem('token', res.data.token);
            if (formData.rememberMe) {
              store.commit('login/remeberMe', {
                loginStatus: true,
              });
            }
            ElMessage.success({
              message: '登陆成功',
              type: 'success',
            });
            setTimeout(() => {
              router.push({
                name: 'home',
                params: {},
              });
            }, 800);
          }
        });
      }
    });
  };
  const loginRules = {
    account: [
      {
        type: 'string',
        required: true,
        message: '请输入账号名称',
        trigger: true,
      },
      {
        validator: (_: any, value: string) => {
          if (/^[a-zA-Z0-9]{0,10}$/.test(value)) {
            return Promise.resolve();
          } else {
            return Promise.reject('账号格式错误');
          }
        },
      },
    ],
    password: [
      {
        type: 'string',
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
