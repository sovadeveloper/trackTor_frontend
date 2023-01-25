import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth;
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth;
    }

    get user() {
        return this._user;
    }

    setUser(user) {
        this._user = user;
    }
}