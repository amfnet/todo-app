import { MouseEventHandler, useState } from "react";
import { ITaskTypes, TasksTypesEnum } from "../dto";

function Task(taskType: ITaskTypes) {
	const [checkText, setCheckText] = useState<Boolean>(false);
	return (
		<div className="container-fluid row my-3 justify-content-center">
			<div className="task-name col-7 col-sm-9 d-flex p-0 ">
				<input
					type="checkbox"
					onChange={(e) => {
						setCheckText(e.target.checked);
					}}
					name=""
					id=""
				/>
				<p
					className={`m-0 mx-2 w-100 text-center border ${
						checkText &&
						taskType.type == TasksTypesEnum.ALL &&
						"text-decoration-line-through"
					}`}
					style={{ overflowWrap: "break-word" }}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Fugiat, ipsum.
				</p>
			</div>
			<div className="col  col-sm-2 col-lg-1  d-flex p-0 justify-content-center align-items-center">
				<button className="my-1 btn btn-success mx-1">
					<i className="bi bi-check"></i>
				</button>
				<button className=" my-1 btn btn-danger mx-1">
					<i className="bi bi-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default Task;
