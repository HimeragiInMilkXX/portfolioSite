import z from "zod";

export type CommentItem = { name: string, aka: string, comment: string, url: string };

export const enquiryFormSchema =  z.object(
    
    {

        title: z
            .string( "Required" )
            .min(5, "Bug title must be at least 5 characters.")
            .max(32, "Bug title must be at most 32 characters."),
        sender: z
            .string( "Required" ).nonempty( "Required" ),
        body: z
            .string( "Required" ).nonempty( "Required" )

    }
    
);

export const hashtags: string[] = [ "web", "UI", "UX", "frontend", "backend", "fullstack", "rubik's cube", "singing", "guitar", "piano", "programming", "design", "ai"]

export type ProjectDetails = {

    displayName: string;
    desc: string;
    gallery: string[];
    concept: { why: string, what: string, how: string, when: string };
    design: ProjectDetails_Design;
    features: { [ title: string ]: ProjectDetails_Features }
    dev: ProjectDetails_Dev;
    reflect: ProjectDetails_Reflect;
    contribs: { [ name: string ]: ProjectDetails_Contributor }
    flow: Chart_Task[]

}

export type ProjectDetails_Dev = {

    design?: string[];
    frontend?: string[];
    backend?: string[];
    devOps?: string[];
    images?: string[];

}

export type ProjectDetails_Design = {

    styles: { [style: string]: string };
    drafts: { [desc: string]: string };
    color: {

        colors: string[];
        monotone: boolean;
        reason: string;

    }

}

export type Chart_Task = {

    id: number;
    text: string;
    start: string | Date;
    end: string | Date;
    duration: number;
    progress: number;
    type: string;
    parent?: number;
    open?: boolean;

}

export type ProjectDetails_Features = {

    photo: string;
    description: string;

}

export type ProjectDetails_Reflect = {

    succeed: string[];
    fail: string[];
    summary: string;

}

export type ProjectDetails_Contributor = {

    role: string;
    link: string;

}

export const icons = {

    "Figma": "Collaborative design tool for creating UI and prototypes.",
    "Gitmind": "Mind mapping and flowchart tool for visualizing ideas.",
    "ReactJS": "JavaScript library for building dynamic user interfaces.",
    "TailwindCSS": "Utility-first CSS framework for rapid UI styling.",
    "GSAP": "High-performance animation library for web interfaces.",
    "AWS": "Cloud platform for hosting, storage, and computing services.",
    "GitHub": "Version control platform for code collaboration and sharing.",
    "Gemini": "AI model for generating text, code, and creative content."

}