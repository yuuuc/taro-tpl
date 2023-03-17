export type RequestType =
	| 'application/json'
	| 'application/x-www-form-urlencoded'
	| 'multipart/form-data';

export type RequestMethods =
	| 'GET'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'CONNECT'
	| 'HEAD'
	| 'OPTIONS'
	| 'TRACE';

type RequestHeader = {
	['content-type']: RequestType;
	[key: string]: any;
};

export interface HttpOption {
	url: string;
	header: RequestHeader;
	/**ms */
	timeout: number;
	method: RequestMethods;
	data: any;
}
