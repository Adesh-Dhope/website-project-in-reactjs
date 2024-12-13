import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "./TodoUseState.css"; // Import the CSS file

function TodoListUseState() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Handle toggling task completion
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm" className="container">
        <h2>Todo list using useState hook</h2>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <TextField label="New Task" variant="outlined" fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="new-task-input"
      />
      <Button variant="contained" color="primary" startIcon={<AddIcon />} className="btn"   fullWidth
        onClick={handleAddTask}> Add Task </Button>
      <List className="task-list">
        {tasks.map((task, index) => (
          <ListItem key={index} className="task-item">

            <Checkbox checked={task.completed} onChange={() => handleToggleComplete(index)} />
            <ListItemText primary={task.text} className={task.completed ? "task-completed" : "task-active"}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end"color="error"onClick={() => handleDeleteTask(index)}  ><DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {tasks.length === 0 && (
        <Typography variant="body1" className="no-tasks">
          No tasks yet! Add some tasks to get started.
        </Typography>
      )}
    </Container>
  );
}

export default TodoListUseState;