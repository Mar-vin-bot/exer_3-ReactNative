const DADOS = [
    {
        id: 1,
        text: 'abajur',
        image: require('../../../assets/01-tablelamps.png')
    },

    {
        id: 2,
        text: 'Lampada',
        image: require('../../../assets/02-ceilinglamps.png') 
    },

    {
        id: 3,
        text: 'outra coisa 3',
        image: require('../../../assets/03-sconces.png')
    },

    {
        id: 4,
        text: 'outra coisa 4',
        image: require('../../../assets/04-floorlamps.png')
    },

    {
        id: 5,
        text: 'outra coisa 5',
        image: require('../../../assets/05-lightdecor.png')
    },

    {
        id: 6,
        text: 'outra coisa 6',
        image: require('../../../assets/06-garlands.png')
    },
];

export const getData = ()=>{
        return DADOS;
}

export const getDataById = (id) => {
    return DADOS.find(item => {
    return item.id === id;
});
};