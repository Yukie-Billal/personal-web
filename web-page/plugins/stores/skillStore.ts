import {defineStore} from "pinia";

interface SkillState {
    skills: object,
}

interface SkillItem {
   "id": number,
   "name": string,
   "deescription": string,
   "image": string,
   "rate": string,
   "date_learning": string,
   "class": string,
   "most_used": number,
   "status": string,
   "used_for": object,
}

interface SkillBehaviour {
    name: string,
    description: string,

}

export const useSkillStore = defineStore('skills', {
    state() {
        return <SkillState>{
            skills: [],

        }
    },
    actions: {
        getSKillIdentity() {
            return {
                ...this.skills
            }
        },
    }
})