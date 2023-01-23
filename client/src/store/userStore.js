import {makeAutoObservable} from "mobx"
export default class UserStore {
    constructor(){
        this._auth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setAuth(bool){
        this._auth = bool
    }
    setUser(user){
        this._user = user
    }
    get isAuth(){
        return this._auth
    }
    get user(){
        return this._user
    }

}