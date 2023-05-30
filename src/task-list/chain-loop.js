export default class ChainLoop {
    constructor(prevChain = null) {
      if (prevChain.toString() === 'ChainLoop') {
        this.start = prevChain.start;
        this.end = prevChain.end;
        this.prev = prevChain;
        this.next = prevChain.next;
        this.cur = null;
        this.enum = () => this.prev.enum() + 1;
        this.prev.setNextChain(this);
        this.next.setPrevChain(this);
      } else {
        this.start = this;
        this.end = null;
        this.prev = null;
        this.next = null;
        this.cur = null;
        this.enum = () => 0;
      }
    }
    
    setPrevChain(newPrevChain) {
      this.prev = newPrevChain;
    }
    
    setNextChain(newNextChain) {
      this.next = newNextChain;
    }
    
    setContent(content) {
      this.cur = content
    }
    
    toString() {
      return 'ChainLoop';
    }
}