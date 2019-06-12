import { observable, action, computed } from 'mobx';

const HomeStore = observable({
  list: [],
});

export default HomeStore;