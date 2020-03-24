import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  },
  cardRoot: {
    maxWidth: 300
  }
}));
interface NearByPlacesProps {
  title: string;
  image: string;
  description: string;
}
const NearByPlaces: React.FC<NearByPlacesProps> = ({
  title,
  description,
  image
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../assets/images/${image}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default NearByPlaces;
