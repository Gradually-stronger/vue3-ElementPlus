import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base:"./",//打包路径
  // resolve: {
  //   alias:{
  //     '@': path.resolve(__dirname, './src')//设置别名
  //   }
  // },
  server: {
    port:8989,//启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'http://39.99.234.158:8989'//代理网址
    },
    cors:true,
   
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
