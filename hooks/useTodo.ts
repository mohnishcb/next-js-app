// hooks/useTodo.ts
import { useCallback, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn Next.js', completed: false },
    { id: 3, title: 'Learn Tailwind CSS', completed: false },
    { id: 4, title: 'Practice JavaScript', completed: true },
    { id: 5, title: 'Build a portfolio website', completed: false },
    { id: 6, title: 'Read a programming book', completed: false },
    { id: 7, title: 'Contribute to open source', completed: false },
    { id: 8, title: 'Write blog posts', completed: false },
    { id: 9, title: 'Attend a webinar', completed: true },
    { id: 10, title: 'Take a coding challenge', completed: false },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  // Add a new task
  const addTask = useCallback((title: string) => {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  // Edit an existing task
  const editTask = useCallback((id: number | null, title: string) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
    setIsEditing(false);
    setEditTaskId(null);
    setEditTitle('');
  }, []);

  // Delete a task
  const deleteTask = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // Toggle task completion
  const toggleCompletion = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []);

  // Start editing a task
  const startEditing = useCallback((id: number, title: string) => {
    setIsEditing(true);
    setEditTaskId(id);
    setEditTitle(title);
  }, []);

  // Cancel editing
  const cancelEditing = useCallback(() => {
    setIsEditing(false);
    setEditTaskId(null);
    setEditTitle('');
  }, []);

  return {
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
  };
}
