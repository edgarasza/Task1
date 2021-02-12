import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./dialog.css";

interface compProps {
  open: boolean;
  pic: string;
  handleClose: () => void;
}

export const DialogComp = (props: compProps): JSX.Element => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.pic ? (
          <DialogContent>
            <img src={props.pic} />
          </DialogContent>
        ) : (
          <CircularProgress size={200} />
        )}
        <DialogActions>
          <Button
            onClick={props.handleClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
