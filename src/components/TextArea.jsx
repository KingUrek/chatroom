import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./TextArea.css";

export default function TextArea(props) {
  return (
    <div>
      <TextField
        label="User"
        style={{ margin: 8 }}
        placeholder="What is your name?"
        margin="normal"
      />
      <div className="message-area"></div>
      <TextField
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

      <Button variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}
