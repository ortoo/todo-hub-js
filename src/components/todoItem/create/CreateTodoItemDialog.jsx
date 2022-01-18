import React, { useState } from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import TodoItemForm from "../TodoItemForm";

// Dialog wrapper for creating a to do
const CreateTodoItemDialog = ({ onSave, onCloseRequest, open, ...other }) => {
  // useState is used to remember the state of objects between component renders in react
  const [todoItem, setTodoItem] = useState({
    title: "",
    description: "",
  });

  return (
    <>
      <Dialog
        open={open}
        {...other}
        TransitionProps={{
          onExiting: () => setTodoItem({ title: "", description: "" }),
        }}
      >
        <DialogTitle>Create a new todo item</DialogTitle>
        <DialogContent>
          <TodoItemForm
            todoItem={todoItem}
            onChange={(updatedTodoItem) => setTodoItem(updatedTodoItem)}
          ></TodoItemForm>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => onCloseRequest()}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSave(todoItem)}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoItemDialog;
