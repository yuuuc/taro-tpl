import Taro from '@tarojs/taro';

import { ternaryIsEmpty } from '@/utils/judgeUtils';
import { HttpOption, IMessagePage, IMessageData, IMessage } from './types';

const url = 'http://192.168.3.13:7865';

/**
 * 提供网络请求 非 200 返回 undefined
 * @param option @type { HttpOption }
 * @param cb @type { }
 * @returns
 */
export const request = (
	option: HttpOption,
	cb?: (res: Taro.request.SuccessCallbackResult<any>) => void,
) => {
	return new Promise<IMessage | undefined>((resolve, reject) => {
		Taro.request({
			url: baseUrl + option.url,
			data: ternaryIsEmpty(option.data, {}),
			header: ternaryIsEmpty(option.header, undefined),
			method: ternaryIsEmpty(option.method, 'GET'),
			timeout: ternaryIsEmpty(option.timeout, 2000),
			dataType: ternaryIsEmpty(option.dataType, ''),
			// responseType: ternaryIsEmpty(option.responseType, ''),
		})
			.then((res) => {
				cb && cb(res);
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					resolve(undefined);
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};

/**
 * 推导 request 请求数据 Page 分页查询 rows
 * @param e
 * @returns
 */
export const MessagePage = <T>(e: any): IMessagePage<T> | undefined => {
	return e;
};

/**
 * 推导 request 请求数据 Data 基础数据 data
 * @param e
 * @returns
 */
export const MessageData = <T>(e: any): IMessageData<T> | undefined => {
	return e;
};

/**
 * 导出 url 供 expand 使用
 */
export const baseUrl = url;
