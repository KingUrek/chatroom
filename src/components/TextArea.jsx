import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/TextArea.css";
const _ = require("lodash");

export default function TextArea(props) {
  const [message, setMessage] = useState("");
  // const [user, setUser] = useState("annonimus");

  function handleSubmit() {
    const { sendMessage, user } = props;
    sendMessage({ user, message });
    setMessage("");
  }
  function sendButton(e) {
    e.preventDefault();
    handleSubmit();
  }
  // function sendUser() {
  //   console.log("User is sented");
  //   props.setUser({ user });
  // }

  return (
    <div className="chat">
      {/* <TextField
        label="User"
        style={{ margin: 8 }}
        placeholder="What is your name?"
        margin="normal"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        onBlur={sendUser}
      /> */}
      <div className="message-area">
        <ul style={{ listStyle: "none" }}>
          {props.otherMessages.map((m) => (
            <li key={_.uniqueId()}>{m}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={sendButton}>
        <TextField
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          id="standard-full-width"
          label="Message"
          style={{ margin: 8 }}
          placeholder="Write your message"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          className="sendButton"
          variant="contained"
          color="primary"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
