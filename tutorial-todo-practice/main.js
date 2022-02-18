const STORAGE_KEY = 'todos-vuejs-demo';
let todoStorage = {
    fetch: function () {
        let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

    }

}
new Vue({
    el: '#app',
    data: {
        todos: [],
        current: -1,
        options: [
            {value: -1, label: "All"},
            {value: 0, label: "In-work"},
            {value: 1, label: "Done"}
        ]

    },
    computed: {
        labels() {
            return this.options.reduce(function(a,b){  // a: 빈 객체 (reduce의 2번째 argument에 할당), b: options 배열 내의 객체
                return Object.assign(a, {[b.value]: b.label})                     // Object.assign(target, ...sources) target에 sources의 값을 복사(얕은 복사),
                // [b.value] 키에 b.label 값을 할당
            },{})
        },
        computedTodos : function() {
            return this.todos.filter(function (el) {
                return this.current < 0 ? true: this.current === el.state;
            }, this)
        }
    },

    watch: {
        todos: {
            handler: function(todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    created() {
        this.todos = todoStorage.fetch();
    },
    methods: {

        doAdd: function() {
            let comment = this.$refs.comment;
            if(!comment.value.length) {
                return;
            }
            this.todos.push({id: todoStorage.uid++, comment: comment.value, state: 0})
            comment.value='';

        },
        doChangeState: function (item) {
            item.state = item.state ? 0 : 1;
        },
        doRemove: function (item) {
            let index = this.todos.indexOf(item);
            this.todos.splice(index, 1);
        }


    }
})