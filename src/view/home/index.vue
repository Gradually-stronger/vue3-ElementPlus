<template>
  <div class="containers">
    <el-backtop target=".containers"></el-backtop>
    <div class="slogn">
      努力一直是平凡的人活着的勇气,如果你不努力那你只是一具corpse.
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
    text-align: center;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgb(66, 111, 183),
      rgb(33, 141, 33),
      rgb(190, 168, 58)
    );
    line-height: 26px;
    border-radius: 3px;
  }
}
</style>
