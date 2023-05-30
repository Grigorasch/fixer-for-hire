/**
 * @description
 * @class TaskList
 */
class TaskList {
  constructor() {
    const list = {
      start: null,
      end: {
        start: list,
        end: null
      },
    };

    this.length = 0;
  }
}

/** @type {*} */
const Task = {
  task: () => { },
  priority: 'normal'
}

//Стрелочные функции симулирующие задачи
TaskCreater = function (num) {
  return () => num;
}
const tsks = new Array(5).fill().map((_, index) => new TaskCreater(index + 1));

const chLoop = {
  start: null,
  end: null,
  prev: null,
  next: null,
  cur: null,
  num: () => 0
}
chLoop.end = {
  start: chLoop,
  end: null,
  prev: chLoop,
  next: null,
  cur: null,
  num: function() {
    return this.prev.num()
  }
}
chLoop.next = chLoop.end;

const chainLoop = {
  start: {},
  end: {},
  prev: {},
  next: {},
  cur: Task,
  num: () => prev.num() + 1
}

