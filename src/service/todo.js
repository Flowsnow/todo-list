import store from 'store';

export default class TodoService {
    static FILTER_ALL = Symbol('ALL');
    static FILTER_UNCOMPLETE = Symbol('UNCOMPLETE');
    static NAMESPACE = 'todo::';
    todos = [];
    filter = TodoService.FILTER_ALL;

    create(title) {
        const todo = {
            key: `${TodoService.NAMESPACE}${(new Date()).valueOf()}`,  // valueOf返回unix时间戳
            title: title,
            isCompleted: false
        }
        console.log(todo)
        this.todos.push(todo);
        store.set(todo.key, todo);
        return todo;
    }

    load() {
        this.todos = [];
        store.each((value, key) => {
            if (key.startsWith(TodoService.NAMESPACE)) {  // 以NAMESPACE开头的才是todo
                this.todos.push(value)
            }
        });
    }

    list() {
        if (this.filter === TodoService.FILTER_ALL) {
            return this.todos;
        }
        return this.todos.filter(it => !it.isCompleted);  // 数组的filter函数
    }
    
    reopen(key) {
        const todo = this.todos.find(it => it.key === key);
        todo.isCompleted = false;
        store.set(todo.key, todo);  // 如果key已经存在则会更新value
        return todo;
    }

    complete(key) {
        const todo = this.todos.find(it => it.key === key);
        todo.isCompleted = true;
        store.set(todo.key, todo);
        return todo;
    }
}