import React from 'react';
import {Container, Row} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row>
                <div className="d-flex justify-content-center">
                    <h1
                        style={{fontWeight: "bold", fontSize: 60}}
                        className="mt-5"
                    >TrackTor
                    </h1>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <p
                        className="text-center"
                        style={{fontSize: 30}}
                    >
                        <b>TrackTor</b> - таск трекер, с помощью которого можно удобно вести свои проекты, управлять командами
                        и отслеживать задачи. Отличительная черта данного трекера заключается в том, что можно
                        <b> автоматически распределять нагрузку</b> между участниками проекта
                    </p>
                </div>
            </Row>
        </Container>
    );
};

export default Home;