import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import Footer from './components/Footer'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  boxContent:{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgprin: {
    height: '600px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '4rem',
  },
  blocksContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',

  },
  media: {
    height: 240
  }
}));

function App() {
  
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar/>
      <Box className={classes.boxContent}>
        <img className={classes.imgprin} alt="software" src={require('./images/software.jpg')}></img>
      </Box>
      <Container maxWidth='lg' className={classes.blocksContainer}>
        <Typography variant='h4' className={classes.blogTitle}>Lenguajes y herramientas</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://programacion.net/files/article/article_02174_.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                HTML5
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                HTML5 means HyperText Markup Language, version 5, is a markup language for web apps development.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.codigofuente.org/wp-content/uploads/2018/10/js.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                JavaScript is a scripting language used to create and control dynamic websites content.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://disenowebakus.net/imagenes/articulos/aprender-css-hojas-de-estilo-en-cascada.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                CSS stands for Cascading Style Sheets. Describes how HTML elements will be displayed.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
