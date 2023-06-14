export interface ITaskTypes {
	type?: TasksTypesEnum;
}

export enum TasksTypesEnum {
	PENDING,
	COMPLETED,
	ALL,
}
