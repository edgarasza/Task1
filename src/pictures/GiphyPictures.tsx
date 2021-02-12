import React, { useState } from "react";
import { DialogComp } from "../dialog/Dialog";
import { giphySearchByID } from "../api/apiCalls";
import { Giphy } from "../interfaces/giphyInterface";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const Giphys = (props: Giphy): JSX.Element => {
  const [pic, setPic] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id: string) => {
    setOpen(true);
    giphySearchByID(id).then((data) =>
      setPic(data.data.images.downsized_medium.url)
    );
  };
  const handleClose = () => {
    setOpen(false);
    setPic("");
  };

  return (
    <>
      <div className={"container"}>
        <>
          {props.giphy.length > 0 &&
            props.giphy.map((gif) => (
              <Card key={gif.id} className={"card"}>
                <CardActionArea className={"card"}>
                  <CardMedia
                    component={"img"}
                    className={"image"}
                    onClick={() => handleClickOpen(gif.id)}
                    image={gif.images.fixed_width.url}
                    title="gif"
                  />
                  <CardContent className={"card-content"}>
                    <Typography gutterBottom variant="h5">
                      {gif.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </>
      </div>
      <DialogComp open={open} handleClose={handleClose} pic={pic} />
    </>
  );
};
