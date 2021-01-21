import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

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
        // When the dialog is closing, reset the data for the form
        onExiting={() => setTodoItem({ title: "", description: "" })}
        {...other}
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
          <Button color="primary" onClick={() => onSave(todoItem)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoItemDialog;
