import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import { text } from "../styles/style";

const todoList = ({ todos, setTodos }) => {
  const handleChangeCheckbox = (id) => {
    setTodos([
      ...todos.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      ),
    ]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <Box>
      {todos.length > 0 ? (
        <TableContainer>
          <Typography sx={text}>Todo Lists</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">To do</TableCell>
                <TableCell align="right">Important</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.todo}</TableCell>
                  <TableCell align="right">
                    <Checkbox
                      onChange={() => handleChangeCheckbox(row.id)}
                      checked={row.important}
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => handleDeleteTodo(row.id)}
                  >
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={text}>No todo has been added yet...</Typography>
      )}
    </Box>
  );
};

export default todoList;
