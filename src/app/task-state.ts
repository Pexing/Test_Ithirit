import { TaskModel } from './task';
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddItemAction, ToggleItemAction, DeleteItemAction, ClearItemsAction, ClearCompleteAction, LoadStateAction } from './task-actions';

export interface TaskStateModel {
    items: TaskModel[]
}
@State<TaskStateModel>({
    name: 'task',
    defaults: {
        items: []
    },
})
@Injectable()
export class TaskState {
    @Action(AddItemAction)
    addItem(ctx: StateContext<TaskStateModel>, action: AddItemAction) {
        const { name } = action;

        if (!name) {
            return;
        }

        const state = ctx.getState();

        const taskItem: TaskModel = {
            id: Math.floor(Math.random() * 1000),
            isDone: false,
            title: name,
        };

        ctx.setState({
            ...state,
            items: [...state.items, taskItem],
        });

        localStorage.setItem('session', JSON.stringify(ctx.getState()))
    }

    @Action(ToggleItemAction)
    toggleItem(ctx: StateContext<TaskStateModel>, action: ToggleItemAction) {
        const state = ctx.getState();

        const newTodoItems = state.items.map((item) => {
            if (item.id === action.id) {
                return {
                    ...item,
                    isDone: !item.isDone,
                };
            }

            return item;
        });

        ctx.setState({
            items: [...newTodoItems],
        });

        localStorage.setItem('session', JSON.stringify(ctx.getState()))
    }

    @Action(DeleteItemAction)
    deleteItem(ctx: StateContext<TaskStateModel>, action: DeleteItemAction) {
        const state = ctx.getState();
        // delete state.items[delete_index]
        // console.log(state)
        ctx.setState({
            items: state.items.filter(object => object.id !== action.id)
        });

        localStorage.setItem('session', JSON.stringify(ctx.getState()))
    }

    @Action(ClearItemsAction)
    clearItems(ctx: StateContext<TaskStateModel>) {
        const state = ctx.getState();
        // delete state.items[delete_index]
        // console.log(state)
        ctx.setState({
            items: []
        });

        localStorage.setItem('session', JSON.stringify(ctx.getState()))
    }

    @Action(ClearCompleteAction)
    clearComplete(ctx: StateContext<TaskStateModel>) {
        const state = ctx.getState();
        // delete state.items[delete_index]
        // console.log(state)
        ctx.setState({
            items: state.items.filter(object => object.isDone === false)
        });

        localStorage.setItem('session', JSON.stringify(ctx.getState()))
    }

    @Action(LoadStateAction)
    loadState(ctx: StateContext<TaskStateModel>) {
        let data: any = localStorage.getItem('session');
        let session: any = JSON.parse(data)
        ctx.setState(session)
    }
}
