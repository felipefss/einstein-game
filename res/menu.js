const { Menu } = require('electron');

const template = [
    {
        label: 'Jogo',
        submenu: [
            {
                label: 'Novo Jogo',
                accelerator: 'Ctrl+N',
                click() {
                    console.log('limpando');
                }
            },
            {
                role: 'quit'
            }
        ]
    }
];

module.exports = () => {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};