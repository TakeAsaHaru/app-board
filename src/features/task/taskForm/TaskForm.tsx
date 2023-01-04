import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./TaskForm.module.scss";

type Inputs = {
  taskTitle?: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };
  return (
    <div className={styles.root}>
      <Box
        onSubmit={handleSubmit(handleCreate)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          {...register("register", { required: true })}
          name="taskTitle"
          className={styles.text_field}
        />
      </Box>
    </div>
  );
};

export default TaskForm;
