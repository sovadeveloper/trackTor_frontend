import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import {Context} from "../index";
import ProjectCard from "../components/cards/ProjectCard";

const Projects = observer(() => {
    const {global} = useContext(Context)
    return (
        <Container>
            <h1 className={"mt-4"}>Проекты</h1>
            <ProjectCard projects={global.projects}/>
        </Container>
    );
});

export default Projects;