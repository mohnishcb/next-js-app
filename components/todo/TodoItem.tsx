// components/TodoItem.tsx
// import { Edit, Trash } from 'tabler-icons-react';
import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Box, Button, Checkbox, Group } from '@mantine/core';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ id, title, completed, onToggle, onEdit, onDelete }: TodoItemProps) => {
  return (
    <Box
      component="div"
      className="flex justify-between w-[100%] items-center my-2 p-2 bg-blue-300 rounded-md"
    >
      <Box component="div" className="flex-1">
        <Group>
          <Checkbox
            checked={completed}
            onChange={() => onToggle(id)}
            className={`cursor-pointer text-2xl ${completed ? 'line-through text-gray-500' : 'text-black-600'} `}
            label={title}
          />
        </Group>
      </Box>
      <Group className="flex gap-2 justify-end ml-2">
        <Button variant="subtle" color="blue" onClick={() => onEdit(id, title)}>
          <AiFillEdit color="black" size={20} />
        </Button>
        <Button variant="subtle" color="red" onClick={() => onDelete(id)}>
          <AiFillDelete size={20} />
        </Button>
      </Group>
    </Box>
  );
};

export default React.memo(TodoItem);
