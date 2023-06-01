/**
* Класс для установки приоритета ззадачи. Обеспечивает доступ к статическим полям,
* которые возвращают стандартные значения приоритетов в строковом и числовом видах.
* @version: Priority v1.0.0
* @since: lib v0.3.0
* @example: <caption>Получение перечня доступных приоритетов</caption>
* const availabelPriority = Priority.LIST // ['LOW', 'NORMAL', 'HIGH']
* @example: <caption>Получение числового значения приоритета</caption>
* const testPriority = Priority.NORMAL // 0
*/
// class Priority {

// }

// function priorityList() {
//   const PRIORITY_LIST = {
//     LOW: -1,
//     NORMAL: 0,
//     HIGH: 1,
//   };
//   for (let key in PRIORITY_LIST) {
//     const value = PRIORITY_LIST[key];
//     Object.defineProperty(PRIORITY_LIST, key,
//       {
//         set: function(value) {
//           throw new SyntaxError("Свойства объекта PRIORITY не могут быть переопределены")
//         },
//         get: () => value,
//       }
//     );
//   }
//   console.log(PRIORITY_LIST);
//   return PRIORITY_LIST;
// }

// priorityList();
// console.log(PRIORITY)



function createPriorityModel(stringPriority, codePriority) {
  if (!Array.isArray(stringPriority) && !Array.codePriority) {
    throw new TypeError('Аргументы stringPriority и codePriority должы быть массивами. Аргумент stringPriority - это перечень наименований различных приоритетов. Аргумент codePriority - код список кодов приоритетов.')
  }
  if (stringPriority && codePriority) {
    throw new TypeError('Аргументы stringPriority и codePriority должы быть массивами. Аргумент stringPriority - это перечень наименований различных приоритетов. Аргумент codePriority - код список кодов приоритетов.')
  }
}