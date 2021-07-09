import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./card.css";

export default function MediaCard(props) {
  return (
    <div className="card-container">
      {props.image && (
        <CardMedia className="media" image={props.image} title={props.title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        {props.time && (
          <Typography gutterBottom variant="subtitle1" component="h5">
            {props.time}
          </Typography>
        )}
        <Typography className="card-content" variant="body2" component="p">
          {props.content}
        </Typography>
        {props.stacts && (
          <Typography gutterBottom variant="body2" component="p">
            Technical Stacks: {props.stacts}
          </Typography>
        )}
      </CardContent>
    </div>
  );
}

// working card: title   time  content   stacks
// project card: image  title  content
// edu card: image  title  time  content
