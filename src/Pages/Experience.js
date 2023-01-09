import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3c497a">
                <VerticalTimelineElement className="vertical-timeline-element-education" date="2018-2019" iconStyle={{ background: "#3c497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">S.V.M Inter Collage ,Stg,US nagar,Uttarakand </h3>
                    <p className="vertical-timeline-element-subtitle">Intermediate ( 10+2 )</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element-education" date="2020-2024" iconStyle={{ background: "#3c497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Lovely professional University,Jalandhar,Punjab </h3>
                    <p className="vertical-timeline-element-subtitle">B.tech (CSE)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        HacktoberFest
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Digital Ocean
                    </h4>
                    <p>Participate as a Repository maintainer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Experience;