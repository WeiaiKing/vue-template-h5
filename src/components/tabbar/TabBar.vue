<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  // 设置了这两个属性，保证占领整个宽度
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
