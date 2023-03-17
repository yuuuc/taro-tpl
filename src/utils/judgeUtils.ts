export const ternaryIsEmpty = <P = any, T = any>(e: P, r: T): P | T => {
	return e ? e : r;
};
