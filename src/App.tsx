import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { ITask } from "./components/Interfaces";
import TodoList from "./components/TodoList";

function App() {
	// const [todos, setTodos] = useState<object[]>([]);
	const [todos, setTodos] = useState<ITask[]>([]);

	const addTodo = (todo: ITask): void => {
		setTodos([...todos, todo]);
	};

	return (
		<div className="App">
			<h1>Damn you I am here again</h1>
			<Form addTodo={addTodo} />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
