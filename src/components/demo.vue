<template>
  <div>
    <el-button @click="onClick(count)">count is: {{ count }}</el-button>
    <Particle />
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  reactive,
  toRefs,
  onUpdated,
  defineComponent,
  computed,
} from 'vue';
import { useStore } from 'vuex';
import particle from './particles.vue';

export default defineComponent({
  name: 'Demo',
  components: {
    'Particle':particle,
  },
  setup() {
    const store = useStore();
    const msg = computed(() => store.state.login.msg);
    const count = computed(() => store.state.count);
    function onClick(Count: number) {
      console.log(Count);
      store.dispatch('Account', {
        count: Count + 1,
      });
    }
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      // console.log(state.count)
    });
    onUpdated(() => {
      // console.log(state.count)
    });

    return {
      ...toRefs(state),
      msg,
      onClick,
      count,
    };
  },
});
</script>
