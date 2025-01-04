import { Component, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  constructor(private taskService:TaskService) {}
   

  selectedFilter = signal<string>('all');
  tasks = this.taskService.allTasks;


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
