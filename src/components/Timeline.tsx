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
        date="Stratec Brasil - Julho de 2018 - Setembro de 2020"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Full-Stack Júnior</h1>
          <p>
          Techs usadas: ReactJS, C# dotnet core, Sql Server, Git e GitKraken
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Meta3 Group - Setembro de 2020 - Janeiro de 2021"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Front-end</h1>
          <p>
            Techs usadas: ReactJS, Typescript, Vercel, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Cuide-se - Abril de 2020 - Fevereiro de 2021 (Meio período)"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title"> Co-Fundador</h1>
          <a href="https://www.youtube.com/watch?v=EFPK7I_4omc" target="_blank" rel="noopener noreferrer" style={{color: '#48BB78'  }}>Clique aqui para assistir o pitch que apresentei 😀</a>
          <p>
            Techs usadas: ReactJS, Typescript, Vercel, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="GreenLegis - Janeiro de 2021 - Setembro de 2021"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Full-Stack Pleno</h1>
          <p>
          Techs usadas: ReactJS, Typescript, C# dotnet core, MySql, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Wazana.dev - Setembro de 2021 - Janeiro de 2022 (Meio período)"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Full-Stack Pleno</h1>
          <p>
          Techs usadas: ReactJS, Typescript, Chakra UI, Firebase, Git
          </p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Actio Brasil - Outubro de 2021 - Maio de 2022"
        iconStyle={{ background: '#48BB78' }}>
        <div style={{color: '#171923'}}>
          <h1 className="vertical-timeline-element-title">Desenvolvedor Full-Stack Pleno</h1>
          <p>
          Techs usadas: ReactJS, C# dotnet core, Sql Server, Git
          </p>
        </div>
      </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  )
}
