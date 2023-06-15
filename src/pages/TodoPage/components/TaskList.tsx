import { ITaskTypes } from "../dto";
import Modal from "../../../components/Modal/Modal";
import AddTaskForm from "./AddTaskForm";

import Task from "./Task";

function TaskList(tasksType: ITaskTypes) {
	return (
		<div className="my-2 container-fluid task-list d-flex flex-column align-items-center">
			<Task type={tasksType.type}></Task>
			<button
				data-bs-target="#modal1"
				data-bs-toggle="modal"
				className="w-50 p-2 my-4 btn btn-outline-primary"
			>
				Add task
			</button>

			<Modal id={"modal1"} title={"Add new task"}>
				<AddTaskForm></AddTaskForm>
			</Modal>
		</div>
	);
}

export default TaskList;
