import React from "react";
import "./App.css";
import OnlineList from "./components/OnlineList";
import TextArea from "./components/TextArea";
import io from "socket.io-client";

const socket = io("http://localhost:8080");
socket.on("connect", () => console.log("conectado no client"));

function App() {
  function sendMessage(message) {
    console.log("enviando a menssagem " + message);
    socket.emit("send message", message);
  }
  return (
    <>
      <OnlineList></OnlineList>
      <TextArea sendMessage={sendMessage}></TextArea>
    </>
  );
}

export default App;
