/**
 * Класс, представляющий узел в связанном списке. В каждом узле заданы следующие поля:
 * start - содержит ссылку на представляющий узел;
 * end - содержит ссылку на замыкающий узел;
 * prev - содержит ссылку на предыдущий узел;
 * next - содержит ссылку на следующий узел;
 * cur - полезная информация, хранящаяся в связанном списке;
 * enum - функция вычисляющая текущую позицию узла в списке.
 * Полученный список, даже пустой, должен содержать представляющий и замыкающий узлы. Список всегда представляется ввиде ссылки на представляющий узел и дальнейшая работа со списком осуществляется путём последовательного перехода от первого элемента ко второму, затем к третьему и т.д.
 * При необходимости, допускается реализация с обратным переходом. В таком случае, список будет представлен ввиде ссылки на замыкающий объект, а дальнейшая работа со списком осуществляется путем последовательного перехода от последнего элемента к предыдущему и т.д.
 * 
 * @class ChainLoop
 * @typedef {ChainLoop}
 */
export default class ChainLoop {
  /**
   * Конструктор, в зависимости от заданного метода, создаёт узел для связанного списка
   *
   * @constructor
   * @param {string} [method='start'] -  метод создания узла. Принимает одно из следующих значений:
   * 'start' - создаёт представляющий узел;
   * 'end' - создаёт замыкающий узел;
   * 'addBefore' - создаёт узел и добавляет его перед указанным узлом;
   * 'addAfter' - создаёт узел и добавляет его после указанного узла.
   * По умполчанию создаётся представляющий объект.
   * @param {ChainLoop|null} [adjacent=null] - соседний узел списка в зависимости от используемого метода.
   */
  constructor(method = 'start', adjacent = null) {
    switch (method) {
      //Создание представляющего (первого) объекта списка
      case 'start':
        this.start = this;
        this.end = new ChainLoop('end', this);
        this.prev = null;
        this.next = this.end;
        this.cur = null;
        this.enum = () => 0;
        break;
      //Создание замыкающего (последнего) объекта списка для указанного представляющего
      case 'end':
        if (adjacent) {
          if (adjacent instanceof ChainLoop) {
            this.start = adjacent;
            this.end = this;
            this.prev = this.start;
            this.next = null;
            this.cur = null;
            this.enum = () => this.prev.enum();
          } else {
            throw new SyntaxError('Объект соседнего узла, переданный в качестве аргумента, должен принадлежать к типу ChainLoop')
          }
        } else {
          throw new SyntaxError('Необходимо указать представляющий (первый) объект списка в качестве второго аргумента!')
        }
        break;
      //Создание объекта перед указанным
      case 'addBefore':
        if (adjacent) {
          if (adjacent instanceof ChainLoop) {
            this.start = adjacent.start;
            this.end = adjacent.end;
            this.prev = adjacent.prev;
            this.next = adjacent;
            this.cur = null;
            this.enum = () => this.prev.enum() + 1;
            this.prev.setNextChain(this);
            this.next.setPrevChain(this);
          } else {
            throw new SyntaxError('Объект следующего узла, переданный в качестве аргумента, должен принадлежать к типу ChainLoop')
          }
        } else {
          throw new SyntaxError('Необходимо указать следующий объект списка в качестве второго аргумента!')
        }
        break;
      //Создание объекта после указанного
      case 'addAfter':
        if (adjacent) {
          if (adjacent instanceof ChainLoop) {
            this.start = adjacent.start;
            this.end = adjacent.end;
            this.prev = adjacent;
            this.next = adjacent.next;
            this.cur = null;
            this.enum = () => this.prev.enum() + 1;
            this.prev.setNextChain(this);
            this.next.setPrevChain(this);
          } else {
            throw new SyntaxError('Объект предыдущего узла, переданный в качестве аргумента, должен принадлежать к типу ChainLoop')
          }
        } else {
          throw new SyntaxError('Необходимо указать предыдущий объект списка в качестве второго аргумента!')
        }
        break;
      default:
        throw new SyntaxError('Неверно указан метод конструктора!')
    }
  }

  /**
   * Медот для изменения ссылки на предыдущий узел.
   *
   * @param {ChainLoop} newPrevChain - ссылка на обновленный предыдущий узел.
   */
  setPrevChain(newPrevChain) {
    this.prev = newPrevChain;
  }

  /**
   * Медот для изменения ссылки на следующий узел.
   *
   * @param {ChainLoop} newNextChain - ссылка на обновленный следующий узел.
   */
  setNextChain(newNextChain) {
    this.next = newNextChain;
  }

  /**
   * Метод для установки полезного содержимого для узла списка
   *
   * @param {*} content - полезное содержимое узла. Допускается любое содержимое.
   */
  setContent(content) {
    this.cur = content
  }
}