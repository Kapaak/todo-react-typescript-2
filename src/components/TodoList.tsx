import React from "react";
import { ITask } from "./Interfaces";

interface Props {
	todos: ITask[];
}

const TodoList = ({ todos }: Props) => {
	return (
		<div>
			{todos.map(el => (
				<p key={el.id}>{el.todo}</p>
			))}
		</div>
	);
};

export default TodoList;
