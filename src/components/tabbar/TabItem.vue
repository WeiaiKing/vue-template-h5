<template>
  <div class="item" @click="itemClick(path)">
    <slot name="item-icon" v-if="isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabItem',
  props: {
    path: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive () {
      // 是因为我这个依赖是全局的吗？
      return this.$route.path.indexOf(this.path)
    },
    activeStyle () {
      // 是因为我这个依赖是全局的吗？
      return !this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  img {
    height: 21px;
    width: 21px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
}
</style>
