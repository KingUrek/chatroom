import React, { useState, useEffect } from "react";
import "./App.css";
import OnlineList from "./components/OnlineList";
import TextArea from "./components/TextArea";
import io from "socket.io-client";

const socket = io("http://localhost:8080");
socket.on("connect", () => {
  console.log("Soket with the server is open");
});
socket.on("disconnect");

function App(props) {
  const [message, setMessage] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("rodou o useEffect 1");
    socket.on("user", (data) => setUsers(data));
    socket.on("send message", (data) => {
      setMessage((m) => [...m, data.message]);
    });
  }, []);

  useEffect(() => {
    console.log("rodou o useEffect 2");
    if (user.trim()) {
      socket.emit("userON", { user: user, id: socket.id });
    }
  }, [user]);

  function sendMessage(message) {
    console.log("enviando a menssagem " + message);
    socket.emit("send message", message);
  }

  return (
    <div className="app">
      <OnlineList users={users}></OnlineList>
      <TextArea
        setUser={setUser}
        sendMessage={sendMessage}
        otherMessages={message}
      ></TextArea>
    </div>
  );
}

export default App;
