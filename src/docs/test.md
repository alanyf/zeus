

::: demo
@这部分是页面上可以交互的代码

<div class="measure-ct">
	<button @click="measure()">点击+1</button>
	<span id="text">0</span>
</div>
<br>



@这部分是我们展示的示例代码
```js
import {cw5} from 'cw3d/index.js';
```  

```html
<template>
    <div>
        <div class="measure-ct">
            <button @click="measure()">点击+1</button>
            <span id="text">0</span>
        </div>
    </div>
</template>
<script>
//import {cw5} from 'cw3d/index.js';
export default {
    name: 'measure',
    methods: {
        measure(type){
        const node = document.getElementById('text');
        node.innerText = Number(node.innerText) + 1;
        }
    }
}
</script>

```

# 作者：alan   

# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

这是正文

## 字体
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
## 引用
>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容
## 分割线
---
----
***
*****
## 超链接
[简书](http://jianshu.com)
[百度](http://baidu.com)

## 列表
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

1. 列表内容
    * 无序嵌套列表
2. 列表内容
3. 列表内容
    1. 有序嵌套列表

注意：序号跟内容之间要有空格

## 表格
姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

## 代码
`create database hero;//单行代码`

```js
function fun(){
        echo "这是多行代码";
}
fun();
```
## 图片
![avatar][base64str]
[base64str]:data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K 

:::