// https://blog.csdn.net/feng_zhiyu/article/details/82989949 - mobx 实战实践

import { observable, action, computed } from 'mobx';

class UserStore {
  // 不可观测对象

  // store与id为不可观测属性， MobX中不可观测属性是指对MobX数据流不会产生影响
  size = 0;
  name = '张三';

  // 可观测对象
  @observable list = [];

  constructor(list = []) {
    this.list = [];
  }

  @action addAction(action) {
    this.list.push(action);
  }

  // 静态方法，返回新实例
  static fromJS(list = []) {
    return new UserStore(list);
  }
}

export default new UserStore();