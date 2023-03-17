## 功能

用于展示图片，图片加载失败时出现错误图片，此组件为 image 的增强组件。

## 属性

| 成员      | 说明                               | 类型                  | 默认值       |
| --------- | ---------------------------------- | --------------------- | ------------ |
| src       | 图片路径                           | string                |              |
| errorText | 错误文本                           | string                | '加载错误'   |
| infoScale | 错误内容缩放                       | number                | 1 (0 - 1)    |
| errorType | 错误内容类型                       | 'default' \| 'rocket' | 'default'    |
| mode      | 图片 mode 类型，参考 image 的 mode |                       | 'aspectFill' |
| width     | 图片宽度                           | string                | '100%'       |
| height    | 图片高度                           | string                | '100%'       |
