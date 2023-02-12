# xq-util

前端程序的一个公共方法库，包括：domReady、children、append、find、jsonFormData等公共方法。

## 安装
```bash

npm i xq-util

```
## 使用
代码中先引入后正常调用其包括的方法

```ts
//根据实际需要引入方法
import {domReady,jsonFormData} from 'xq-util';

```

## 方法说明

#### domReady

HTML页面加载完成后触发执行

代码示例

```ts

import {
    domReady
} from 'xq-util'
import xqTabForm from "./xq-tab-form";

domReady(() => {
    xqTabForm()
})

```

#### windowReady

HTML网页窗口加载完成后触发执行

代码示例

```ts

import {
    windowReady
} from 'xq-util'
import xqTabForm from "./xq-tab-form";

windowReady(() => {
    xqTabForm()
})

```

#### slideUp

HTML网页元素向上缩起（隐藏元素）

代码示例

```ts

import {
    slideUp
} from 'xq-util'

const testElement=document.querySelector('#test')
//#test元素将被隐藏（向上缩小直到高度为0）
slideUp(testElement)
slideUp(testElement,500)//可以设置隐藏动画持续的时间
```

#### slideDown

HTML网页元素向下展示（显示元素）

代码示例

```ts

import {
    slideDown
} from 'xq-util'

const testElement=document.querySelector('#test')
//#test元素将被向下展示出来（高度为元素能显示完的高度）
slideDown(testElement)
slideDown(testElement,500)//可以设置向下展示动画持续的时间
```

#### slideToggle

HTML网页元素显示与隐藏切换，显示变隐藏，隐藏会变显示

代码示例

```ts

import {
    slideToggle
} from 'xq-util'

const testElement=document.querySelector('#test')
slideToggle(testElement)
slideToggle(testElement,500)//可以设置动画持续的时间
```

#### children

返回HTML元素匹配选择器的子元素数组

代码示例

```ts

import {
    children
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test下匹配#t1选择器的子元素数组
children(testElement,'#t1')

```

#### parent

返回HTML元素匹配选择器的一个父元素

代码示例

```ts

import {
    parent
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test下匹配#t1选择器的一个父元素
parent(testElement,'#t1')

```
#### parents

返回HTML元素匹配选择器的父元素数组

代码示例

```ts

import {
    parents
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test下匹配#t1选择器的父元素数组
parents(testElement,'#t1')

```

#### prev

返回HTML元素匹配选择器的前面相邻元素数组

代码示例

```ts

import {
    prev
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test下匹配#t1选择器的前面相邻元素数组
prev(testElement,'#t1')

```

#### next

返回HTML元素匹配选择器的后面相邻元素数组

代码示例

```ts

import {
    next
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test下匹配#t1选择器的后面相邻元素数组
next(testElement,'#t1')

```

#### append

在HTML元素内部最后面添加元素（字符串形式表示）

代码示例

```ts

import {
    append
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test元素内部最后面添加<p>添加的元素</p>
append(testElement,'<p>添加的元素</p>')

```

#### prepend

在HTML元素内部最前面添加元素（字符串形式表示）

代码示例

```ts

import {
    prepend
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test元素内部最前面添加<p>添加的元素</p>
prepend(testElement,'<p>添加的元素</p>')

```

#### before

在HTML元素前面添加元素（字符串形式表示）

代码示例

```ts

import {
    before
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test元素前面添加<p>添加的元素</p>
before(testElement,'<p>添加的元素</p>')

```

#### after

在HTML元素后面添加元素（字符串形式表示）

代码示例

```ts

import {
    after
} from 'xq-util'

const testElement=document.querySelector('#test')
//返回#test元素后面添加<p>添加的元素</p>
after(testElement,'<p>添加的元素</p>')

```

#### find

查找指定选择器的HTML元素数组

代码示例

```ts

import {
    find
} from 'xq-util'
//返回所有p标签元素数组
find('p')

```

#### findOne

查找指定选择器的一个HTML元素

代码示例

```ts

import {
    findOne
} from 'xq-util'
//返回一个p标签元素
findOne('p')

```

#### jsonFormData

将指定的表单填写的数组转为json格式

代码示例

```ts

import {
    jsonFormData
} from 'xq-util'
const form=findOne('#form1')
const json=jsonFormData(form)
```