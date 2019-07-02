<template>
  <div>
    <CustomBar height="40" containerClass="containerClass">
      <input type="text" placeholder="输入" class="mod-input" />
    </CustomBar>
  </div>
</template>

<script>
import CustomBar from "/component/custom-bar/custom-bar.vue";
Page({
  data: {
    containerClass: "containerClass",
    isCenter: true
  }
});
</script>

<style>
.containerClass {
  background: yellow;
}
.mod-input {
  width: 150px;
  height: 20px;
}
</style>

