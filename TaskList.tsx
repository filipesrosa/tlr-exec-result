import React, { useState, useEffect } from 'react';

type TaskListProps = {
  id?: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);
  const [task, setTask] = useState<TaskListProps>({} as TaskListProps);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const createTask = async () => {
    const response = await fetch('/api/tasks', {
      data: JSON.stringify(task)
    })

    if (response.code === 400) {
      setError(response.message);
    }
  }

  const handleCreate = async () => {
    // call create endpoint...
    const response = await createTask(task);
    if (response === 'OK') {
      console.log('task created');
    }
  }

  const handleChange = (value: string) => {
    setTask(prev => ({...prev, title: value}));
  }

  useEffect(() => {
    const fetchList = async () => {
      // call list endpoint...
      const response = await getTaskList();
      setTaskList(response);
      setLoading(false);
    }

    fetchList();
  }, [taskList])

  if (loading) {
    return (
      <div>Loading tasks...</div>
    )
  }

  return (
    <list>
      {
        taskList.map(task => (
          <listitem>
            <p>`${task.id} - ${task.title} - Completed: ${task.completed}`}</p>
          </listitem>
        ))
      }
      <input type="text" value={taskDescription} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleCreate} disabled={loading}>Create</button>
      {
        error && (
          <div>
            {error}
          </div>
        )
      }
    </list>
  )
}