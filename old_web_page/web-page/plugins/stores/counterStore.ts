import {defineStore} from "pinia";

interface counterStoreInterface {
    count: number
}

export const useCounterStore = defineStore('count', {
    state: () => {
        return <counterStoreInterface>{
            count: 0
        }
    },
    actions: {
        increment(val: number) {
            this.count += val
        },
        decrement(val: number) {
            this.count += val
        }
    }
})