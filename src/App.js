import React, { useState, useEffect } from "react";
import "./style/App.css";
import OnlineList from "./components/OnlineList";
import TextArea from "./components/TextArea";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignModal from "./components/SignModal";

const socket = io("http://localhost:8080");
socket.on("connect", () => {
  console.log("Soket with the server is open");
});
// socket.on("disconnect");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      users: [],
      user: "",
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({ user }, () => {
      socket.emit("userON", { user: this.state.user, id: socket.id });
    });
  }

  componentDidMount() {
    console.log("rodou o useEffect 1");
    socket.on("user", (data) => this.setState({ users: data }));
    socket.on("send message", (data) => {
      this.setState((m) => ({
        message: [...m.message, `${data.user}: ${data.message}`],
      }));
    });
  }

  sendMessage(message) {
    console.log("enviando a menssagem " + message);
    socket.emit("send message", message);
  }

  render() {
    return (
      <Router>
        <Route exact path={"/"}>
          <SignModal setUser={this.setUser} />
        </Route>

        <Route path={"/rooms"}>
          <div className="app">
            <OnlineList users={this.state.users}></OnlineList>
            <TextArea
              user={this.state.user}
              sendMessage={this.sendMessage}
              otherMessages={this.state.message}
            />
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
