import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allina from './allina.jpg';
import claudia from './claudia.jpg';

class About extends Component {
    render() {
        return(
            <div className="container avant-garde grey-back">
            <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline ma3">
                    <p>- Our Mission -</p> 
                </div>

                <div className="billCol">
                    <p>Our goal as a team is to get more people involved in politics. 
                        We want everyone to know who their representatives are in the area,
                        what these positions mean, and how these representatives are impacting
                        their area. 
                    </p>
                    <br />
                    <p>
                        <b className="grey f2 lh-copy">Where this information comes from: </b> <br />
                        We want to give users accurate information they can trust, which is why
                        we provide all information about bills directly from congress.
                    </p>
                    <br />
                </div>
            </div>  
            <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline lh">
                    <p>Team</p> 
                </div> 
                <p className="billCol">
                    Claudia and Allina worked on getting your representatives and bills to you 
                    and the design so that you can navigate seemlessly. If you come across any 
                    problems, feel free to shoot us a message in our contact page! <br />
                </p>
                <div className="flex flex-wrap justify-around tc pa3 pa5-ns">
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={claudia} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Claudia Bandali</p>
                            Incomming software engineer at Goldman Sachs</p>
                            <a className="" target="_blank" href="https://www.linkedin.com/in/claudia-bandali/">Connect on Linkedin</a>
                        </div>
                    </div>  
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">
                        <img className="center db mt3 mw-30 br-100 ba dib" src={allina} alt="" height="130" width="130" /> <hr />
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Allina Khan</p>
                            Incoming software engineer intern at Visa Inc</p>
                            <a className="" target="_blank" href="https://www.linkedin.com/in/allina-k/">Connect on Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="row tc shadow-2 dim ma5 pa5">
                <div className="f-headline lh">
                    <p>Previous Contributors</p> 
                </div> 
                <div className="flex flex-wrap justify-around tc pa3 pa5-ns">
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">                        
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Estefenia Barron</p><br />
                            Big thanks for her idea that got this app up and running!
                            She is a computer science and journalism student at Brooklyn college. 
                            She's made great contributions to her community!</p>
                        </div>
                    </div> 
                    <div className="black db ma2 mw7 w-30 pa2 br2 ba b--black-10">                        
                        <div className="col">
                            <p className="db center mb2 mw-100">
                            <p className="f2 lh-copy">Nouraiz Imran</p><br />
                            Goes to college of Staten Island and worked on getting your representatives to you.</p>
                        </div>
                    </div> 
                </div>
            </div>           
        </div>
        )
    }
}

export default About;