<template>
  <view class="index">
    <nut-swiper
      :init-page="page"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000">
      <nut-swiper-item>
        <img
          src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
          alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img
          src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"
          alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img
          src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
          alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img
          src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
          alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <PyImage
      :height="'100px'"
      :width="'100px'"
      :src="'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF'"></PyImage>
    <nut-button type="primary" @click="clickHandle">主要按钮</nut-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PyImage from '@component/py-image/index.vue';
import Taro from '@tarojs/taro';

import './index.scss';

const page = ref('1');

const clickHandle = () => {
  console.log(2222);

  Taro.navigateTo({
    url: '/pages/one/index',
  });
};
</script>
