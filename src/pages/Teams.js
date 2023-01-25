import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import TeamCard from "../components/cards/TeamCard";

const Teams = observer(() => {
    const {global} = useContext(Context)
    return (
        <Container>
            <h1 className={"mt-4"}>Команды</h1>
            <TeamCard teams={global.teams}/>
        </Container>
    );
});

export default Teams;