---
category: Components
type: Views
title: Pop
subtitle: 弹出框(容器)
---

弹出框(容器)。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Pop 在当前页面正中打开一个浮层，承载相应的操作。

## API

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| close   | 点击遮罩层或右上角叉或取消按钮的回调   | function(e)        | 无  |
| show   | 弹出框是否可见 | Boolean        | false  |
| label   | 弹出框标题 | String        | 无  |
| simple   | 简单弹出框和多功能弹出框 | Boolean        | false  |
