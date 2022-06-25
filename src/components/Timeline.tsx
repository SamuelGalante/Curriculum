import { Flex, Center, VStack, Stack, Box, Button } from "@chakra-ui/react";
import Typed from "react-typed"
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiCsharp, SiNodedotjs, SiSpotify } from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimeLine() {

  return (
    <div style={{background: '#1A202C'}}>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Stratec Brasil - July 2018 - September 2020"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Developer Full-Stack Junior</h1>
          <p>
          Techs: ReactJS, C# dotnet core, Sql Server, Git and GitKraken
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Meta3 Group - September 2020 - January 2021"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Developer Front-end</h1>
          <p>
            Techs: ReactJS, Typescript, Vercel, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Cuide-se - April 2020 - February 2021 (Part-time)"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title"> Co-Founder</h1>
          <a href="https://www.youtube.com/watch?v=EFPK7I_4omc" target="_blank" rel="noopener noreferrer" style={{color: '#48BB78'  }}>Click here to watch the pitch I presented (in Portuguese) 😀</a>
          <p>
            Techs: ReactJS, Typescript, Vercel, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="GreenLegis - January 2021 - September 2021"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Developer Full-Stack Mid-Level</h1>
          <p>
          Techs: ReactJS, Typescript, C# dotnet core, MySql, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Wazana.dev - September 2021 - January 2022 (Part-time)"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Developer Full-Stack Mid-Level</h1>
          <p>
          Techs: ReactJS, Typescript, Chakra UI, Firebase, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Actio Brasil - October 2021 - May 2022"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Full-Stack Mid-Level</h1>
          <p>
          Techs: ReactJS, C# dotnet core, Sql Server, Git
          </p>
        </div>
      </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  )
}
