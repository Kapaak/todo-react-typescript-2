import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { ITask, IPost } from "./components/Interfaces";
import TodoList from "./components/TodoList";

async function fetchData(setFetchedData: any) {
	// tady mam any, ale chci IPOST[], jenze to hlasi chybu
	const data = await (
		await axios.get("https://jsonplaceholder.typicode.com/todos")
	).data;

	const changedData = data.map((el: IPost) => {
		return {
			id: el.id,
			todo: el.title,
		};
	});

	setFetchedData(changedData);
}

function App() {
	// const [todos, setTodos] = useState<object[]>([]);
	const [todos, setTodos] = useState<ITask[]>([]);
	const [fetchedData, setFetchedData] = useState<IPost[]>([]);

	useEffect(() => {
		fetchData(setFetchedData);
	}, []);

	console.log(fetchedData);

	const addTodo = (todo: ITask): void => {
		setTodos([...todos, todo]);
	};

	//nefacha
	// const renderFetchedData = () => {
	// 	return (
	// 		<div>
	// 			{fetchData ? fetchData.map((data: any) => <p>{data.todo}</p>) : null}
	// 		</div>
	// 	);
	// };

	return (
		<div className="App">
			<h1>Damn you I am here again</h1>
			<Form addTodo={addTodo} />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
