import {makeAutoObservable} from "mobx"

export default class TagStore {
    constructor(id, name) {
        this._id = id
        this._name = name
        makeAutoObservable(this)
    }


    get id() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}