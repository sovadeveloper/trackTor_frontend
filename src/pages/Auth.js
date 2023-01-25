import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите имя пользователя"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите пароль"
                        />
                        <Row className="d-flex justify-content-between">
                            {isLogin ?
                                <div className="mt-3">
                                    Нет аккаунта? <NavLink to="/registration">Зарегестрируйтесь!</NavLink>
                                </div>
                                :
                                <div className="mt-3">
                                    Есть аккаунт? <NavLink to="/login">Войдите!</NavLink>
                                </div>
                            }
                            <Button
                                className="mt-3"
                                variant="outline-success"
                            >
                                {isLogin ? 'Войти' : 'Зарегистрироваться'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;