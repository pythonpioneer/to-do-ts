import "./App.css";
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
			</Routes>
		</>
	);
}

export default App;
