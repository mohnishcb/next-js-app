// components/TodoList.tsx
import React from 'react';
import { ScrollArea } from '@mantine/core';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onEdit, onDelete }: TodoListProps) => {
  return (
    <ScrollArea className="h-[70vh] w-[80vw] sm:w-[50vw]" type="never">
      <h1>Todo App</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ScrollArea>
  );
};

export default React.memo(TodoList);
