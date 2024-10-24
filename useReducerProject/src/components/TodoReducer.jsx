import {useReducer} from 'react';

/*
 ? > It takes two parameters
  > > state: the data we hold within the component
  > > action: the action that is used to modify the data
  > > An action is an object and has a type property
  > > and in some cases, it needs to carry data along (payload)
 ! > Its task is to analyze actions and update the state.
 ? > The last thing returned from the reducer is the value of the state
*/

function reducer(state, action) {
	// Updating the todoText
	if (action.type === "SET_TODO") 
	return{ ...state, todoText: action.payload };
	// Adding a new element to the todos array.
	if(action.type === "ADD_TODO")
	return {...state, todos: [...state.todos, action.payload]};

}

const TodoReducer = () => {
	/*
    !useReducer: one of the React hooks. It comes into play when state management becomes difficult alongside useState.
    ?> It takes two parameters:
     > > reducer : function
     > > initialState : initial value
    ?> It returns two values:
    > > state : data
    > > dispatch : A function that will execute the actions
  */

	const [state, dispatch]	= useReducer(reducer, {todoText: '', todos:[],});

	const handleChange = (e) => {
		dispatch({
			type: 'SET_TODO',
			payload: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type : "ADD_TODO",
			payload: state.todoText,
		});

	};

  return (
	<div>
	  <form onSubmit={handleSubmit}>
		<input onChange={handleChange} type="text" />
		<button>Gönder</button>
	  </form>
	 <ul>
		{state.todos.map((todo) => (
		<li>{todo}</li>
		))}
	 </ul>
	</div>
  );
};

export default TodoReducer;
 