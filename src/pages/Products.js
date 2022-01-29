import * as React from 'react';
import '../style/Products.css'; 
import { Tabs, Tab, Panel } from '@bumaga/tabs' ;
import { styled } from '@mui/material/styles';
import imgWatchAppli from '../Data/Appli_Health.png';
import imgWatchB from '../Data/Watch_E_HealthB.PNG';
import imgSoftW from '../Data/ImgSoftware.jpg';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

function Pricing() {

return (
        
        <body>
        <div class= "containObject">
        <Tabs>
            <div class= "tab">
            <Tab><button>The SmartWatch Health</button></Tab>
            <Tab><button>The SmartApp Health</button></Tab>
            <Tab><button>The SmartSoftware Health</button></Tab>
            </div>
            
            <Panel>
                <h3> The SmartWatch Health </h3>
                    <p class = "textP">
                    This watch has a heart rate monitor on the back. Green LEDs emit a continuous light towards your wrist 
                    <br/>and the watch's sensors measure the amount of light reflected from your skin; 
                    <br/>the more light reflected, the faster your heart beats. The watch has algorithms that analyse 
                    <br/>the data collected to accurately indicate your heart rate, which is usually measured continuously, 
                    <br/>and alert you when it detects an abnormality in your heart rate.
                    </p>
                    <Img alt="App" src={imgWatchB} sx={{ width: 400, height: 280, paddingTop: 5, borderRadius:30}}/>
            </Panel>
            <Panel>
            <h3> The SmartApp Health</h3>
                <p class = "textP">
                    This application has various features. It allows direct access to one's medical file and appointments. 
                    <br/>It allows the user to be connected directly to the appropriate medical personnel according to his or her state of health. 
                    <br/>When the connection to the watch is active, the user's electrocardiogram and walking speed can be viewed using the integrated step counter. 
                    <br/>Thus, a regular study of the user's condition can detect or prevent an abnormal condition. In the case of a condition considered serious, 
                    <br/>an alert is sent to the appropriate health personnel in a systematic way. 
                </p>
                <Img alt="App" src={imgWatchAppli} sx={{ width: 400, height: 280, paddingTop: 5, borderRadius:30}}/>
            </Panel>
            <Panel>
            <h3> The SmartSoftware Health</h3>
                <p class = "textP">
                    The SmartSoftware Health version of our application. 
                    <br/>It can be perfectly integrated into all types of systems in medical institutions. 
                    <br/>The platform is intuitive, fluid and very efficient for the management of sensitive data such as health data. 
                    <br/>Our cybersecurity team is mobilised every day to ensure data reliability and consistency. Our other teams are also 
                    <br/>involved in improving the various functionalities every day, sometimes depending on the institution and its requests. 
                    <br/>This software allows data to be sent directly to the application but also receives data 
                    <br/>from the watch and/or the application.
                </p>
                <Img alt="App" src={imgSoftW} sx={{ width: 400, height: 280, paddingTop: 5, borderRadius:30}}/>
            </Panel>
        </Tabs>
        </div>
        </body>
);}
export default Pricing;