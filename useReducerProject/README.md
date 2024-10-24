<h1>useReducer</h1> 
<ul>
<li>one of the React hooks. It comes into play when state management becomes difficult alongside useState.</li>
<li>It takes two parameters -> reducer : function , initialState : initial value</li>
<li>It returns two values ->  state : data ,  dispatch : A function that will execute the actions</li>
</ul>

<h1>Reducer:</h1>
<p> It takes two parameters</p>

1. state: the data we hold within the component
2. action: the action that is used to modify the data
3. An action is an object and has a type property
4. and in some cases, it needs to carry data along (payload)
5. ! > Its task is to analyze actions and update the state.
6. ? > The last thing returned from the reducer is the value of the state
