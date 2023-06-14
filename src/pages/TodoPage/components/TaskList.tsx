import { ITaskTypes } from "../dto";
import Task from "./Task";

function TaskList(tasksType: ITaskTypes) {
	return (
		<div className="my-2 container-fluid task-list">
			<Task type={tasksType.type}></Task>
		</div>
	);
}

export default TaskList;
