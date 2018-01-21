TypeMachine 是一个 React 组件，通过简单的配置就能实现打字效果。

![](http://ww3.sinaimg.cn/large/0060lm7Tly1fnoiuwgj0mg30930fv3zt.gif)

# API


| 参数 | 类型 |
| --- | --- |
| texts | Array |
| speed | Number |
| defaultColor | String |



### texts
```
texts = [
  [{string: ‘第一行’}],
  [{string: ‘第二行’}, {string: '同行变色’, color: ‘red’}],
  [string: ‘换行变色’, color: ‘yellow']
]
```

### speed
```
两个字符间隔时间(ms)
```

### defaultColor
```
rgb(a, b, c) || #FFF || black
```

## demo
```
import React form 'react'
import TypeMachine from './components/TypeMachine'

class Demo extends React.Component {
  render () {
    const texts = [
        [{ string: '第一行', color: 'red' }],
        [{ string: '第二行' }, { string: '同行换色', color: 'yellow' }]
      ]
    return (
      <TypeMachine texts={texts} speed={500} defaultColor='#BBB' />
    )
  }
}
export default Demo



```
![](http://ww4.sinaimg.cn/large/0060lm7Tly1fnojvzvw5zg309303hq2q.gif
)

