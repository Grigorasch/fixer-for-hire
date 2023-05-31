function Task(taskFunction,
  {
    name = 'function',
    priority = 0,
    pre = () => console.log('function start solve'),
    callback = () => console.log('function solve'),
  } = {}) {
  this.name = name;
  this.priority = priority;
  this.solve = () => {
    pre();
    taskFunction();
    callback();
  }
}

let testTask = new Task(()=>5+5);

// function Loop({
  
// }) {
//   this.start = null;
//   this.end = null;
//   this.prev = null;
//   this.next = null;
//   this.pos = null;
// }

function Knit() {
  function Loop({
    
  }) {
    
  }
}