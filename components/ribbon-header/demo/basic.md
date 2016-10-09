---
order: 0
title:
  zh-CN: 按钮组
---

## zh-CN


````jsx
import { RibbonHeader } from 'antd';

var headerBtnItems =
  [
    {'type': 'large', 'col': 0, 'icon': 'query', 'label': '查询'},
    {'col': 1, 'icon': 'more', 'label': '全部'},
    {'col': 1, 'icon': 'reset', 'label': '重置'},
  ];

ReactDOM.render(
  <div style={{'paddingBottom': '50px'}}>
    <RibbonHeader
      height={73}
      columns={[80, 97]}
      items={headerBtnItems}
    />
  </div>,
  mountNode
);
````
