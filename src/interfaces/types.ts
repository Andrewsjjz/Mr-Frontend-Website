export interface CardProps {
    title: string
    content: string
    image?: string
    link: string
}

export interface AccordionProps {
    title: string
    children: JSX.Element
}

export interface HomeProps {
    titleH1: string
    bio: string
}
export interface MisionProps {
    content: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    feature5: string
    feature6: string
}

export interface SkillsProps {
    title: string
    bio: string
    fullStack: string
    frontend: string
    backend: string
    bbd: string
    dataScience: string
    machineLearning: string
    UXUI: string
    exp1: string
    exp2: string
    exp3: string
    message: string
}

export interface Category {
    projects: CardProps[]
}


export interface Data {
    Project: {
        [key: string]: Category
    }
    Home?: HomeProps
    FeaturesMision?: MisionProps
    Skills?: SkillsProps
}
