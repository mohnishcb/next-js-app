// components/TodoForm.tsx
import React, { useEffect, useState } from 'react';
import { Button, Center, Group, Modal, Portal, TextInput } from '@mantine/core';

interface TodoFormProps {
  onAdd: (title: string) => void;
  onEdit: (id: number, title: string) => void;
  isEditing: boolean;
  editTaskId?: number | null;
  editTitle?: string;
  onCancel: () => void;
}

const TodoForm = ({ onAdd, onEdit, isEditing, editTaskId, editTitle, onCancel }: TodoFormProps) => {
  const [task, setTask] = useState(editTitle || '');

  useEffect(() => {
    setTask(editTitle || '');
  }, [editTitle]);

  const handleSubmit = () => {
    if (task.trim() === '') {
      return;
    }
    if (isEditing && editTaskId !== null) {
      onEdit(editTaskId, task);
    } else {
      onAdd(task);
    }
    setTask('');
  };

  return (
    <Portal>
      <Modal opened={isEditing} onClose={onCancel} title="Edit Task">
        <TextInput
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task title"
          size="md"
        />
        <Group mt="md">
          <Button onClick={handleSubmit}>{isEditing ? 'Save' : 'Add'}</Button>
          {isEditing && (
            <Button onClick={onCancel} variant="outline" color="gray">
              Cancel
            </Button>
          )}
        </Group>
      </Modal>
    </Portal>
  );
};

export default React.memo(TodoForm);
