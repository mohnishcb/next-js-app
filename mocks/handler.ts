// src/mocks/handlers.ts
import { rest } from 'msw';
import { Task } from '../types/todo';

let tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build a todo app', completed: true },
  { id: 3, title: 'Write tests for API', completed: false },
];

// GET /tasks - Retrieve all tasks
export const handlers = [
  rest.get('/tasks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),

  // GET /tasks/:id - Retrieve a task by ID
  rest.get('/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id === parseInt(id as string));
    if (task) {
      return res(ctx.status(200), ctx.json(task));
    } else {
      return res(ctx.status(404), ctx.json({ message: 'Task not found' }));
    }
  }),

  // POST /tasks - Create a new task
  rest.post('/tasks', (req, res, ctx) => {
    const newTask = req.body as Task;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    return res(ctx.status(201), ctx.json(newTask));
  }),

  // PUT /tasks/:id - Update an existing task by ID
  rest.put('/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    const updatedTask = req.body as Task;
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id as string));

    if (taskIndex > -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      return res(ctx.status(200), ctx.json(tasks[taskIndex]));
    } else {
      return res(ctx.status(404), ctx.json({ message: 'Task not found' }));
    }
  }),

  // DELETE /tasks/:id - Delete a task by ID
  rest.delete('/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== parseInt(id as string));

    return res(ctx.status(204));
  }),
];
