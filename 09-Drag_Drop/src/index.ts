const tasks = document.querySelectorAll<HTMLElement>(".task");

const taskLists = document.querySelectorAll<HTMLElement>(".task-list");

let draggedTask: HTMLElement | null = null;

tasks.forEach((task) => {

    task.addEventListener("dragstart", () => {

        draggedTask = task;

        task.classList.add("dragging");

        console.log("Drag Started:", task.textContent);

    });

});


tasks.forEach((task) => {

    task.addEventListener("dragend", () => {

        task.classList.remove("dragging");

        draggedTask = null;

        console.log("Drag Ended");

    });

});

taskLists.forEach((taskList) => {

    taskList.addEventListener("dragover", (event: DragEvent) => {

        event.preventDefault();

    });

});


taskLists.forEach((taskList) => {

    taskList.addEventListener("drop", (event: DragEvent) => {

        event.preventDefault();

        if (draggedTask) {

            taskList.appendChild(draggedTask);

            console.log(
                `"${draggedTask.textContent}" moved to ${taskList.id}`
            );

        }

    });

});