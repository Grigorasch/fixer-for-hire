import { Priority } from "./Priority";

/** Класс для создания объекта задачи. 
 * @version 1.0.0
 * @since 0.3.0
 * @example <caption>Пример создания простого объекта</caption>
 * const exampleTask = new Task(() => {
 *                                      const a = 5;
 *                                      const b = 2;
 *                                      const c = 5**2;
 *                                      return c
 *                                    });
 * // exampleTask = Task {name: 'function', priority: 0, isSolved: false, solve: ƒ}
 * @example <caption>Пример выполнения задачи</caption>
 * exampleTask.isSolved() // false
 * exampleTask.solve() //
*/
export class Task {
    /**
     * Конструктор для создания объекта задачи.
     * @param {function} taskFunction - функция, которую нужно выполнить.
     * @param {object} options - объект с настройками:
     * @param {string} options.name - имя функции (по умолчанию 'function').
     * @param {number} options.priority - приоритет выполнения (по умолчанию NORMAL).
     * @param {function} options.preFunction - функция, которая будет выполнена перед основной функцией (по умолчанию выводит в консоль 'function start solving').
     * @param {function} options.callbackFunction - функция, которая будет выполнена после основной функции (по умолчанию выводит в консоль 'function solve').
     * @throws {SyntaxError} если taskFunction, preFunction или callbackFunction не являются функциями.
     */
    constructor(
        taskFunction,
        {
            name = 'function',
            priority = Priority.NORMAL,
            preFunction = () => console.info('function start solving'),
            callbackFunction = () => console.info('function solve'),
        } = {}
    ) {



        //Проверка типа переданного объекта в контейнеры для функций
        if (typeof taskFunction !== 'function') {
            throw new SyntaxError('Переданный аргумент taskFunction не является функцией');
        }
        if (typeof preFunction !== 'function') {
            throw new SyntaxError('Переданный аргумент pre-функции не является функцией');
        }
        if (typeof callbackFunction !== 'function') {
            throw new SyntaxError('Переданный аргумент callback-функции не является функцией');
        }
        //Приведение переданого аргумента name к строке
        this.name = String(name);
        this.priority = priority;

        /**
        * Метод запускающий выполнение задачи. Также предварительно запускается 
        * @method
        * @returns {void}
        */
        this.solve = () => {
            preFunction();
            taskFunction();
            callbackFunction();
            this.isSolved = true;
        };
        this.isSolved = false;
    };

    /**
     * Возвращает статус задачи решена/не решена.
     *
     * @returns {boolean} - флаг, сообщающий о том, был ли вызван метод solve() или нет.
     */
    isSolved() {
        return this.isSolved;
    }
}