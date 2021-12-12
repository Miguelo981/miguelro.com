export interface ProjectThumbnail {
    title: string,
    description: string,
    usedTechnologies: {
        name: string,
        icon: string,
    }[],
    href: string,
    isPublished: boolean,
    thumbs: string[]
}