export class Middleware {
  constructor() {
    this.funcs = [];
    this.middlewareList = [];
    this.ops = null;
  }

  use(fn) {
    this.funcs.push(fn);
    return this;
  }
  next() {
    if (this.middlewareList.length > 0) {
      let ware = this.middlewareList.shift();
      ware.call(this, this.ops, this.next.bind(this));
    }
  }

  work(ops) {
    this.middlewareList = this.funcs.map((f) => f);
    this.ops = ops;
    this.next();
  }
}
