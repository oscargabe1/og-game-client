import { SidebarItem } from "src/app/interfaces/sidebar-item";

export const SidebarItems:Array<SidebarItem> = [
    {
        title: 'Aliens',
        link: '/dashboard/messages',
        main: true,
        fill: 'currentColor',
        icon: {
        class: 'bi bi-arrow-bar-right',
        paths: [
            {
                fill: 'currentColor',
                d:'M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z',
                class: 'fa-secondary'
            }
        ]
        }
    },
    {
        title: 'Space',
        link: '/dashboard/messages',
        main: true,
        fill: 'currentColor',
        icon: {
        class: 'bi bi-wallet-fill',
        paths: [
            {
                fill: 'currentColor',
                d:'M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z',
                class: 'fa-secondary'
            },
            {
                fill: 'currentColor',
                d:'M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z',
                class: 'fa-primary'
            }
        ]
        }
    },
    {
        title: 'Twitch',
        link: '/dashboard/messages',
        main: true,
        fill: 'currentColor',
        icon: {
        class: 'bi bi-twitch',
        paths: [
            {
                fill: 'currentColor',
                d:'M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z',
                class: 'fa-secondary'
            },
            {
                fill: 'currentColor',
                d:'M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z',
                class: 'fa-primary'
            }
            
        ]
        }
    },
    {
        title: 'Cold',
        link: '/dashboard/messages',
        main: true,
        fill: 'currentColor',
        icon: {
        class: 'bi bi-thermometer-snow',
        paths: [
            {
                fill: 'currentColor',
                d:'M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z',
                class: 'fa-secondary'
            },
            {
                fill: 'currentColor',
                d:'M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z',
                class: 'fa-primary'
            }
            
        ]
        }
    },
    {
        title: 'Mail',
        link: '/dashboard/messages',
        main: false,
        fill: 'currentColor',
        icon: {
        class: 'bi bi-envelope-fill',
        paths: [
            {
                fill: 'currentColor',
                d:'M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z',
                class: 'fa-secondary'
            }
            
        ]
        }
    }
];