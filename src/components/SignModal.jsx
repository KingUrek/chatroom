import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/SignModal.css";
import { useHistory } from "react-router-dom";

export default function SignModal(props) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      setError(true);
      setHelperText("Choose an username");
    } else {
      props.setUser(username);
      history.push("/rooms");
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
