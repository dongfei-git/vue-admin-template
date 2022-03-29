<template>
  <div>
    测试页面
    <button @click="test">测试后端访问</button>
    <button @click="test2">测试后端访问2</button>
  </div>
</template>

<script>
import test from '@/api/test'

export default {
  name: 'index',
  methods:{
    test(){
      test.getList()
    },
    test2(){
      test.setList()
    }
  }
}
</script>

<style scoped>

</style>
