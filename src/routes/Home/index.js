import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// Observer/@observer包装的组件会跟踪render方法中使用的所有可观测对象，所以组件越小，组件追踪的对象越少，引起组件重新渲染的可能性也越小。

@observer
@inject('homeStore')
class Home extends Component {

  render() {
    const { homeStore } = this.props;

    return (
      <div>
        {homeStore.list.length}
      </div>
    );
  }
}

export default Home;