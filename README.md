## 小程序自定义导航栏
兼容各个版本机型的小程序自定义导航栏，这个组件主要做的是提供一个容器使得业务自定义的UI可以对齐微信胶囊，
并且这个组件不会影响到你的页面排版布局，是正常的文档流。

## 用法
1. 复制component/custom-bar这个组件到你的项目，可忽略.vue文件，[详情请看](https://github.com/aliarmo/mini-vue-sugar)，这就意味着你完全可以根据业务需要定制这个组件UI
2. 需要自定义导航栏的页面增加配置
```
"navigationStyle": "custom"
```
3. 引入这个组件
4. 使用，可参照/pages/index/index的使用方式
```
<CustomBar height="40" containerClass="containerClass">
     <input type="text" placeholder="输入">  <!--支持slot-->
</CustomBar>
```

## 支持传入的属性
1. height------包含状态栏的高度
2. containerClass----业务可传入自定义类名，定义容器样式
3. isCenter----------容器是否自动居中传入的slot

