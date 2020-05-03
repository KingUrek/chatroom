import React, { useState, useEffect } from "react";
import "./App.css";
import OnlineList from "./components/OnlineList";
import TextArea from "./components/TextArea";
import io from "socket.io-client";

const socket = io("http://localhost:8080");
socket.on("connect", () => console.log("conectado no client"));

function App(props) {
  const [message, setMessage] = useState([]);
  function sendMessage(message) {
    console.log("enviando a menssagem " + message);
    socket.emit("send message", message);
  }

  useEffect(() => {
    socket.on("send message", (data) => {
      console.log(data);
      setMessage((m) => [...m, data.message]);
    });
  }, []);

  return (
    <>
      <OnlineList></OnlineList>
      <TextArea sendMessage={sendMessage} otherMessages={message}></TextArea>
    </>
  );
}

export default App;
