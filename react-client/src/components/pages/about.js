import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="bigText2">
                    <p>Goal of PolyTalk</p> 
                </div>

                <div className="billCol">
                    <p>Our goal as a team is to get more people involved in politics. 
                        We want everyone to know who their representatives are in the area,
                        what these positions mean, and how these representatives are impacting
                        their area. 
                    </p>
                    <br />
                    <p>
                        <b>Where this information comes from: </b>
                        We want to give users accurate information they can trust, which is why
                        we provide all information about bills directly from congress.
                    </p>
                    <br />
                </div>

                <div className="bigText2">
                    <p>About the Team</p> 
                </div>

                <div className="billCol">
                    <p> 
                       <b>Claudia Bandali and Allina Khan</b> 
                    </p>
                       
                    <p>
                        Claudia and Allina worked on getting your representatives and bills to you 
                        and the design so that you can navigate seemlessly. If you come across any 
                        problems, feel free to shoot us a message in our contact page! <br />
                    </p>
                    <p>
                        Claudia is a software engineer at Goldman Sachs, and Allina is a software
                        engineer intern at Visa Inc. Both are passionate about social justice and politics.
                    </p>
                    <br />
                    <p>
                        <b><i>Previous Contributors: </i></b> <br />
                        <b>Estefenia Barron and Nouraiz Imran</b> 
                    </p>
                    <p>
                        Nouraiz Imran goes to college of Staten Island and worked on getting your
                        representatives to you.
                        <br />
                    </p>
                    <p>
                        Big thanks to Estefenia Barron for her idea that got this app up and running!
                        She is a computer science and journalism student at Brooklyn college. 
                        She's made great contributions to her community! 
                    </p>
                    <br />               
                </div>
            </div>
        </div>
        )
    }
}

export default About;