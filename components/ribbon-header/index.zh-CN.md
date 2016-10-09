---
category: Components
type: Ribbon
title: RibbonHeader
subtitle: Ribbon风格按钮组
---

Ribbon风格按钮组。

## 何时使用

- 用来实现一个Ribbon风格的按钮组。

## API

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| height   | 组件高度（像素）      | number        | 无  |
| columns   | 列宽度，例如：[60, 110, 86, 86, 86]，表示总共5列，每列宽度分别为xxxxx（像素） | array | 无 |
| items   | 例如：[{'type':'large','col':0,'icon':'search','label':'查询','onClick':handler,'disable':bln}] type表示按钮样式（normal，large）col表明本按钮属于哪列，例如0表示columns[0]...icon图标样式 label按钮文字 onClick点击事件 disable是否可用 | array | 无  |
| hidden   | 隐藏按钮组 | bool        | false |
