import { defineComponent, ref,  } from 'vue';
// 获取dom节点
export default defineComponent({
  name: 'Test',
  setup() {
    const refs: any = ref();
    return {
      refs,
    };
  },
  render() {
    console.log(this.refs);
    return <p ref="refs">123</p>;
  },
});
