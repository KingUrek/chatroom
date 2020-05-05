import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RoomSelect(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Room</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(e) => props.setRoom(e.target.value)}
      >
        <MenuItem value={10}>Main Room</MenuItem>
        <MenuItem value={20}>Trybe Room</MenuItem>
        <MenuItem value={30}>Slack Room</MenuItem>
      </Select>
    </FormControl>
  );
}
