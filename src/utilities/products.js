const products = [
    {
        "id": 1,
        "title": "Classic T-Shirt",
        "description": "A simple and comfortable t-shirt for everyday wear.",
        "price": 20.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70",
        "category": "clothing"
    },
    {
        "id": 2,
        "title": "Denim Jeans",
        "description": "High-quality jeans for a trendy and party look.",
        "price": 49.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/m/j/1/32-fmjen2200-flying-machine-original-imagt8etgghncfue.jpeg?q=70",
        "category": "clothing"
    },
    {
        "id": 3,
        "title": "Sweatshirt",
        "description": "Stay warm and stylish with this cozy sweatshirt.",
        "price": 29.99,
        "imgUrl": "https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "category": "clothing"
    },
    {
        "id": 4,
        "title": "Running Shoes",
        "description": "Lightweight and comfortable shoes for your daily run.",
        "price": 59.99,
        "imgUrl": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "category": "clothing"
    },
    {
        "id": 5,
        "title": "Summer Dress",
        "description": "A fashionable dress for a summer day out.",
        "price": 34.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/j/i/5/xxl-flower-print-kurta-ksapfashion-original-imagcvm8ftmxfzgy.jpeg?q=70",
        "category": "clothing"
    },
    {
        "id": 6,
        "title": "Leather Jacket",
        "description": "A classic leather jacket for a stylish look.",
        "price": 89.99,
        "imgUrl": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "category": "clothing"
    },
    {
        "id": 7,
        "title": "Hiking Boots",
        "description": "Durable boots for your outdoor adventures.",
        "price": 74.99,
        "imgUrl": "https://images.pexels.com/photos/1467574/pexels-photo-1467574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "category": "clothing"
    },
    {
        "id": 8,
        "title": "Winter Coat",
        "description": "Keep warm in this cozy winter long coat.",
        "price": 69.99,
        "imgUrl": "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "category": "clothing"
    },
    {
        "id": 9,
        "title": "Striped Sweater",
        "description": "A stylish striped sweater for a casual look.",
        "price": 24.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/ktd9mkw0/sweater/6/p/l/5-6-years-t794-kids-sweater-natural-ad-av-original-imag6qcczjvgt7ea.jpeg?q=70",
        "category": "clothing"
    },
    {
        "id": 10,
        "title": "Formal Suit",
        "description": "Look sharp in this formal suit for special occasions.",
        "price": 99.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/suit/t/z/v/38-sky-blue-darbar-in-original-imag6yt52nuefwwf-bb.jpeg?q=70",
        "category": "clothing"
    },
    {
        "id": 11,
        "title": "Gym Bag",
        "description": "A sporty bag to keep your gym equipments.",
        "price": 27.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/kjx6tu80/sport-bag/s/t/v/gym-bag-l-2005-monvelli-20-original-imafze6jthpdxe8n.jpeg?q=70",
        "category": "accessories"
    },
    {
        "id": 12,
        "title": "Men's Watch",
        "description": "Stainless steel watch for men to show bold presence.",
        "price": 19.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/o/e/-original-imagrs2qzthdzmpd.jpeg?q=70",
        "category": "accessories"
    },
    {
        "id": 13,
        "title": "Steel Bracelet",
        "description": "Stylish steel bracelet for you to showcase your elegancy.",
        "price": 14.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/8/c/u/-original-imagqhqnstyev4mv.jpeg?q=70",
        "category": "accessories"
    },
    {
        "id": 14,
        "title": "Necklace",
        "description": "An elegant necklace for a unique look wherever you go.",
        "price": 31.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/kylvr0w0/bangle-bracelet-armlet/x/t/7/free-free-cultured-1-heart-zabby-allen-original-imagasu4pzw7vy6g.jpeg?q=70",
        "category": "accessories"
    },
    {
        "id": 15,
        "title": "Black Ring",
        "description": "Stretchy and comfortable leggings for workouts.",
        "price": 22.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/xif0q/ring/i/u/9/-original-imagqgcyggdjh2jh.jpeg?q=70",
        "category": "accessories"
    },
    {
        "id": 16,
        "title": "Smartphone",
        "description": "A high-performance smartphone with the latest features.",
        "price": 499.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        "category": "electronics"
    },
    {
        "id": 17,
        "title": "Laptop",
        "description": "Powerful laptop for work and entertainment.",
        "price": 999.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/c/5/-original-imagtrj27kprghgz.jpeg?q=70",
        "category": "electronics"
    },
    {
        "id": 18,
        "title": "Tablet",
        "description": "Compact and versatile tablet for on-the-go tasks.",
        "price": 299.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/312/312/kyag87k0/tablet/4/n/o/g70-lte-moto-original-imagak3huz7jweyz.jpeg?q=70",
        "category": "electronics"
    },
    {
        "id": 19,
        "title": "Headphones",
        "description": "High-quality over-ear headphones for immersive audio.",
        "price": 129.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
        "category": "electronics"
    },
    {
        "id": 20,
        "title": "Smartwatch",
        "description": "Stay connected with this stylish and feature-rich smartwatch.",
        "price": 199.99,
        "imgUrl": "https://rukminim2.flixcart.com/image/612/612/kz1lle80/smartwatch/t/t/p/-original-imagb54swp4xn4na.jpeg?q=70",
        "category": "electronics"
    }
];

export default products;