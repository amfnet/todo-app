import {Link} from "react-router-dom"

function ErrorView() {
  return (
    <div className="container-fluid">
        <h1>Opss!</h1>
        <h3>This page isn't available</h3>
        <p>Return to <Link to={"/"} className="btn btn-primary">TODO APP</Link></p>
    </div>
  )
}

export default ErrorView