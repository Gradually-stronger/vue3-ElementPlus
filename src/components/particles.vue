<template>
  <div id="particle">
    <Particles id="particle" :options="options" />
  </div>
</template>

<!--https://www.cnblogs.com/zx-admin/p/7030978.html 开发者手册-->

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      options: {
        background: {
          color: {
            value: '#ae716e',
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          // 原子的颜色
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1500,
            },
            value: 60,
          },
          opacity: {
            value: 0.8,
          },
          // 原子的形状
          shape: {
            type: 'triangle',
          },
          // 原子大小
          size: {
            random: false,
            value: 4,
          },
        },
        detectRetina: true,
      },
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
#particle {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
