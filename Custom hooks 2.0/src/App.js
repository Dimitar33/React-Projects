import React, { useEffect, useState } from 'react';
import useHttp from './components/hooks/use-http';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {

  const [tasks, setTasks] = useState([]);
  
  function asignTasks(data){

    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

     setTasks(loadedTasks);
  }

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(
    { url: 'https://learning-react-ec08a-default-rtdb.firebaseio.com/tasks.json' },
    asignTasks );


  useEffect(() => {
    fetchTasks();
  });

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

 

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
