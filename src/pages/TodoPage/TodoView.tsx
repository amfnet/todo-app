import { useState } from "react";
import TaskList from "./components/TaskList";
import "./TodoView.css";
import { TasksTypesEnum } from "./dto";
import Navbar from "../../components/Navbar/Navbar";

function TodoView() {
	const [tasksType, setTaskTypes] = useState<TasksTypesEnum>(
		TasksTypesEnum.PENDING
	);

	const activeButton = (type: TasksTypesEnum) => {
		return tasksType == type && "active";
	};

	return (
		<>
			<Navbar />
			<div className="container-fluid todo-container my-4">
				<h2>My Tasks</h2>
				<div className="task_selected_btn">
					<button
						className={`btn ${activeButton(TasksTypesEnum.ALL)}`}
						onClick={() => setTaskTypes(TasksTypesEnum.ALL)}
					>
						All
					</button>

					<button
						className={`btn ${activeButton(
							TasksTypesEnum.COMPLETED
						)}`}
						onClick={() => setTaskTypes(TasksTypesEnum.COMPLETED)}
					>
						Completed
					</button>

					<button
						className={`btn ${activeButton(
							TasksTypesEnum.PENDING
						)}`}
						onClick={() => setTaskTypes(TasksTypesEnum.PENDING)}
					>
						Pending
					</button>
				</div>
				<div className="container-fluid tasks-container">
					<TaskList type={tasksType}></TaskList>
				</div>
			</div>
		</>
	);
}

export default TodoView;
