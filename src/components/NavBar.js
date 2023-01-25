import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { observer } from "mobx-react-lite"
import logo from "./logo.png"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "lightgray", textDecoration: "none"}} to="/">
                    <div className="d-flex justify-content-between">
                        <Image
                            style={{width: 30, height: 30}}
                            src={logo}
                            className="m-auto"
                        />
                        <h4 className="m-auto">TrackTor</h4>
                    </div>
                </NavLink>
                {user.isAuth ?
                    <Nav style={{color: "white"}}>
                        <div style={{width: 400}} className="d-flex justify-content-between">
                            <NavLink
                                style={{textDecoration: "none", color: "lightgray"}}
                                className="m-auto" to="/"
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "lightgray"}}
                                className="m-auto" to="/projects"
                            >
                                Проекты
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "lightgray"}}
                                className="m-auto" to="/teams">
                                Команды
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "lightgray"}}
                                className="m-auto" to="/tasks"
                            >
                                Задачи
                            </NavLink>
                            <NavLink
                                style={{textDecoration: "none", color: "lightgray"}}
                                className="m-auto" to="/profile/:id"
                            >
                                Профиль
                            </NavLink>
                        </div>
                        <Button variant={"outline-light"} > Выйти </Button>
                    </Nav>
                    :
                    <Nav style={{color: "white"}}>
                        <div className="d-flex justify-content-between">
                            <div style={{width: 100}} className="d-flex justify-content-between">
                                <NavLink
                                    style={{textDecoration: "none", color: "lightgray"}}
                                    className="m-auto" to="/"
                                >
                                    Главная
                                </NavLink>
                            </div>
                        </div>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}> Войти </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;