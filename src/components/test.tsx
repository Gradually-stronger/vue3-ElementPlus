import { h, defineComponent, ref, onMounted } from 'vue';
// 获取dom节点
export default defineComponent({
  name: 'test',
  setup() {
    const demo = () => {};
    const refs: any = ref();
    onMounted(() => {
    });
    return {
        refs
    }
  },
  render() {
    console.log(this.refs)
    return <p ref="refs">123</p>;
  },
});
