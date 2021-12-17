import { AppData } from "src/app/models/storage.model";

export const defaultLocalStorage: AppData = {
    language: {
        lang: 'es',
    },
    theme: {
        isDark: false,
    },
    video: {
        isPlay: true,
    },
    layout: {
        innerWidth: 1000,
    },
}