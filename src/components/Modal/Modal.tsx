function Modal({ children, id, title, successBtnText = "Save changes" }: any) {
	return (
		<div
			className="modal fade"
			id={id}
			tabIndex={-1}
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							{title}
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">{children}</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-primary">
							{successBtnText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
