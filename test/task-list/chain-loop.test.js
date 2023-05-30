import { assert, expect } from "chai";
import { describe } from "mocha";
import ChainLoop from "../../src/task-list/chain-loop.js";

describe('Класс ChainLoop для организации связанного списка', function () {
    describe('Конструктор класса', function () {
        it('Вызов конструктора без аргументов', function () {
            const testLoop = new ChainLoop();
            assert.equal(testLoop.start, testLoop);
            assert.isTrue(testLoop.end instanceof ChainLoop);
            assert.equal(testLoop.prev, null);
            assert.equal(testLoop.next, testLoop.end);
            assert.equal(testLoop.cur, null);
            assert.equal(testLoop.enum(), 0);
        });
        it('Вызов конструктора с методом start', function () {
            const testLoop = new ChainLoop('start');
            assert.equal(testLoop.start, testLoop);
            assert.isTrue(testLoop.end instanceof ChainLoop);
            assert.equal(testLoop.prev, null);
            assert.equal(testLoop.next, testLoop.end);
            assert.equal(testLoop.cur, null);
            assert.equal(testLoop.enum(), 0);
        });
        it('Вызов конструктора с методом end без второго аргумента',
            function () {
                let badFn = function () { new ChainLoop('end') }
                expect(badFn).to.throw(SyntaxError);
            });
        it('Вызов конструктора с методом end', function () {
            const startLoop = new ChainLoop('start');
            const testLoop = new ChainLoop('end', startLoop);
            assert.equal(testLoop.start, startLoop);
            assert.equal(testLoop.end, testLoop);
            assert.equal(testLoop.prev, startLoop);
            assert.equal(testLoop.next, null);
            assert.equal(testLoop.cur, null);
            assert.equal(testLoop.enum(), startLoop.enum());
            assert.equal(testLoop.enum(), 0);
        });
        it('Вызов конструктора с методом addBefore без второго аргумента', function () {
            let badFn = function () { new ChainLoop('addBefore') }
            expect(badFn).to.throw(SyntaxError);
        });
        it('Вызов конструктора с методом addBefore', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addBefore', startLoop.end);
            assert.equal(testLoop.start, startLoop);
            assert.equal(testLoop.end, startLoop.end);
            assert.equal(testLoop.prev, startLoop);
            assert.equal(testLoop.next, startLoop.end);
            assert.equal(testLoop.cur, null);
            assert.equal(testLoop.enum(), 1);
            assert.equal(startLoop.next, testLoop);
            assert.equal(startLoop.end.prev, testLoop);
        });
        it('Вызов конструктора с методом addAfter без второго аргумента', function () {
            let badFn = function () { new ChainLoop('addAfter') }
            expect(badFn).to.throw(SyntaxError);
        });
        it('Вызов конструктора с методом addAfter', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addAfter', startLoop);
            assert.equal(testLoop.start, startLoop);
            assert.equal(testLoop.end, startLoop.end);
            assert.equal(testLoop.prev, startLoop);
            assert.equal(testLoop.next, startLoop.end);
            assert.equal(testLoop.cur, null);
            assert.equal(testLoop.enum(), 1);
            assert.equal(startLoop.next, testLoop);
            assert.equal(startLoop.end.prev, testLoop);
        });
    });

    describe('Метод setPrevChain', function () {
        it('Вызов метода с правильным аргументом', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addAfter', startLoop);
            testLoop.setPrevChain(testLoop);
            assert.equal(testLoop.prev, testLoop);
        });
        it('Вызов метода с неправильным аргументом', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addAfter', startLoop);
            let badFn = function () { testLoop.setPrevChain('string') }
            expect(badFn).to.throw(SyntaxError);
        });
    });
    describe('Метод setNextChain', function () {
        it('Вызов метода с правильным аргументом', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addAfter', startLoop);
            testLoop.setNextChain(testLoop);
            assert.equal(testLoop.next, testLoop);
        });
        it('Вызов метода с неправильным аргументом', function () {
            const startLoop = new ChainLoop();
            const testLoop = new ChainLoop('addAfter', startLoop);
            let badFn = function () { testLoop.setNextChain('string') }
            expect(badFn).to.throw(SyntaxError);
        });
    });
    describe('Метод setContent', function () {
        it('Вызов метода с аргументом', function () {
            const startLoop = new ChainLoop();
            startLoop.setContent({name: 'Gri', age: 30})
            assert.deepEqual(startLoop.cur, {name: 'Gri', age: 30});
        });
    });
});
