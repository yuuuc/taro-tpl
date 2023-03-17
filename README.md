# 基础

- taro 编译
- vue3 渲染框架
- nutui ui 库 https://nutui.jd.com/taro/vue/4x/#/zh-CN/component/button
- pinia 状态管理

# 目录结构

```
├─types // 类型申明
├─config // 配置目录
├─docs // 文档
├─src // 项目代码目录
| ├─app.config.ts // taro 小程序基本配置
| ├─app.scss // 全局 scss
| ├─app.ts // 全局入口
| ├─index.html
| ├─store // 全局状态管理
| | ├─tabbar
| | | └index.ts
| ├─static // 静态资源目录
| ├─pages
| | ├─shopping // 商城
| | | ├─pages
| | ├─index // 主包
| | | ├─pages
| | ├─activity // 活动
| | | ├─pages
| | ├─account // 账户
| | | ├─pages
| ├─custom-tab-bar // 自定义 tabbar
| | ├─index.config.ts
| | └index.vue
| ├─components // 公共组件
| ├─business-components // 业务组件
```
