import React from 'react';
import {Card, Row} from "react-bootstrap";

const ProjectCard = (props) => {
    return (
        <Row className="d-flex justify-content-between">
            {props.projects.map(project =>
                <Card key={project.id} style={{width: 300, height: 200, borderColor: "blueviolet"}}
                      className="mt-4 mb-4">
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <hr/>
                        <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
};

export default ProjectCard;