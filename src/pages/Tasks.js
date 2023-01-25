import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Card, Col, Container, Row} from "react-bootstrap";
import PriorityFilter from "../components/filters/PriorityFilter";
import StatusFilter from "../components/filters/StatusFilter";
import TagFilter from "../components/filters/TagFilter";
import {observer} from "mobx-react-lite";

const Tasks = observer(() => {
    const {global} = useContext(Context)
    const [filters, setFilters] = useState({})
    console.log(filters)
    const updateStateTags = (newState) => {
        const tags = {"tags": newState}
        setFilters({
            ...filters,
            tags
        })
    }
    const log = () => {
        console.log(filters)
    }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <PriorityFilter/>
                </Col>
                <Col md={4}>
                    <StatusFilter/>
                </Col>
                <Col md={4}>
                    <TagFilter toChild={updateStateTags}/>
                </Col>
            </Row>
            <Row className="d-flex justify-content-between">
                {global.tasks.map(task =>
                    <Card key={task.id} style={{width: 300, height: 300, borderColor: "blueviolet"}} className="mt-5" onClick={log}>
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
        </Container>
    );
});

export default Tasks;