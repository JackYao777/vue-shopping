<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <el-button type="primary" disabled>Primary</el-button> -->
  <router-view></router-view>
  <div class="test">
  自动导入
  </div>
</template>

<style scoped lang="scss">
.test{
  color: $priceColor;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
