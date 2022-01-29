import React from 'react';
import '../style/Pricing.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import imgWatchAppli from '../Data/Appli_Health.png';
import imgWatchB from '../Data/Watch_E_HealthB.PNG';
import imgSoftW from '../Data/ImgSoftware.jpg';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Pricing() {
  return (
    <body>
    <div class= "containObject">
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <div>
            <Img alt="App" src={imgWatchAppli} sx={{ width: 160, height: 100, paddingTop: 5}}/>
          </div>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
                <h3>Standard Package</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>
              <h3>The SmartWatch Health OR The SmartApp Health</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              With the STANDARD package, you can get the watch alone or the application alone for the same price.
              
              The update is done automatically. 
              With this formula, you benefit from an after-sales service available 24h/7day per week online. 
              The telephone service is available 7 days a week from 8:30 am to 6:30 pm.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $300 • per/mo
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    
      <Grid container spacing={2}>
        <Grid item>
          <div>
            <Img alt="App and Watch" src={imgWatchB} sx={{ width: 160, height: 100, paddingTop: 5}}/>
          </div>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <h3>Premium Package</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <h3>The SmartWatch Health + The SmartApp Health </h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                With the Premium package, you  get the watch alone or the application alone for the same price.
                The update is done automatically.
                <br/>
                With this formula, you benefit from an after-sales service available 24h/7day per week online. 
                The telephone service is available 7 days a week from 8:30 am to 6:30 pm.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $600 • per/mo
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <div>
            <Img alt="App" src={imgSoftW} sx={{ width: 160, height: 100, paddingTop: 5}}/>
          </div>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
               <h3>Profesium Package</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <h3>The SmartSoftware Health </h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This special formula is the professional PREMIUM version of our application. 
                It is a software package that can be perfectly integrated into all types 
                of systems in medical institutions. 
                The platform is intuitive, fluid and very efficient for the management of sensitive data such as health data. 
                <br/>Our cybersecurity team is mobilised every day to ensure data reliability and consistency. Our other teams are also 
                involved in improving the various functionalities every day, sometimes depending on the institution and its requests. 
                This software allows data to be sent directly to the application but also receives data 
                from the watch and/or the application.                  
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $1900 • per/mo
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Paper>
    </div>
    </body>
  );
}
