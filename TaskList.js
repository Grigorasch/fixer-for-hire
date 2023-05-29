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

const Task = {
  task: () => {},
  priority: 'normal'
}

const chainLoop = {
  start: {},
  end: {},
  prev: {},
  next: {},
  cur: Task,
  num: () => prev.num() + 1
}