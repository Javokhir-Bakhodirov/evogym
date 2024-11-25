export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourClasses",
    ContactUs = "contactUs",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage?: (value: SelectedPage) => void;
}

export interface ClassType {
    image: string;
    description?: string;
    name: string;
}
