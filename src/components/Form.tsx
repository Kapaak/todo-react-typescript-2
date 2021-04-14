import React, { useState } from "react";
import { ITask } from "./Interfaces";
// const Form = ({addTodo}: {addTodo:(todo:object)=>void})=> {
// const Form = ({ addTodo }: { addTodo: (todo: ITask) => void }) => {
interface Props {
	addTodo: (todo: ITask) => void;
}

const Form = ({ addTodo }: Props) => {
	const [inputText, setInputText] = useState("");
	const [counter, setCounter] = useState(1);

	const todoAddHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log(inputText);
		addTodo({ todo: inputText, id: counter });
		setInputText("");
		setCounter(prev => prev + 1);
	};

	return (
		<form onSubmit={e => todoAddHandler(e)}>
			<input
				type="text"
				onChange={e => {
					setInputText(e.target.value);
				}}
				value={inputText}
			/>
			<button>submit</button>
		</form>
	);
};

export default Form;
