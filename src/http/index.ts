import Taro from '@tarojs/taro';

import { HttpOption } from './types';
export const request = (option: HttpOption) => {
	Taro.request({
		url: option.url,
		data: option.data,
		header: option.header ? option.header : undefined,
		method: option.method ? option.method : 'GET',
	});
};
