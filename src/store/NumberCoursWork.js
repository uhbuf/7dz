import { action, makeObservable, observable } from 'mobx';

class NumberCoursWork {
  @observable count = [];
  @action changeCount(numberWork) {
    if (this.count.indexOf(numberWork) == -1) this.count.push(numberWork);
  }
  constructor() {
    makeObservable(this);
  }
}
export default NumberCoursWork;
