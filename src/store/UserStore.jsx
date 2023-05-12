import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(boll) {
        this._isAuth = boll
    }
    setUser(user) {
        this.user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}