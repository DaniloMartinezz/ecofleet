// src/components/CardTasks.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, index, moveTask, toggleTask }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'task',
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between p-2 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={{ cursor: 'move' }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span className={`font-medium ${task.completed ? 'text-green-green' : 'text-gray-600'}`}>
          {task.text}
        </span>
      </div>
      <div className="text-gray-400 cursor-pointer md:ml-24">⋮⋮</div>
    </div>
  );
};

const CardTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Troca de Pneus', completed: false },
    { id: 2, text: 'Melhoria Escapamento', completed: true },
    { id: 3, text: 'Novas rotas', completed: true },
    { id: 4, text: 'Troca de Filtros de Ar', completed: false },
    { id: 5, text: 'Combustível Sustentável', completed: true },
  ]);

  useEffect(() => {
    const cachedTasks = localStorage.getItem('tasks');
    if (cachedTasks) {
      setTasks(JSON.parse(cachedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const moveTask = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragTask = tasks[dragIndex];
      const updatedTasks = [...tasks];
      updatedTasks.splice(dragIndex, 1);
      updatedTasks.splice(hoverIndex, 0, dragTask);
      setTasks(updatedTasks);
    },
    [tasks]
  );

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white shadow-md rounded-lg p-4 w-full  mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <div className="text-gray-400  cursor-pointer">⋮⋮</div>
        </div>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            index={index}
            task={task}
            moveTask={moveTask}
            toggleTask={toggleTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default CardTasks;
