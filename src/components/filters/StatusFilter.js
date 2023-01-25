import React, {useContext, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import {Context} from "../../index";

const StatusFilter = (props) => {
    const {global} = useContext(Context)
    const [activeStatuses, setActiveStatuses] = useState([])
    const checkContains = (val) => {
        return activeStatuses.some(item => val === item)
    }

    const addActiveStatuses = (status) => {
        setActiveStatuses([
            ...activeStatuses,
            status
        ])
    }

    const removeActiveStatuses = (status) => {
        let newState = activeStatuses.filter(item => item !== status)
        setActiveStatuses(newState)
    }

    const updateState = (e) => {
        if(checkContains(e.target.textContent) === false){
            addActiveStatuses(e.target.textContent)
        }
        if(checkContains(e.target.textContent) === true){
            removeActiveStatuses(e.target.textContent)
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
            <h4>Статус задачи</h4>
            <ListGroup horizontal className="mt-4">
                {global.statuses.map(status =>
                    <ListGroup.Item
                        style={{cursor: "pointer"}}
                        key={status.id}
                        onClick={e => handleClick(e)}
                    >
                        {status.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
};

export default StatusFilter;