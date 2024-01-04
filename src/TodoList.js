import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const completeTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTask(e.target.window);
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Add Task</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    id='input'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={styles.input}
                    placeholder="New Task"
                    onKeyDown={handleKeyDown}
                />
                <button style={styles.addButton} onClick={addTask}>
                    Add Task
                </button>
            </div>
            <ul style={styles.list}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            ...styles.task,
                            textDecoration: task.completed ? 'line-through' : 'none',
                        }}
                    >
                        <div style={styles.taskContent}>
                            {task.title}
                            <div>
                                <button
                                    style={{ ...styles.button, marginRight: '0.5rem' }}
                                    onClick={() => completeTask(task.id)}
                                >
                                    {task.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        borderRadius: '8px',
        background: '#fff',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '1rem',
    },
    list: {
        listStyle: 'none',
        padding: '0',
    },
    task: {
        marginBottom: '0.5rem',
        padding: '1rem',
        borderRadius: '4px',
        display: 'flex',
        color: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f4f4f4',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    taskContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
    deleteButton: {
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        backgroundColor: '#FF6347', // Tomato color
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
    inputContainer: {
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        padding: "25px"
    },
    input: {
        flex: '1',
        padding: '0.5rem',
        marginRight: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '60%',
    },
    addButton: {
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
};

export default TodoList;
