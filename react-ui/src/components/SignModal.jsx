import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/SignModal.css";
import { useHistory } from "react-router-dom";
import RoomSelect from "./RoomSelect";

export default function SignModal(props) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      setError(true);
      setHelperText("Choose an username");
    } else {
      props.setUser({ user: username, room });
      history.push("/rooms/" + room);
    }
  }

  return (
    <div className="modal-wrap">
      <form onSubmit={handleSubmit}>
        <TextField
          error={error}
          helperText={helperText}
          label="User"
          style={{ margin: 8 }}
          placeholder="What is your name?"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <RoomSelect setRoom={setRoom} />
        <br />

        <Button
          className="sendButton"
          variant="contained"
          color="primary"
          type="submit"
        >
          LOG IN
        </Button>
      </form>
    </div>
  );
}
