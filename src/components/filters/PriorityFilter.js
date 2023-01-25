import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const PriorityFilter = observer((props) => {
    const {global} = useContext(Context)
    const [activePriorities, setActivePriorities] = useState([])

    useEffect(() => {
        props.toChild(activePriorities)
    }, [activePriorities])

    const checkContains = (val) => {
        return activePriorities.some(item => val === item)
    }

    const addActivePriorities = (priority) => {
        setActivePriorities([
            ...activePriorities,
            priority
        ])
    }

    const removeActivePriorities = (priority) => {
        let newState = activePriorities.filter(item => item !== priority)
        setActivePriorities(newState)
    }

    const updateState = (e) => {
        if(checkContains(e.target.textContent) === false){
            addActivePriorities(e.target.textContent)
        }
        if(checkContains(e.target.textContent) === true){
            removeActivePriorities(e.target.textContent)
        }
    }

    const handleClick = (e) => {
        updateState(e)
        if(e.target.className === 'list-group-item active'){
            e.target.className = 'list-group-item'
            e.target.style.backgroundColor = "white"
            e.target.style.borderColor = "#dfdfdf"
        }else{
            e.target.className = 'list-group-item active'
            e.target.style.backgroundColor = "blueviolet"
            e.target.style.borderColor = "blueviolet"
        }
    }
    return (
        <div className="mt-4">
            <h4>Приоритет задачи</h4>
            <ListGroup horizontal className="mt-4">
                {global.priorities.map(priority =>
                    <ListGroup.Item
                        style={{cursor: "pointer"}}
                        key={priority.id}
                        onClick={e => handleClick(e)}
                    >
                        {priority.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default PriorityFilter;