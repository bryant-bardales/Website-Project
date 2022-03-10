import React from 'react';
import './App.css';
import TaskList from "./components/TaskList"

function App() {
  return (
    //Imports the application to the App() function
    <div className='todo-webapp'>
       <TaskList />
    </div>
  );
}

export default App;
