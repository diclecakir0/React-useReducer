import { useState } from "react";

const TodoState = () => {
	const [todoText, setTodoText] = useState('');
	const [todos, setTodos] = useState([]);

	const handleChange = (e) =>{
		setTodoText(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!todoText) {
			alert("lütfen veri giriniz")
			return;
		}
		
		const newTodo = {
			id: new Date().getTime(),
			title: todoText,
		};

		setTodos([...todos, newTodo]);
		setTodoText('');
	};

	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input value={todoText} onChange={handleChange} type="text" />
				<button>Gönder</button>

			<br />
			<br />
			<br />
			<ul>
				{
					todos.map((todo) => (
					<li>
						{todo.title}
					</li>
					))
				}
			</ul>
			</form>
		</div>
	)
};

export default TodoState;