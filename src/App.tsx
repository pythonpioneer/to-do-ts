import "./App.css";
import AddToDo from "./componenets/AddTodo";
import Container from "./componenets/Container";
import Navbar from "./componenets/Navbar";
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
    return (
		<>
			<Routes>
				<Route path="/" element={<>
					<Navbar />
					<Container />
				</>} />

				{/* adding route to update todo */}
				{/* adding route to add todo */}
				<Route path="/add" element={<AddToDo />} />
			</Routes>
		</>
	);
}

export default App;
