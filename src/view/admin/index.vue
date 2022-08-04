<template>
  <div class="auto-width">
    <el-form :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
          :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" v-model="form.content" :defaultConfig="editorConfig"
          :mode="mode" @onCreated="handleCreated" />
      </div>
      <div class="save">
        <el-button type="default">取消</el-button>
        <el-button @click="Submit" type="primary">保存</el-button>
      </div>
    </el-form>

  </div>

</template>


<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, shallowRef, onMounted, reactive } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor } from '@wangeditor/core';
import { createPosts } from '@/axios/request'
export default defineComponent({
  components: { Editor, Toolbar },
  setup() {

    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 模拟 ajax 异步获取内容
    onMounted(() => {
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor: IDomEditor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    const form = reactive({
      title: '',
      content: ""
    })

    const Submit = async () => {

      createPosts(JSON.parse(JSON.stringify(form))).then(res => {
        console.log(res);

      })

    }
    return {
      form,
      editorRef,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      Submit
    }
  },
});
</script>

<style lang="less" scoped>
.save {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 90px;
}
</style>