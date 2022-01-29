import React from 'react';
import '../style/Contact.css';
import email from '../Data/email.png';
import phone from '../Data/phone.png';
import location from '../Data/location.png';
import shape from '../Data/shape.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

 
export default function Contact() {
  return (
    <body>
      <div class="container5">
      <span class="big-circle"></span>
      <img src={shape} class="square" alt="" />
      <Box class="form">
        <div class="contact-info">
          <h3 class="title">Let's talk !</h3>
          <p class="text">
            Got a question ? We're here !
            You're not going to hit a ridiculously long phone menu when you call us. 
            Your email isn't going to the inbox jungle, never to be seen or heard from again. 
            At Christoumi, we strive to provide the best human experience possible !
          </p>

          <div class="info">
            <div class="information">
              <img src={location} class="icon" alt="" />
              <p>5 Chemin de Bellevue, Annecy-le-Vieux, 74940 ANNECY</p>
            </div>
            <div class="information">
              <img src={email} class="icon" alt="" />
              <p>contact@christoumi.com</p>
            </div>
            <div class="information">
              <img src={phone} class="icon" alt="" />
              <p>06 07 08 09 10</p>
            </div>
          </div>

  
          </div>
        </Box>

        <Box class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <Box class="input-container">
              <TextField class="input" label="Your name" variant="standard" />
            </Box>

            <Box class="input-container">
              <TextField type = "email" class="input" label="Your phone number" variant="standard" />
            </Box>

            <Box class="input-container">
              <TextField type = "tel" class="input" label="Your email address" variant="standard" />
            </Box>

            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </Box>
      </div>
      </body>
    
  );
}