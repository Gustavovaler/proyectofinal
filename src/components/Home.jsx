import React, { useEffect, useState } from "react";
import { fetchMovies } from "./../actions/index";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  Button,
  Grid,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { purple } from "@material-ui/core/colors";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  header: {
    height: "80px",
    color: "#007899",
  },
  overview: {
    height: "80px",
    marginBottom: "25px",
  },
  actionpanel: {},
};
const primary = purple[50];

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.results);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies(counter));
  }, [counter]);

  const addToFav = (id) => {
      console.log(id)
      
  }

  const renderMovies = () => {
    if (Array.isArray(data)) {
      return data.map((m, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardHeader title={m.title} style={styles.header}></CardHeader>
            <CardMedia
              image={"https://image.tmdb.org/t/p/w500/" + m.backdrop_path}
              title="Contemplative Reptile"
              style={styles.media}
            ></CardMedia>

            <CardContent>
              <Typography variant="body2" style={styles.overview}>
                {m.overview.substring(0, 200)}
              </Typography>
            </CardContent>
            <CardActions style={styles.actionpanel}>
              <IconButton onClick={() => addToFav(m.id)}  >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button
                variant="contained"
                color="secondary"
                href={"/detail/"+m.id}
              
              >
                Ver mas
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ));
    }
  };
  return (
    <Container>
        <br></br>

        <Button
        variant="contained"
        color="primary"
        onClick={() => (counter > 1 ? setCounter(counter - 1) : null)} className="m-3"
        >
        Previous
        </Button>
        <Button
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter + 1)} className="mr-3"
        >
        Next
        </Button>
      <Grid container spacing={3}>
        {renderMovies()}
      </Grid>

      <br></br>
      <br></br>

        <Button
        variant="contained"
        color="primary"
        onClick={() => (counter > 1 ? setCounter(counter - 1) : null)} className="m-3"
        >
        Previous
        </Button>
        <Button
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter + 1)} className="mr-3"
        >
        Next
        </Button>
      
    </Container>
  );
}

export default Home;
