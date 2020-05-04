import React, { Component } from "react";
import OnlineUser from "./OnlineUser";
import AlignItemsList from "./AlignListItems";
let _ = require("lodash");

export default class OnlineList extends Component {
  render() {
    return (
      <div className="userList">
        <h3>Usuários online</h3>
        <AlignItemsList>
          {this.props.users.map((usr) => (
            <OnlineUser key={_.uniqueId()} user={usr} />
          ))}
        </AlignItemsList>
      </div>
    );
  }
}
