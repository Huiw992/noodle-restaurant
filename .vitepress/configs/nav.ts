import {DefaultTheme} from "vitepress";

const docs = '/docs'
export const nav: DefaultTheme.NavItem[] = [
    {text: '基础', link: docs + '/foundation'},
    {text: '几何', link: docs + '/geometry'},
    {text: '渲染', link: docs + '/render'},
    {text: '工具', link: docs + '/tools'},
    {text: '关于', link: docs + '/about'}
]