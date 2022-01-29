import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import yawoumihani from '../Data/yawoumihani.png'
import christelle from '../Data/christelle.png'
import Grid from '@mui/material/Grid';
import '../style/Team.css';


export default function Team() {
  return (
  <body>
    <div class= "containObject">
    <Box>
      <Box class = "textbox">
        <Typography id = "ourteam" variant="h1" component="div" gutterBottom>
          Our team
        </Typography>
        <Typography id = "meetteam" variant="h4" component="div" gutterBottom>
          Meet our superstar tech team.
        </Typography>
      </Box>
      
      <Box id = "descriptionbox" class = "textbox">
        <Typography id = "description" variant = "body2">
          The two of us met in college in 2020 and have been going strong ever since.
          What makes our team great ? We share common values and interests, and have created a 
          strong dynamic, which we bring in every project we tackle. We started Christoumi in 2021, 
          as a part of our Fullstack Development course. Since then, we have tried to give
          it every single bit of passion it deserves.
        </Typography>
      </Box>

      <br></br>
      <Grid container  justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12} ys={6} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="500"
              img src = {yawoumihani} alt = "Yawoumihani"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yawoumihani HASSANI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                When she's not doing uni work, she's multitasking her way
                through life. Her determination comes from constant goings
                and comings from Chambéry to Annecy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" href = "https://fr.linkedin.com/in/yawoumihani-hassani-3918b8160">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} ys={6} md={4} rowSpacing={10}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="500"
              img src = {christelle} alt = "Christelle"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Christelle RANDRIAMAHEFA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An avid reader, she mixes reading classic literature and
                studying computer science. At the same time ? You'll have
                to ask her. Just a heads up : pronouncing her last name might prove to be challenging.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" href = "https://fr.linkedin.com/in/christelle-randriamahefa">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br></br>
    </Box>
    </div>
    </body>
  );
}