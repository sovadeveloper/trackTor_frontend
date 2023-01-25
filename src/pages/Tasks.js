import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Col, Container, Row} from "react-bootstrap";
import PriorityFilter from "../components/filters/PriorityFilter";
import StatusFilter from "../components/filters/StatusFilter";
import TagFilter from "../components/filters/TagFilter";
import {observer} from "mobx-react-lite";
import TaskCard from "../components/cards/TaskCard";

const Tasks = observer(() => {
    const {global} = useContext(Context)
    const [filters, setFilters] = useState({
        "priorities": [],
        "statuses": [],
        "tags": []
    })
    console.log(filters)
    const updateStatePriorities = (newState) => {
        const priorities = [newState]
        setFilters({
            ...filters,
            priorities
        })
    }
    const updateStateStatuses = (newState) => {
        const statuses = [newState]
        setFilters({
            ...filters,
            statuses
        })
    }
    const updateStateTags = (newState) => {
        const tags = [newState]
        setFilters({
            ...filters,
            tags
        })
    }
    return (
        <Container>
            <h1 className={"mt-4"}>Задачи</h1>
            <Row>
                <Col md={4}>
                    <PriorityFilter toChild={updateStatePriorities}/>
                </Col>
                <Col md={4}>
                    <StatusFilter toChild={updateStateStatuses}/>
                </Col>
                <Col md={4}>
                    <TagFilter toChild={updateStateTags}/>
                </Col>
            </Row>
            <TaskCard tasks={global.tasks}/>
        </Container>
    );
});

export default Tasks;