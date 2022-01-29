import React from 'react';
import '../style/Home.css';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {

  return (
  <body>
  <Container class= "containerHome">
    <div class ="top">
    <Typography class = "text1" variant ="p">
      We are glad to see that your path crosses ours here. 
      Indeed, every encounter is a matter of fate. Do you know Christoumi? 
      <br/>We are a future-oriented start-up. 
      <br></br>
      </Typography> 
    </div>
    <div class = "left">
    </div>
    <div class ="right">
    <h2 class='homeH2'>Concept and Values:</h2>
    <Typography class = "text" variant ="p">
      <br></br>
      Our aim is to help the healthcare industry move into the future. 
      We provide connected watches that monitor the vital signals of both sick and non-sick patients. 
      <br></br>
      Our main objective is to monitor these signals by analysing the data in order to prevent anything abnormal. 
      We also design software for healthcare institutions that provides better data management and is adaptable to the organisation. 
      Thus, ensuring a better follow-up of patients. However, we have seen with the health crisis the need to be forward looking. 
      This is why we have also adapted our software for all platforms, including making it accessible from smartphones.
      <br></br>
    </Typography>  
  </div>
  </Container>
  </body>

  );
}

export default Home;