import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../Styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Kuldeep Singh</h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating something new </p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>ReactJs,Redux,HTML,Css,JavaScript Dom,npm,Figma,Jquery,Bootstrap</span>

                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NOdeJs,ExpressJs,MongoDB,
                            Heruko,Github
                        </span>

                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            Javascript,Java ,C++,C,GoLang
                        </span>

                    </li>

                </ol>
            </div>
        </div>

    )
}
export default Home;