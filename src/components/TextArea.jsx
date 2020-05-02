import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function TextArea(props) {
  return (
    <div>
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
