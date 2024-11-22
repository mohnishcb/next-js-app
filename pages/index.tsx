import { Box } from '@mantine/core';
import TodoEditModal from '../components/todo/TodoEdit';
import TodoList from '../components/todo/TodoList';
import { useTodo } from '../hooks/useTodo';

export default function HomePage() {
  const {
    todos,
    isEditing,
    editTaskId,
    editTitle,
    addTask,
    editTask,
    deleteTask,
    toggleCompletion,
    startEditing,
    cancelEditing,
  } = useTodo();
  return (
    <Box component="div" className="todo-container">
      <Box component="div" className="">
        <h1 className="text-black-800 font-black text-3xl">Todo App</h1>
      </Box>
      <TodoEditModal
        onAdd={addTask}
        onEdit={editTask}
        isEditing={isEditing}
        editTaskId={editTaskId}
        editTitle={editTitle}
        onCancel={cancelEditing}
      />
      <TodoList
        todos={todos}
        onToggle={toggleCompletion}
        onEdit={startEditing}
        onDelete={deleteTask}
      />
    </Box>
  );
}
