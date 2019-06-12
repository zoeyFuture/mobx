import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('userStore')
class User extends Component {
  render() {
    const { userStore } = this.props;

    return (
      <div>
        {userStore.list.length}
      </div>
    );
  }
}

export default User;