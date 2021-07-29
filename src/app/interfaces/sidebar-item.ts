interface SvgPath {
    fill: string;
    d: string;
    class: string;
}

export interface SidebarItem {
    title: string;
    link: string;
    main: boolean;
    fill?: string;
    icon: {
        class: string;
        paths: Array<SvgPath>
    }
}