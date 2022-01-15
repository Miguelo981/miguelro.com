import { Testimonial } from "./testimonial.model";

export interface ProjectThumbnail {
    Id?: string,
    Title: string,
    Description: string,
    UsedTechnologies: {
       Name: string,
       Icon: string,
    }[],
    Href: string,
    IsPublished: boolean,
    Thumbs: string[],
    Testimonials?: Testimonial[]
}