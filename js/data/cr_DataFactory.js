angular.module('cr_Customify')
    .factory('cr_DataFactory', ['cr_ModelsManager', 'cr_URLManager', function (cr_ModelsManager, cr_URLManager) {

        var self = this;

        self.version = '1.0.0';

        self.template = [
            new cr_ModelsManager.cr_TemplateModel({
                text: "Hello"
            }),
            new cr_ModelsManager.cr_TemplateModel({
                text: "IDCreator"
            }),
            new cr_ModelsManager.cr_TemplateModel({
                image: "./img/000001/1.png"
            }),
            new cr_ModelsManager.cr_TemplateModel({
                text: "Bay"
            })
        ]

        self.product = new cr_ModelsManager.cr_ProductModel({
            id: '0000001',
            title: 'Men\'s Sleeveless T-Shirt',
            description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
            price: '12.10',
            count: '1',
            currency_symbol: '<i class="fa fa-eur"></i>',
            image: './img/000001/main_image.jpg',
            gender: 'Man',
            available_gender: ['Man', 'Women', 'Kids'],
            colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
            sizes: [
                {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
            ],
            material: 'Cotton',
            category: 'T-shirts',
            brand: 'B & C',
            preview_img: [
                './img/000001/preview_image_front.jpg',
                './img/000001/preview_image_back.jpg',
                './img/000001/preview_image_right.jpg',
                './img/000001/preview_image_left.jpg'
            ],
            detail_product_img: [
                {
                    name: 'Jack',
                    size: '(185cm 88kg)',
                    photo: [
                        {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                        {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                        {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                        {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                        {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                    ]
                },
                {
                    name: 'Thomas',
                    size: '(183cm 64kg)',
                    photo: [
                        {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                        {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                        {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                        {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                        {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                    ]
                },
                {
                    name: 'Harry',
                    size: '(173cm 115kg)',
                    photo: [
                        {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                        {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                        {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                        {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                        {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                    ]
                }
            ]
        });

        self.FAQ = [
            {
                title: 'Post_1',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_2',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_3',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_4',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_5',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_6',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_7',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_8',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_9',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            },
            {
                title: 'Post_10',
                content: 'Suillus brevipes is a species of fungus in the family Boletaceae. First described by American mycologists in the late 19th century, it is commonly known as the short-stemmed slippery Jack. The mushrooms produced by the fungus are characterized by a chocolate to reddish-brown cap covered with a sticky layer of slime, and a short whitish stalk without a partial veil. The cap can reach a diameter of about 10 cm (3.9 in), while the stalk is up to 6 cm (2.4 in) long and 2 cm (0.8 in) thick.',
            }

        ];

        //self.product_local_data  = {
        //    gender: self.product.gender
        //};

        self.basic_objects = [
            {
                name: 'geo',
                url: './img/geometry/001.png'
            },
            {
                name: 'geo',
                url: './img/geometry/002.png'
            },
            {
                name: 'geo',
                url: './img/geometry/003.png'
            },
            {
                name: 'geo',
                url: './img/geometry/004.png'
            },
            {
                name: 'geo',
                url: './img/geometry/005.png'
            },
            {
                name: 'geo',
                url: './img/geometry/006.png'
            },
            {
                name: 'geo',
                url: './img/geometry/007.png'
            },
            {
                name: 'geo',
                url: './img/geometry/008.png'
            },
            {
                name: 'geo',
                url: './img/geometry/009.png'
            },
            {
                name: 'geo',
                url: './img/geometry/010.png'
            },
            {
                name: 'geo',
                url: './img/geometry/011.png'
            }
        ];


        self.import = [
            new cr_ModelsManager.cr_ImportModel({
                id: '0000001',
                date: '20.01.2015',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Man'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000002',
                date: '20.01.2015',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Women'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000003',
                date: '20.01.2015',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Women'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000004',
                date: '15.10.2013',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Women'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000005',
                date: '15.10.2013',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Kids'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000006',
                date: '30.11.2010',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Kids'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            }),
            new cr_ModelsManager.cr_ImportModel({
                id: '0000007',
                date: '15.10.2013',
                title: 'Men\'s Sleeveless T-Shirt',
                description: 'Muscle shirt from B&C for men <br>- armless t-shirt <br>- round neckline <br>- straight cut <br>- 100% pre-shrunk jersey cotton <br>- material weight 145 g/sqm',
                price: '12.10',
                count: '1',
                currency_symbol: 'ˆ',
                image: './img/000001/main_image.jpg',
                gender: 'Man',
                available_gender: ['Man'],
                colors: ['#aeffad', '#adffd4', '#adfffd', '#add7ff', '#adaeff', '#d4adff', '#fdadff', '#ffadd7'],
                sizes: [
                    {width: '49', length: '69', weight: '0', size: 'S', count: 0},
                    {width: '52', length: '71', weight: '0', size: 'M', count: 1},
                    {width: '55', length: '73', weight: '0', size: 'L', count: 0},
                    {width: '58', length: '75', weight: '0', size: 'XL', count: 0},
                    {width: '61', length: '77', weight: '0', size: 'XXL', count: 0}
                ],
                material: 'Cotton',
                category: 'T-shirts',
                brand: 'B & C',
                preview_img: [
                    './img/000001/preview_image_front.jpg',
                    './img/000001/preview_image_back.jpg',
                    './img/000001/preview_image_right.jpg',
                    './img/000001/preview_image_left.jpg'
                ],
                detail_product_img: [
                    {
                        name: 'Jack',
                        size: '(185cm 88kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Jack/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Jack/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Jack/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Jack/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Jack/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Thomas',
                        size: '(183cm 64kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Thomas/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Thomas/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Thomas/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Thomas/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Thomas/xxl.jpg'}
                        ]
                    },
                    {
                        name: 'Harry',
                        size: '(173cm 115kg)',
                        photo: [
                            {size: 'S', image: './img/000001/detail/Harry/s.jpg'},
                            {size: 'M', image: './img/000001/detail/Harry/m.jpg'},
                            {size: 'L', image: './img/000001/detail/Harry/l.jpg'},
                            {size: 'XL', image: './img/000001/detail/Harry/xl.jpg'},
                            {size: 'XXL', image: './img/000001/detail/Harry/xxl.jpg'}
                        ]
                    }
                ]
            })
        ];

        self.market_items = [
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + '/img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#8869ca;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#8869ca;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: '#9cbf3e;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            }),
            new cr_ModelsManager.cr_MarketItems({
                title: 'Artistic Flowers Art',
                url: cr_URLManager.application + './img/22540.png',
                price: '152',
                current_symbol: '$',
                status: 'transparent;'
            })
        ];

        self.type_1 = [
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + './img/45247.png',
                type: 'PrintType2'
            })
        ];

        self.type_2 = [
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            })
        ];

        self.type_3 = [
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            })
        ];

        self.type_4 = [
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            })
        ];

        self.type_5 = [
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44093.png',
                type: 'PrintType3'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/22540.png',
                type: 'PrintType1'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/30696.png',
                type: 'PrintType4'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/44011.png',
                type: 'PrintType5'
            }),
            new cr_ModelsManager.cr_PrintItems({
                name: 'John',
                url: cr_URLManager.application + '/img/45247.png',
                type: 'PrintType2'
            })
        ];

        self.products_library = [
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/02.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Sport',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/06.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'T-Shirts',
                size: 'M'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/01.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Underwear',
                size: 'S'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/04.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Long Sleeves',
                size: 'XXL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'John',
                url: cr_URLManager.application + '/img/03.jpg',
                type: 'one',
                material: 'Nylon',
                category: 'Jackets',
                size: 'L'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                name: 'Jessie',
                url: cr_URLManager.application + '/img/05.jpg',
                type: 'one',
                material: 'Cotton',
                category: 'Polo shirts',
                size: 'XL'
            })
        ];

        self.products_favorite_library = [
            new cr_ModelsManager.cr_LibraryItems({
                id: '1',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '2',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '3',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '4',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '5',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '6',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '7',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '8',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '9',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '10',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '11',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '12',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '13',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '14',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '15',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '16',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '17',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '18',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '19',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '20',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '21',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            }),
            new cr_ModelsManager.cr_LibraryItems({
                id: '22',
                url: cr_URLManager.application + '/img/655.jpg',
                type: 'one'
            })
        ];

        self.fonts = [
            new cr_ModelsManager.cr_textFontItems({
                title: 'font1',
                url: cr_URLManager.application + '/img/fonts/387.jpg'
            }),
            new cr_ModelsManager.cr_textFontItems({
                title: 'font2',
                url: cr_URLManager.application + '/img/fonts/503.jpg'
            }),
            new cr_ModelsManager.cr_textFontItems({
                title: 'font3',
                url: cr_URLManager.application + '/img/fonts/376.jpg'
            }),
            new cr_ModelsManager.cr_textFontItems({
                title: 'font4',
                url: cr_URLManager.application + '/img/fonts/377.jpg'
            })];

        self.extra_fonts = [
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '1',
                title: 'John',
                url: cr_URLManager.application + '/img/text/1_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '2',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/2_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '3',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/3_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '4',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/4_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '5',
                title: 'Mary',
                url: cr_URLManager.application + '/img/text/5_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '6',
                title: 'John',
                url: cr_URLManager.application + '/img/text/6_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '7',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/7_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '8',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/8_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '9',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/9_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '10',
                title: 'John',
                url: cr_URLManager.application + '/img/text/10_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '11',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/11_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '12',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/12_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '13',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/13_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '14',
                title: 'John',
                url: cr_URLManager.application + '/img/text/14_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '15',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/15_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '16',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/16_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '17',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/17_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '18',
                title: 'John',
                url: cr_URLManager.application + '/img/text/18_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '19',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/19_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '20',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/20_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '21',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/21_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '22',
                title: 'John',
                url: cr_URLManager.application + '/img/text/22_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '23',
                title: 'Jessie',
                url: cr_URLManager.application + '/img/text/23_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '24',
                title: 'Johanna',
                url: cr_URLManager.application + '/img/text/24_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '25',
                title: 'Joy',
                url: cr_URLManager.application + '/img/text/25_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '26',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/26_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '27',
                title: 'Samantha',
                url: cr_URLManager.application + '/img/text/27_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '28',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/28_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '29',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/29_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '30',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/30_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '31',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/31_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '32',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/149_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '33',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/183_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '34',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/184_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '35',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/185_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '36',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/192_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '37',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/193_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '38',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/194_eu.png'
            }),
            new cr_ModelsManager.cr_ExtraFontModel({
                id: '39',
                title: 'Peter',
                url: cr_URLManager.application + '/img/text/195_eu.png'
            })
        ];

        self.allCountItem = 1;

        return self;
    }]);