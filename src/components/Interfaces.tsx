export interface ITask {
	todo: string;
	id: number;
}

export interface IPost {
	id: number;
	userId?: number;
	title: string;
	body: string;
}
