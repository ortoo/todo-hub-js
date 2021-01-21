import React from "react";

import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => {
  return {
    titleField: {
      marginBottom: theme.spacing(2),
    },
  };
});

// The todo form that appears inside the create modal, could be used for edit too perhaps?
const TodoItemForm = ({ todoItem, onChange }) => {
  const classes = useStyles();

  const { title, description } = todoItem;

  return (
    <>
      <TextField
        className={classes.titleField}
        fullWidth
        variant="outlined"
        label="Title"
        value={title}
        onChange={(event) => {
          onChange({ ...todoItem, title: event.target.value });
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        multiline
        rowsMax={4}
        value={description}
        onChange={(event) => {
          onChange({ ...todoItem, description: event.target.value });
        }}
      />
    </>
  );
};

export default TodoItemForm;
