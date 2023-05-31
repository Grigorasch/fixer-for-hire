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
export class Priority {
    //Статические поля
    /**
     * Поле возвращает массив с перечислением всех доступных приоритетов в строковом виде.
     * @static
     * @readonly
     * @returns {string[]} - массив
     */
    static get LIST() {
        return ['LOW', 'NORMAL', 'HIGH'];
    }
    static set LIST(value) {
        throw new SyntaxError('Список LIST не может быть переопределен');
    }
    /**
     * Поле возвращает числовое значение приоритета LOW
     * @static
     * @readonly
     * @returns {number}
     */
    static get LOW() {
        return -1;
    }
    static set LOW(value) {
        throw new SyntaxError('Поле LOW не может быть переопределено');
    }
    /**
     * Поле возвращает числовое значение приоритета NORMAL
     * @static
     * @readonly
     * @returns {number}
     */
    static get NORMAL() {
        return 0;
    }
    static set NORMAL(value) {
        throw new SyntaxError('Поле NORMAL не может быть переопределено');
    }
    /**
     * Поле возвращает числовое значение приоритета HIGH
     * @static
     * @readonly
     * @returns {number}
     */
    static get HIGH() {
        return 1;
    }
    static set HIGH(value) {
        throw new SyntaxError('Поле HIGH не может быть переопределено');
    }
}