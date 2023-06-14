//import TodoView from "./pages/TodoPage/TodoView";
import Navbar from "./components/Navbar/Navbar";
import {RouterProvider} from "react-router-dom"

import { router } from "./router/router.index";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
