import React from 'react';
import {Card, Row} from "react-bootstrap";

const TeamCard = (props) => {
    return (
        <Row className="d-flex justify-content-between">
            {props.teams.map(team =>
                <Card key={team.id} style={{width: 300, height: 200, borderColor: "blueviolet"}}
                      className="mt-4 mb-4">
                    <Card.Body>
                        <Card.Title>{team.name}</Card.Title>
                        <Card.Text>Специализация: {team.specialization}</Card.Text>
                        <hr/>
                        <Card.Text>Проект: *название*</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
};

export default TeamCard;