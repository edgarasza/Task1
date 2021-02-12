import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import "./search.css";

interface compProps {
  error: boolean;
  searchFor: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export const Search = (props: compProps): JSX.Element => {
  return (
    <div className={"search-container"}>
      <FormControl error={!!props.error}>
        <TextField
          id="standard-name"
          label="Search"
          name="search"
          value={props.searchFor}
          onChange={props.handleChange}
          helperText={props.error}
          error={!!props.error}
          margin="normal"
          variant="outlined"
          size="small"
          className={"search-field"}
        />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={props.handleSubmit}
        className={"search-button"}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
