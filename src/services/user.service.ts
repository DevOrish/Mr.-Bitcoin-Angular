import { Injectable } from '@angular/core';
import { UtilService } from './utils.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private utilService: UtilService) {
    }

    gUsers = this._createUsers()

    _createUsers() {
        var users = this.utilService.loadFromStorage('users')
        if (!users) {
            users = [
                {
                    _id: this.utilService.makeId(),
                    name: "Shuki",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Shula Mualem",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Zigmond",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Mulu Mendi",
                    coins: 100,
                    moves: []
                }
            ]
            this.utilService.saveToStorage('users', users)
        }
        this.gUsers = users
        return this.gUsers
    }


    addMove(contact, amount) {
        var loggedInUser = this.getUser()
        if (loggedInUser.coins < amount) return this.utilService.showToast('Not enough BTC\'s in your wallet', 'warning')
        loggedInUser.moves.unshift({
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount
        })
        loggedInUser.coins -= amount
        const loggedInUserIdx = this.gUsers.findIndex(user => {
            return user._id === loggedInUser._id
        })
        this.gUsers.splice(loggedInUserIdx, 1, loggedInUser)
        this.utilService.saveToStorage('users', this.gUsers)
        this.utilService.saveToStorage('loggedInUser', loggedInUser)
        return loggedInUser
    }

    getUser() {
        var loggedInUser = this.utilService.loadFromStorage('loggedInUser')
        if (!loggedInUser) {
            loggedInUser = this.gUsers[3]
            this.utilService.saveToStorage('loggedInUser', loggedInUser)
        }
        return loggedInUser
    }

    signUp(name) {
        const newUser = {
            _id: this.utilService.makeId(),
            name,
            coins: 100,
            moves: []
        }
        this.gUsers.push(newUser)
        this.utilService.saveToStorage('users', this.gUsers)
        this.utilService.saveToStorage('loggedInUser', newUser)
        return newUser
    }

    checkLogin(name) {
        var user = this.gUsers.find(user => {
            return user.name === name
        })
        if (!user) return
        this.utilService.saveToStorage('loggedInUser', user)
        return user
    }

}




