import { action, makeObservable, observable } from 'mobx';

class MainStore {
  @observable userName = 'John';
  @action changeUserName(newUserName) {
    this.userName = newUserName;
  }
  constructor() {
    makeObservable(this);
  }
}
export default MainStore;
