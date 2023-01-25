import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Task from "../pages/Task";
import Teams from "../pages/Teams";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Auth from "../pages/Auth";
import {Context} from "../index";
import Profile from "../pages/Profile";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    if (user.isAuth) {
        return (
            <Routes>
                <Route path={"/"} element={<Home/>} exact/>
                <Route path={"/tasks"} element={<Tasks/>} exact/>
                <Route path={"/tasks/:id"} element={<Task/>} exact/>
                <Route path={"/teams"} element={<Teams/>} exact/>
                <Route path={"/teams/:id"} element={<Team/>} exact/>
                <Route path={"/projects"} element={<Projects/>} exact/>
                <Route path={"/projects/:id"} element={<Project/>} exact/>
                <Route path={"/profile/:id"} element={<Profile/>} exact/>
                <Route path={"*"} element={<Home/>} exact/>
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path={"/"} element={<Home/>} exact/>
            <Route path={"/login"} element={<Auth/>} exact/>
            <Route path={"/registration"} element={<Auth exact/>}/>
            <Route path={"*"} element={<Home exact/>}/>
        </Routes>
    );
};

export default AppRouter;