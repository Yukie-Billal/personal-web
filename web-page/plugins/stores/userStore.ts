import {defineStore} from "pinia"
import type userInterface from "~/utils/interface/userInterface"

interface userStoreInterface {
    user: userInterface,
    isLoggedIn: boolean
}

export const useUserStore = defineStore('user', {
    state() {
        return <userStoreInterface>{
            user: {},
            isLoggedIn: false
        }
    },
    actions: {
        setLoggedIn() {
            this.isLoggedIn = true
        },
        setUser(user: userInterface) {
            this.user = user
        }
    }
})