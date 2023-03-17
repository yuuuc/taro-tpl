export type RequestType =
	| 'application/json'
	| 'application/x-www-form-urlencoded'
	| 'multipart/form-data';

/**
 * 请求方法的类型推导
 */
export type RequestMethods =
	| 'GET'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'CONNECT'
	| 'HEAD'
	| 'OPTIONS'
	| 'TRACE';

export type RequestHeader = {
	['content-type']: RequestType;
	[key: string]: any;
};

export interface HttpOption {
	url: string;
	header?: RequestHeader;
	/**ms */
	timeout?: number;
	method?: RequestMethods;
	data?: any;
	dataType?: string;
	responseType?: string;
}

// 消息基础接口
export interface IMessage {
	success: boolean;
	message: string;
}
// 消息基础对象数据接口
export interface IMessageData<T = any> extends IMessage {
	success: boolean;
	message: string;
	data: T;
}

export interface IMessagePage<T = any> extends IMessage {
	total: number;
	pageNum: number;
	pageSize: number;
	rows: Array<T>;
}
