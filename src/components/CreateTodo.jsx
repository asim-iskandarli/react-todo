import { Box, Typography, Button, TextField, Checkbox } from "@mui/material";
import { createButton, createTodo, text, textInput } from "../styles/style";
import { useState } from "react";

const CreateTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [important, setImportant] = useState(false);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewTodo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const todo = {
      id: Math.floor(Math.random() * 99999) + 1,
      todo: newTodo,
      important,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
    setImportant(false);
  };

  return (
    <Box sx={createTodo}>
      <Typography sx={text}>Create New Todo</Typography>
      <form style={{ width: "100%", display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <TextField
          sx={textInput}
          placeholder="Enter todo"
          onChange={handleChangeInput}
          value={newTodo}
          name="todo"
        />
        <Typography>
          Important
          <Checkbox
            checked={important}
            onChange={() => setImportant(!important)}
          />
        </Typography>
        <Button sx={createButton} variant="contained" type="submit">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreateTodo;
