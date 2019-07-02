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