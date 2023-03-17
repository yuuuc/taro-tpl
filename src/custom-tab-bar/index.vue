<template>
	<cover-view class="tab-bar">
		<cover-view class="tab-bar-border"></cover-view>
		<cover-view
			v-for="(item, index) in list"
			:key="index"
			class="tab-bar-item"
			@tap="switchTab(index, item.pagePath)">
			<cover-image
				:src="
					tabbarStore.selected === index ? item.selectedIconPath : item.iconPath
				" />
			<cover-view
				:style="{
					color: tabbarStore.selected === index ? selectedColor : color,
				}"
				>{{ item.text }}</cover-view
			>
		</cover-view>
	</cover-view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';
import { useTabberStore } from '@store/tabbar/index';
// import { computed, ref } from 'vue';
const tabbarStore = useTabberStore();
const color = '#000000';
const selectedColor = '#DC143C';
console.log('1235');

const list = [
	{
		iconPath: '/static/home.png',
		selectedIconPath: '/static/home-active.png',
		pagePath: '/pages/index/pages/main/index',
		text: '首页',
	},
	{
		iconPath: '/static/car.png',
		selectedIconPath: '/static/car-active.png',
		pagePath: '/pages/index/pages/shoppingCar/index',
		text: '购物车',
	},
	{
		iconPath: '/static/mine.png',
		selectedIconPath: '/static/mine-active.png',
		pagePath: '/pages/index/pages/mine/index',
		text: '个人中心',
	},
];

function switchTab(index: number, url: string) {
	setSelected(index);
	Taro.switchTab({ url });
}
function setSelected(index: number) {
	tabbarStore.setSelected(index);
}
</script>

<style lang="scss">
.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100px;
	background: white;
	display: flex;
	padding-bottom: env(safe-area-inset-bottom);
}
.tab-bar-border {
	background-color: rgba(0, 0, 0, 0.33);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	transform: scaleY(0.5);
}
.tab-bar-item {
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.tab-bar-item cover-image {
	width: 54px;
	height: 54px;
}
.tab-bar-item cover-view {
	font-size: 20px;
}
</style>
