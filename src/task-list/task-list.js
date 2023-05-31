export default class TaskList {

}

/**
 * Функция конструктор объекта, который является узловым элементом связанного списка
 *
 * @param {{ taskFunction: any; taskPriority?: number; }} { taskFunction, taskPriority = 0 }
 * @param {{}} [nodeOption={}]
 * @returns
 */
function TaskLoop(taskFunction,
    {
        taskOption: {
            priority = 0,
            callback = null,
        },
        nodeOption: {
            start = null,
            end = null,
            prev = null,
            next = null,
        }
    }) { // task = { taskFunction, taskPriority: 0 }, nodeOption = {}) {
    // const task = {
    //     taskFunction,
    //     taskPriority
    // }
    this.task = {
        get taskSolver() {
            return () => taskFunction();
        },
        taskImportance: task.taskPriority
    };

    const NULL_NODE_OPTION = {
        start: null,
        end: null,
        prev: null,
        next: null
    }
    this.list = Object.assign({}, NULL_NODE_OPTION, nodeOption);
}

const tOpt = { priority: 1 };
const nOpt = { start: {}, end: {} }
let a = new TaskLoop(()=> {}, tOpt, nOpt);
console.log(a);