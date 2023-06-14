import { ITaskTypes } from "../dto";
import Task from "./Task";

function TaskList(tasksType: ITaskTypes) {
	return (
		<div className="my-2 container-fluid task-list d-flex flex-column align-items-center">
			<Task type={tasksType.type}></Task>
			<button className="w-50 p-2 btn btn-primary">Add task</button>
		</div>
	);
}

export default TaskList;
