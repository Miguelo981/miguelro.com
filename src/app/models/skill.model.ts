export interface SkillList {
    title: string,
    skills: Skill[]
}

export interface Skill {
    name: string,
    icon: string,
    delay?: number,
}