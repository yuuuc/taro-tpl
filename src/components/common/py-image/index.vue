<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted } from 'vue';
import { ErrorTypeEnum } from './type';
import { errorImg } from './errorImg';
import { ImageProps } from '@tarojs/components';

import './index.scss';
const isShow = ref<boolean>(true);
const showLoad = ref<boolean>(true);
let timer: any = undefined;
const props = withDefaults(
	defineProps<{
		src: string;
		errorText?: string;
		infoScale?: number;
		mode?: keyof ImageProps.Mode;
		width?: string;
		height?: string;
	}>(),
	{
		errorType: ErrorTypeEnum.default,
		errorText: '加载错误',
		infoScale: 1,
		mode: 'aspectFill',
		width: '100%',
		height: '100%',
	},
);

const imgLoad = () => {
	showLoad.value = false;
	clearTimeout(timer);
};
const imgError = () => {
	showLoad.value = false;
	isShow.value = false;
	clearTimeout(timer);
};
onMounted(() => {
	timer = setTimeout(() => {
		showLoad.value = false;
		isShow.value = false;
	}, 20000);
});
</script>

<template>
	<view class="py-img" :style="{ width, height }">
		<image
			v-if="isShow"
			:class="['py-img', showLoad ? 'py-hidden' : '']"
			:mode="props.mode"
			:src="props.src"
			@load="imgLoad"
			@error="imgError"></image>
		<view class="py-img-error" v-else>
			<slot>
				<view
					:class="['py-img-error__content']"
					:style="{ transform: `scale(${props.infoScale})` }">
					<image class="py-img-error__img" :src="errorImg" mode="widthFix">
					</image>

					<view class="py-img-error__text">
						{{ props.errorText }}
					</view>
				</view>
			</slot>
		</view>
		<Loading1 />

		<!-- <view v-if="isShow && showLoad" :class="['py-before']"></view> -->
	</view>
</template>
