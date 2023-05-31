export default class TaskList {

}

function TaskLoop(taskFunction,
    {
        taskOption: {
            priority = 0,
            callback = null,
        } = {},
        nodeOption: {
            start = null,
            end = null,
            prev = null,
            next = null,
        } = {}
    } = {}) {
    this.task = {
        get taskSolver() {
            return () => taskFunction();
        },
        taskImportance: priority
    };

    this.list = {
        start: start,
        end: end,
        prev: prev,
        next: next
    };
}

const taskOption = { priority: 1 };
const nodeOption = { start: {}, end: {} }
let a = new TaskLoop(() => { }, { taskOption, nodeOption });
console.log(a);