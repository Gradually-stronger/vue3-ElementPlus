<template>
  <div class="containers">
    <el-backtop target=".containers"></el-backtop>
    <div class="slogn">
      <p>
        努力一直是平凡的人活着的勇气,如果你不努力那你只是一具corpse.
      </p>
      <p>
        Efforts have always been the courage of ordinary people to live. If you don't work hard, you are just a corpse
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.containers {
  width: 62.5%;
  margin: 0 auto;
  height: 100%;

  .slogn {
    height: 100px;
    font-size: 14px;
    text-indent: 20px;
    color: rgb(255, 255, 255);
    box-shadow: -1px 2px 10px rgb(34, 178, 92);
    background: linear-gradient(90deg,
        rgb(66, 111, 183),
        rgb(33, 141, 33),
        rgb(190, 168, 58));
    border-radius: 3px;
    p:first-of-type {
      line-height: 60px;
    }
    p:last-of-type {
      line-height: 10px;
    }
  }
}
</style>
