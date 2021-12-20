import { Skill, SkillList } from "src/app/models/skill.model"

export const programmingLanguages: Skill[] = [
    {
        name: 'Javascript',
        icon: "/assets/img/icons/js.webp",
        delay: 250
    },
    {
        name: 'Typescript',
        icon: "/assets/img/icons/ts.webp",
        delay: 500
    },
    {
        name: 'Python',
        icon: "/assets/img/icons/py.webp",
        delay: 750
    },
    {
        name: 'Java',
        icon: "/assets/img/icons/java.webp",
        delay: 1000
    },
    {
        name: 'Go',
        icon: "/assets/img/icons/go.webp",
        delay: 1250
    },
    {
        name: 'PHP',
        icon: "/assets/img/icons/php.webp",
        delay: 1500
    },

]

export const frameworks: Skill[] = [
    {
        name: "Docker",
        icon: "/assets/img/icons/docker.webp",
        delay: 1750
    },
    {
        name: "VueJs",
        icon: "/assets/img/icons/vuejs.webp",
        delay: 2000
    },
    {
        name: "Angular",
        icon: "/assets/img/icons/angular.webp",
        delay: 2250
    },
    {
        name: "Django",
        icon: "/assets/img/icons/django.webp",
        delay: 2500
    },
    {
        name: "Laravel",
        icon: "/assets/img/icons/laravel.webp",
        delay: 2750
    },
    {
        name: "TailwindCss",
        icon: "/assets/img/icons/tailwindcss.webp",
        delay: 3000
    },
    {
        name: "Bootstrap",
        icon: "/assets/img/icons/bootstrap.webp",
        delay: 3250
    },
    {
        name: "Git",
        icon: "/assets/img/icons/git.webp",
        delay: 3500
    },
]

export const programs: Skill[] = [
    {
        name: "Visual Studio",
        icon: "/assets/img/icons/vs.webp",
        delay: 3750
    },
    {
        name: "Jetbrains IDEs",
        icon: "/assets/img/icons/jetbrains.webp",
        delay: 4000
    },
    {
        name: "Postman",
        icon: "/assets/img/icons/postman.webp",
        delay: 4250
    },
    {
        name: "Wordpress",
        icon: "/assets/img/icons/wordpress.webp",
        delay: 4500
    },
    {
        name: "Elementor",
        icon: "/assets/img/icons/elementor.webp",
        delay: 4750
    },
    {
        name: "AdobeXd",
        icon: "/assets/img/icons/adobexd.webp",
        delay: 5000
    }
]

export const dbs: Skill[] = [
    {
        name: "Mongodb",
        icon: "/assets/img/icons/mongodb.webp",
        delay: 5250
    },
    {
        name: "Postgre",
        icon: "/assets/img/icons/postgre.webp",
        delay: 5500
    },
    {
        name: "MySQL",
        icon: "/assets/img/icons/sql.webp",
        delay: 5750
    },
]

export const mockedSkillList: SkillList[] = [
    {
        title: 'skills.languages',
        skills: programmingLanguages
    },
    {
        title: 'skills.frameworks',
        skills: frameworks
    },
    {
        title: 'skills.programs',
        skills: programs
    },
    {
        title: 'skills.dbs',
        skills: dbs
    },
]