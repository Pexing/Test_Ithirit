import { TaskState, TaskStateModel } from './task-state';
import { Selector } from '@ngxs/store';
import { TaskModel } from './task';

export class TaskSelectors {
  @Selector([TaskState])
  static todoItems(state: TaskStateModel): TaskModel[] {
    return state.items;
  }
}