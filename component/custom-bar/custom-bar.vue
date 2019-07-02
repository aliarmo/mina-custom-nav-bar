<template>
  <div class="nav_container">
    <div class="nav_occupy" :style="{padding-top:paddingTop,height:heightPx}"></div>
    <div
      class="nav {{containerClass}}"
      :style="{padding-top:paddingTop,height:heightPx,bgColor:bgColor}"
      :class="{layoutCenter:isCenter}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
Component({
  properties: {
    isCenter: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: ""
    },
    containerClass: {
      type: String,
      value: ""
    },
    height: {
      type: Number,
      value: 40
    }
  },
  options: {
    styleIsolation: "apply-shared"
  },
  data: {
    paddingTop: 0
  },
  attached() {
    let sysInfo = wx.getSystemInfoSync();
    let rect;
    let top;
    let barHeight = sysInfo.statusBarHeight;
    let height = this.data.height;
    if (wx.getMenuButtonBoundingClientRect) {
      rect = wx.getMenuButtonBoundingClientRect();
      // 这个rect.top没有加状态栏的高度？华为荣耀7有这个case
      if (rect.top < barHeight) {
        rect.top += barHeight;
      }
      top = rect.top + rect.height / 2 - height / 2;
      if (top < 0) {
        let maxHeight = 2 * rect.top + rect.height;
        console.warn(
          `[WAARNING]：不建议传入height的值大于 ${maxHeight} 当前值为${height}`
        );
      }
    } else {
      top = barHeight;
    }
    this.setData({
      paddingTop: top + "px",
      heightPx: height + "px"
    });
  }
});
</script>
<style>
.nav_container {
  flex: 0 0 auto;
}
.nav {
  width: 100%;
  box-sizing: content-box;
  position: fixed;
  top: 0;
  z-index: 200;
  /* background-color: #212738; */
  /* border: 1px solid red; */
}
.nav_occupy {
  width: 100%;
  box-sizing: content-box;
  flex: 0 0 auto;
}
.layoutCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
