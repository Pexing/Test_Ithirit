export class AddItemAction {
    static readonly type = '[TODO page] Add item';
    constructor(public name: string) { }
}

export class ToggleItemAction {
    static readonly type = '[TODO page] Toggle Item';
    constructor(public id: number) { }
}

export class DeleteItemAction {
    static readonly type = '[TODO page] Delete Item';
    constructor(public id: number) { }
}

export class ClearItemsAction {
    static readonly type = '[TODO page] Clear Items'
    constructor() { }
}

export class ClearCompleteAction {
    static readonly type = '[TODO page] Clear Complete'
    constructor() {}
}

export class LoadStateAction {
    static readonly type = '[TODO page] Load Items'
    constructor() {}
}