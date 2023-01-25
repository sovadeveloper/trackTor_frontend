import React, {useContext, useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const TagFilter = observer((props) => {
    const {global} = useContext(Context)
    const [activeTags, setActiveTags] = useState([])

    useEffect(() => {
        props.toChild(activeTags)
    }, [activeTags])

    const checkContains = (val) => {
        return activeTags.some(item => val === item)
    }

    const addActiveTags= (tag) => {
        setActiveTags([
            ...activeTags,
            tag
        ])
    }

    const removeActiveTags = (status) => {
        let newState = activeTags.filter(item => item !== status)
        setActiveTags(newState)
    }

    const updateState = (e) => {
        if(checkContains(e.target.textContent) === false){
            addActiveTags(e.target.textContent)
        }
        if(checkContains(e.target.textContent) === true){
            removeActiveTags(e.target.textContent)
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
        <div>
            <div className="mt-4">
                <h4>Тэг задачи</h4>
                <ListGroup horizontal className="mt-4">
                    {global.tags.map(tag =>
                        <ListGroup.Item
                            style={{cursor: "pointer"}}
                            key={tag.id}
                            onClick={e => handleClick(e)}
                        >
                            {tag.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    );
});

export default TagFilter;