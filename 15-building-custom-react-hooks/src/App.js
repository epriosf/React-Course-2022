import React, {useEffect, useState} from "react";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const {isLoading, error, sendRequest: fetchTasks} = useHttp();

    useEffect(() => {
        const transformedTasks = tasksObj => {
            const loadedTasks = [];
            for (const taskKey in tasksObj) {
                loadedTasks.push({id: taskKey, text: tasksObj[taskKey].text});
            }
            setTasks(loadedTasks);
        };

        fetchTasks(
            {url: 'https://react-movies-swapi-api-default-rtdb.firebaseio.com/tasks.json'},
            transformedTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTask) => prevTask.concat(task));
    }
    return (
        <React.Fragment>
            <ForwardCounter/>
            <BackwardCounter/>
            <NewTask onAddTask={taskAddHandler}/>
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
