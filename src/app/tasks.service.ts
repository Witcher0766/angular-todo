import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTask) => [...oldTask, newTask]);
  }

  updateTask(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
