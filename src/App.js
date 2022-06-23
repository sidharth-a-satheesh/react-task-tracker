import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App({title}) {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appoinment',
            day: 'Feb 15th at 2:30pm',
            remainder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'June 15th at 1:30pm',
            remainder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'March 15th at 2:30pm',
            remainder: false,
        },
    ]
  )
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
