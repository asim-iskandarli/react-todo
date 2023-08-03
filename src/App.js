import TodoList from './components/TodoList';
import { Box } from '@mui/material';
import { container } from './styles/style';
import CreateTodo from './components/CreateTodo';
import { useState } from 'react';

let data = [
  {
    id: 15123,
    todo: 'Buy bread',
    important: true
  },
  {
    id: 12332,
    todo: 'Do the given task',
    important: true
  },
  {
    id: 12555,
    todo: 'Meeting friends',
    important: false
  }
]



function App() {
  const [todos, setTodos] = useState(data);
  return (
    <Box sx={container}>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
}

export default App;
