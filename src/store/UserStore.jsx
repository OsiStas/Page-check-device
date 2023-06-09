import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user // Update the _user property, not the user computed property
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}