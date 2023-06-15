//import TodoView from "./pages/TodoPage/TodoView";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router.index";

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
