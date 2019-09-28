
# 树组件

## 简介
本组件实现了树的展示，可通过点击打开和关闭父节点的所有子节点，可用作菜单。
<!-- <script>
import Tree from '@/views/zeus/components/Tree/Tree';
module.exports = {
	name: 'Tree',
	data(){
		return {
            // 树的配置数据数组
			treeData: [
				{
					text: '父节点1',
					id: 1,
					expand: true,
					children: [
						{text: '叶子节点1-1', id: 11},
						{text: '叶子节点1-2', id: 12},
						{
							text: '父节点1-3',
							id: 13,
							expand: true,
							children: [
								{text: '叶子节点1-3-1', id: 131},
								{text: '叶子节点1-3-2', id: 132, disable: true},
							]
						}
					]
				},
				{
					text: '父节点2',
					id: 2,
					expand: true,
					children: [
						{text: '叶子节点2-1', id: 21},
						{text: '叶子节点2-2', id: 22}
					]
				},
				{text: '叶子节点3', id: 228}
			]
		}
	},
	methods: {
		select(node){
			console.log('select', node);
		},
		expand(node){
			console.log('expand', node);
		},
		shrink(node){
			console.log('shrink', node);
		},
		click(node){
			console.log('click', node);
		}
	},
	components: {
		Tree
	}
}
console.log(111);
</script> -->


## 使用举例
::: demo
```html
<template>
    <div>
        <Tree 
            :option="treeData"
            @select="select"
            @expand="expand"
            @shrink="shrink"
            @click="click"
        />
    </div>
</template>
<script>
import Tree from '@/views/zeus/components/Tree/Tree';
module.exports = {
	data(){
		return {
            // 树的配置数据数组
			treeData: [
				{
					text: '父节点1',
					id: 1,
					expand: true,
					children: [
						{text: '叶子节点1-1', id: 11},
						{text: '叶子节点1-2', id: 12},
						{
							text: '父节点1-3',
							id: 13,
							expand: true,
							children: [
								{text: '叶子节点1-3-1', id: 131},
								{text: '叶子节点1-3-2', id: 132, disable: true},
							]
						}
					]
				},
				{
					text: '父节点2',
					id: 2,
					expand: true,
					children: [
						{text: '叶子节点2-1', id: 21},
						{text: '叶子节点2-2', id: 22}
					]
				},
				{text: '叶子节点3', id: 228}
			]
		}
	},
	methods: {
		select(node){
			console.log('select', node);
		},
		expand(node){
			console.log('expand', node);
		},
		shrink(node){
			console.log('shrink', node);
		},
		click(node){
			console.log('click', node);
		}
	},
	components: {
		Tree
	}
}
console.log(111);
</script>
<!-- <script>
import Tree from '**/**/Tree.vue';// 引入树组件
export default {
	name: 'Tree',
	data(){
		return {
            // 树的配置数据数组
			treeData: [
				{
					text: '父节点1',
					id: 1,
					expand: true,
					children: [
						{text: '叶子节点1-1', id: 11},
						{text: '叶子节点1-2', id: 12},
						{
							text: '父节点1-3',
							id: 13,
							expand: true,
							children: [
								{text: '叶子节点1-3-1', id: 131},
								{text: '叶子节点1-3-2', id: 132, disable: true},
							]
						}
					]
				},
				{
					text: '父节点2',
					id: 2,
					expand: true,
					children: [
						{text: '叶子节点2-1', id: 21},
						{text: '叶子节点2-2', id: 22}
					]
				},
				{text: '叶子节点3', id: 228}
			]
		}
	},
	methods: {
		select(node){
			console.log('select', node);
		},
		expand(node){
			console.log('expand', node);
		},
		shrink(node){
			console.log('shrink', node);
		},
		click(node){
			console.log('click', node);
		}
	},
	components: {
		Tree
	}
}
</script> -->
```
:::  

---

## 组件属性

| 参数      | 说明                 | 类型    | 默认值 |
| --------- | ---------------------------- | ----------- | ----- |
|  options    |   树结构数据    |   Array  |  空数组 |
|  userPadding    |  控制父子节点缩进距离  |  Number   | 20 |
| activeType | 选中时的响应类型，为true时为字体变色，为false时背景颜色变化 | Boolean | true |
| activeColor | 选中时的颜色 | String | "#3eaf7c" |
| onlyIconExpand | 只有点击按钮才可操作节点开闭，为false时点击整行都可操作 | Boolean | true |
| showIcon | 是否显示展开/闭合按钮 | Boolean | true |

---

## 组件方法

| 方法名称   | 说明                             | 参数  |
| -------  | -------------------------------- | -------- |
| click(node) | 点击节点 | 节点对象 |
| expand(node) | 展开指定节点 | 节点对象 |
| shrink(node) | 收起指定节点 | 节点对象 |
| select(node) | 选中了未被选中的节点 | 节点对象 |  

---

## 节点属性
| 节点默认属性      | 说明                 | 类型    | 默认值 |
| --------- | ---------------------------- | ----------- | ----- |
|  text    |  节点显示的文本内容   | String   |  "" |
|  children    |  节点的子元素，没有该属性的节点被认为是叶子节点   | Array   |  空数组 |
|  expand    |  指定各节点是否展开   | Boolean   |  false |
|  _uuid    |  节点的唯一标识   | Number   |  无 |
|  _level    |  节点所在层级   | Number   |  无 |

