import React from 'react';
import {Container} from "react-bootstrap";

const Profile = (props) => {
    return (
        <Container>
            <h1 className={"mt-4"}>Кузьмин Максим</h1>
            <h2 style={{color: "darkgray"}}>Java Developer</h2>
        </Container>
    );
};

export default Profile;