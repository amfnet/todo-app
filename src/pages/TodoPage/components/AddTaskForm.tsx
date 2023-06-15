function AddTaskForm() {
	return (
		<div>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Task Description
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
			</form>
		</div>
	);
}

export default AddTaskForm;
