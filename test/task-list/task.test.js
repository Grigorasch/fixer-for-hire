import { assert } from "chai";
import { describe } from "mocha";
import Task from "../../src/task-list/task.js";

describe('Класс Task для хранения задач', function () {
    describe('Статичные методы', function () {
        describe('Функция приведения приоритета к стандартным значениям getPriority',
            function () {
                it('Перебор стандартных значений', function () {
                    const res = {
                        high: {
                            code: 1,
                            name: 'high'
                        },
                        normal: {
                            code: 0,
                            name: 'normal'
                        },
                        low: {
                            code: -1,
                            name: 'low'
                        }
                    };
                    assert.deepEqual(Task.getPriority('high'), res.high);
                    assert.deepEqual(Task.getPriority('1'), res.high);
                    assert.deepEqual(Task.getPriority(1), res.high);
                    assert.deepEqual(Task.getPriority('normal'), res.normal);
                    assert.deepEqual(Task.getPriority('0'), res.normal);
                    assert.deepEqual(Task.getPriority(0), res.normal);
                    assert.deepEqual(Task.getPriority('low'), res.low);
                    assert.deepEqual(Task.getPriority('-1'), res.low);
                    assert.deepEqual(Task.getPriority(-1), res.low);
                });
                it('Перебор не стандартных значений', function () {
                    const res = {
                        code: 0,
                        name: 'normal'
                    };
                    assert.deepEqual(Task.getPriority('long'), res);
                    assert.deepEqual(Task.getPriority(275), res);
                    assert.deepEqual(Task.getPriority(-1 * 0), res);
                    assert.deepEqual(Task.getPriority({}), res);
                    assert.deepEqual(Task.getPriority({ name: 'normal' }), res);
                });
            });
    });
    describe('Конструктор класса', function () {
        it('Вызов конструктора с пустыми аргументами', function () {
            const test = new Task();
            assert.equal(test.mission(), undefined);
            assert.equal(test.priority.code, 0);
            assert.equal(test.priority.name, 'normal');
            assert.equal(test.toString(), 'Task');
        });

        it(`Вызов конструктора с произвольной функцией без аргументов`,
            function () {
                let num = Math.floor(Math.random() * 101);
                const test = new Task(() => num);
                assert.equal(test.mission(), num);
                assert.equal(test.priority.code, 0);
                assert.equal(test.priority.name, 'normal');
                assert.equal(test.toString(), 'Task');
            });
        it(`Вызов конструктора с произвольной функцией с аргументами`,
            function () {
                let num = Math.floor(Math.random() * 101);
                const test = new Task(n => {
                    const a = n * 2;
                    return a;
                });
                assert.equal(test.mission(num), num * 2);
                assert.equal(test.priority.code, 0);
                assert.equal(test.priority.name, 'normal');
                assert.equal(test.toString(), 'Task');
            });
        it('Вызов конструктора с пустой функцией и указанным приоритетом в виде числа',
            function () {
                const test = new Task(() => { }, -1);
                assert.equal(test.mission(), undefined);
                assert.deepEqual(test.priority, {
                    code: -1,
                    name: 'low'
                });
                assert.equal(test.toString(), 'Task');
            });
        it('Вызов конструктора с пустой функцией и указанным приоритетом в виде слова',
            function () {
                const test = new Task(() => { }, 'high');
                assert.equal(test.mission(), undefined);
                assert.deepEqual(test.priority, {
                    code: 1,
                    name: 'high'
                });
                assert.equal(test.toString(), 'Task');
            });
        it('Вызов конструктора с пустой функцией и указанным приоритетом в виде нестандартного значения',
            function () {
                const test = new Task(() => { }, 'ввысь');
                assert.equal(test.mission(), undefined);
                assert.deepEqual(test.priority, {
                    code: 0,
                    name: 'normal'
                });
                assert.equal(test.toString(), 'Task');
            });
    });
});