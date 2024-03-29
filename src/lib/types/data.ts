export type Meta = {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
};

export type Response<T> = {
	data: T;
	meta: Meta;
};
