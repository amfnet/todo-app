import "./Login.css";

function LoginView() {
  return (
    <div className="container-fluid">
        <div className="login-container">
            <h3 className="text-center">Login</h3>
            <form className="form-login row justify-content-center">
                <div className="form-element col-12 col-sm-9">
                    <input type="text" className="form-control" placeholder="username" />
                </div>
                <div className="form-element col-12 col-sm-9 col-md-9">
                    <input type="password" className="form-control my-1" placeholder="**********" />
                </div>
                <div className="col-12"></div>
                <div className="row align-items-center justify-content-center">
                    <button className="col-4 col-md-3 my-2 btn btn-outline-primary">Login</button>
                    <button className="col-4 col-md-3 mx-1 btn btn-outline-secondary">Temporal</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginView;