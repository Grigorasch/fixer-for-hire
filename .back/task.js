/**
 * Класс представляющий задачу. Содержит задачу в виде стрелочной функции и приоритет.
 *
 * @class Task
 * @typedef {Task}
 */
export default class Task {
    /**
     * Конструктор класса. Создаёт объект содержащий стрелочную функцию, которую нужно выполнить и приоритет задачи.
     *
     * @constructor
     * @param {Function} [taskFunction=() => { }] - Функция, которую необходимо выполнить.
     * @param {string} [priority='normal'] - Приоритет выполнения задачи. Указывается в виде числового или строкового значения. По умолчанию приоритет "normal".
     */
    constructor(taskFunction = () => { }, priority = 'normal') {
        this.mission = taskFunction.bind();
        this.priority = Task.getPriority(priority);
    }

    toString() {
        return 'Task';
    }

    /**
     * Статичный метод. Значение приоритета указанное в аргументе приводится к стандартному виду.
     * Приоритет может иметь 3 значения. Строковый эквивалент: high, normal, low. Числовой эквивалент: 1, 0, -1.
     * Нестандартное значение приводится к приоритету normal.
     * Регистр строковых значений не важен.
     *
     * @static
     * @param {*} inputValue - значение, которое необходимо привести к стандартному виду.
     * @returns {Object} obj - стандартный вид приоритета задачи.
     * @property {number} obj.code - числовое значение приоритета. Принимает значение 1, 0 или -1.
     * @property {string} obj.name - строковое значение приоритета. Принимает значение high, normal или low.
     */
    static getPriority(inputValue) {
        const priority = String(inputValue).toLowerCase()
        switch (priority) {
            case 'high':
            case '1':
            case 1:
                return {
                    code: 1,
                    name: 'high'
                };
            case 'low':
            case '-1':
            case -1:
                return {
                    code: -1,
                    name: 'low'
                };
            case 'normal':
            default:
                return {
                    code: 0,
                    name: 'normal'
                };
        }
    }
}