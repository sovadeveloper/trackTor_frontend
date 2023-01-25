import React from 'react';
import {Card, Row} from "react-bootstrap";

const TaskCard = (props) => {
    return (
        <Row className="d-flex justify-content-between">
            {props.tasks.map(task =>
                <Card key={task.id} style={{width: 300, height: 300, borderColor: "blueviolet"}}
                      className="mt-4 mb-4">
                    <Card.Body>
                        <Card.Title>{task.name}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                        <hr/>
                        <Card.Text>
                            <span style={{color: "blueviolet", fontWeight: "bold"}}>Статус:  </span>
                            Ожидание
                        </Card.Text>
                        <Card.Text>
                            <span style={{color: "blueviolet", fontWeight: "bold"}}>Тэг:  </span>
                            Аналитика
                        </Card.Text>
                        <Card.Text>
                            <span style={{color: "blueviolet", fontWeight: "bold"}}>Приоритет:  </span>
                            Высокий
                        </Card.Text>
                        <Card.Text>
                            <span style={{color: "blueviolet", fontWeight: "bold"}}>Исполнитель:  </span>
                            Кузьмин Максим
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
};

export default TaskCard;