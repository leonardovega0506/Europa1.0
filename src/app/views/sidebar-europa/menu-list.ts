export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Pedidos', 'pedidos', 'Pedidos', 'access_time'),
    new MenuItem('Estafeta', 'estafeta', 'Estafeta', 'receipt'),
    //new MenuItem('Fedex', 'mathematics', 'mathematics class material', 'store'),
];