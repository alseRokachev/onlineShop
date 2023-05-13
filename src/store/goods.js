import {createSlice} from "@reduxjs/toolkit";

const goods = createSlice({
    name: 'goods', initialState: {
        goodsData: [{
            name: 'Вода "Святой Источник" 0.45л',
            price: 65,
            img: 'https://svyatoyistochnik.com/local/templates/main/img/pics/2.jpg',
            id: 0
        }, {
            name: 'Вода "Святой Источник" 1л',
            price: 75,
            img: 'https://svyatoyistochnik.com/local/templates/main/img/pics/2.jpg',
            id: 1
        }, {
            name: 'Coca-Cola 0.5л',
            price: 85,
            img: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00049000000443/6dd7ee25e05a82eff49703fe2bf19ce0_large.png&width=512&type=webp&quality=90',
            id: 2
        }, {
            name: 'Чипсы "Lays : Краб и перец"',
            price: 90,
            img: 'https://www.lays.com/sites/lays.com/files/2022-05/XL%20Lays%20Flamin%20Hot%20New.png',
            id: 3
        }, {
            name: 'Чипсы "Lays : Классические"',
            price: 85,
            img: 'https://images.heb.com/is/image/HEBGrocery/001659215?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
            id: 4
        }, {
            name: 'Чипсы "Lays : Лук"',
            price: 85,
            img: 'https://novus.online/uploads/7/39314-5900259109033.jpg',
            id: 5
        }, {
            name: 'Чипсы "Lays : Краб"',
            price: 85,
            img: 'https://api.e-dostavka.by/UserFiles/images/catalog/Goods/2511/01402511/norm/01402511.n_1.png',
            id: 6
        }, {
            name: 'Coca-Cola 1л',
            price: 85,
            img: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00049000000443/6dd7ee25e05a82eff49703fe2bf19ce0_large.png&width=512&type=webp&quality=90',
            id: 7
        }]
        , introPagesData: [{
            id: 0, img: 'https://komuslona.ru/storage/app/media/actions/beru/vse-skidki.jpg'
        }, {
            id: 1, img: 'https://bandesign.ru/wp-content/uploads/2019/11/pc_banner_01.jpg'
        }, {
            id: 2, img: 'https://www.italbazar.ru/selectel/slides/1085/2ea7439933f.gif'
        }, {
            id: 3, img: 'https://img.freepik.com/premium-vector/neon-abstract-sale-banner-design_181623-496.jpg'
        }],
        goodsCategories: [
            {
                name: 'Акции',
                list: ['Скидки до 70%', 'Скидки 50%', 'Скидки 30%']
            }, {
                name: 'Алкоголь',
                list: ['Вина', 'Водка', 'Пиво', 'Виски', 'Шампанское']
            }, {
                name: 'Готовая еда',
                list: []
            }, {
                name: 'Мясо, птица, колбасы',
                list: []
            }, {
                name: 'Рыба, икра, морепродукты',
                list: []
            }, {
                name: 'Молоко, сыр, яйца',
                list: []
            }, {
                name: 'Чай, кофе, какао',
                list: []
            }, {
                name: 'Бакалея',
                list: []
            }, {
                name: 'Вода, соки, напитки',
                list: []
            }, {
                name: 'Сладости, чипсы, снеки',
                list: []
            }
        ]
    }
})

export default goods.reducer