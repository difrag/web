document.addEventListener('DOMContentLoaded', () => {
    const taskListsContainer = document.getElementById('taskListsContainer');

    // Function to fetch task lists and tasks
    const fetchTaskLists = async () => {
        try {
            const response = await fetch('tasks.php');
            const taskLists = await response.json();

            taskListsContainer.innerHTML = '';
            const groupedTaskLists = groupBy(taskLists, 'id');

            Object.keys(groupedTaskLists).forEach(taskListId => {
                const taskList = groupedTaskLists[taskListId][0];
                const tasks = groupedTaskLists[taskListId];

                const taskListElement = document.createElement('div');
                taskListElement.classList.add('task-list');
                taskListElement.innerHTML = `
                    <h3>${taskList.title}</h3>
                    <div class="tasks-container">
                        ${tasks.map(task => `
                            <div class="task ${task.status.toLowerCase()}">
                                <h4>${task.task_title}</h4>
                                <p>Created at: ${new Date(task.created_at).toLocaleString()}</p>
                                <p>Status: ${task.status}</p>
                                <p>Assigned to: ${task.assigned_to}</p>
                                <button onclick="editTask(${task.task_id})">Edit</button>
                            </div>
                        `).join('')}
                    </div>
                `;

                taskListsContainer.appendChild(taskListElement);
            });
        } catch (error) {
            console.error('Error fetching task lists:', error);
        }
    };

    // Helper function to group tasks by task list ID
    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    };

    // Function to add a new task
    const addTaskForm = document.getElementById('addTaskForm');
    addTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const taskListId = document.getElementById('taskListId').value;

        await fetch('add_task.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, task_list_id: taskListId })
        });

        fetchTaskLists();
        addTaskForm.reset();
    });

    // Function to edit a task
    window.editTask = async (id) => {
        const status = prompt('New status (Pending, In Progress, Completed):');
        const assignedTo = prompt('Assign to (username):');
        if (status && assignedTo) {
            await fetch('edit_task.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, status, assigned_to: assignedTo })
            });
            fetchTaskLists();
        }
    };

    // Initial fetch of task lists and tasks
    fetchTaskLists();
});
