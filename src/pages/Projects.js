import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {Context} from "../index";

const Projects = observer(() => {
    const {global} = useContext(Context)
    return (
        <Container>

        </Container>
    );
});

export default Projects;