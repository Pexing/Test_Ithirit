import { TaskSelectors } from './task-select';
import { AddItemAction, ClearItemsAction, DeleteItemAction, ToggleItemAction, ClearCompleteAction, LoadStateAction } from './task-actions';
import { TaskModel } from './task';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_Ithirit';
  constructor(private store: Store) { 
    this.loadData()
  }

  @Select(TaskSelectors.todoItems) todoItems$!: Observable<TaskModel[]>;
  newItemName = '';
  changeValue(val: string) {
    this.newItemName = val
  }
  trackById(index: number, item: TaskModel): number {
    return item.id;
  }
  addItem() {
    this.store.dispatch(new AddItemAction(this.newItemName));
    this.newItemName = '';
  }
  toggleItem(todoItem: TaskModel) {
    this.store.dispatch(new ToggleItemAction(todoItem.id));
  }
  deleteItem(deleteItem: TaskModel) {
    this.store.dispatch(new DeleteItemAction(deleteItem.id));
  }
  clearItems() {
    this.store.dispatch(new ClearItemsAction())
  }
  clearComplete() {
    this.store.dispatch(new ClearCompleteAction())
  }
  loadData() {
    this.store.dispatch(new LoadStateAction())
  }
}
