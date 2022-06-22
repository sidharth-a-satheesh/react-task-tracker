import { useState } from "react"
const Tasks = () => {
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
    <>
    {
        tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))
    }
    </>
  )
}

export default Tasks