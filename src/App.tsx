import "./App.css";
import AddToDo from "./componenets/AddTodo";
import Container from "./componenets/Container";
import Navbar from "./componenets/Navbar";
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
    return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<>
					<Container />
				</>} />

				{/* adding route to add todo */}
				<Route path="/add" element={<AddToDo />} />
			</Routes>
		</>
	);
}

export default App;
