---
category: Components
type: Ribbon
title: RibbonButton
subtitle: Ribbon风格按钮
---

Ribbon风格按钮。

## 何时使用

- 不建议此按钮直接使用(是提供给RibbonHeader来组合使用的)。

## API

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| icon   | icon样式（参考icon样式表）       | string        | 无  |
| label   | 按钮文字       | string        | 无  |
| disable   | 禁用       | bool        | false  |
| onClick   | 点击回调       | function        | 无  |

## icon样式

| icon        | 说明           |
|------------|----------------|
| checkScheduling    | 查看调度 |
| checkDispatching    | 查看派工 |
| checkCompletion    | 查看完工 |
| batchEdit    | 批量修改 |
| batchException    | 批量异常 |
| more    | 更多 |
| reset    | 重置 |
