const products = [
  {
    id: 1,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    stock: 56,
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    brand: "Calvin Klein",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    deleted: true,
  },
  {
    id: 2,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 18.64,
    rating: 2.76,
    stock: 0,
    brand: "Chanel",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    deleted: false,
  },
  {
    id: 3,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
    brand: "Dior",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    deleted: false,
  },
  {
    id: 4,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 11.47,
    rating: 2.68,
    stock: 3,
    brand: "Dolce & Gabbana",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    deleted: false,
  },
  {
    id: 5,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
    price: 79.99,
    discountPercentage: 8.9,
    rating: 2.69,
    stock: 93,
    brand: "Gucci",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    deleted: false,
  },
  {
    id: 6,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 0.29,
    rating: 4.14,
    stock: 47,
    brand: "Annibale Colombo",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    deleted: false,
  },
  {
    id: 7,
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
    price: 2499.99,
    discountPercentage: 18.54,
    rating: 3.08,
    stock: 16,
    brand: "Annibale Colombo",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    deleted: false,
  },
  {
    id: 8,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
    price: 299.99,
    discountPercentage: 9.58,
    rating: 4.48,
    stock: 16,
    brand: "Furniture Co.",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    deleted: false,
  },
  {
    id: 9,
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    discountPercentage: 15.23,
    rating: 4.11,
    stock: 47,
    brand: "Knoll",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    deleted: false,
  },
  {
    id: 10,
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
    price: 799.99,
    discountPercentage: 11.22,
    rating: 3.26,
    stock: 95,
    brand: "Bath Trends",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    deleted: false,
  },
  {
    id: 11,
    title: "Tissue Paper Box",
    description:
      "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    category: "groceries",
    price: 2.49,
    discountPercentage: 15.44,
    rating: 4.55,
    stock: 97,
    brand: "Everyday",
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png",
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
    deleted: false,
  },
  {
    id: 12,
    title: "Decoration Swing",
    description:
      "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    category: "home-decoration",
    price: 59.99,
    discountPercentage: 0.65,
    rating: 3.56,
    stock: 62,
    brand: "Fairhaven",
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
    deleted: false,
  },
  {
    id: 13,
    title: "House Showpiece Plant",
    description:
      "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    category: "home-decoration",
    price: 39.99,
    discountPercentage: 19.45,
    rating: 3.61,
    stock: 89,
    brand: "Everbloom",
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
    deleted: false,
  },
  {
    id: 14,
    title: "Plant Pot",
    description:
      "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    category: "home-decoration",
    price: 14.99,
    discountPercentage: 0.19,
    rating: 3.33,
    stock: 70,
    brand: "Urban Oasis",
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
    deleted: false,
  },
  {
    id: 15,
    title: "Black Aluminium Cup",
    description:
      "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    category: "kitchen-accessories",
    price: 5.99,
    discountPercentage: 9.22,
    rating: 3.62,
    stock: 42,
    brand: "EverLast",
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    deleted: false,
  },
  {
    id: 16,
    title: "Boxed Blender",
    description:
      "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    category: "kitchen-accessories",
    price: 39.99,
    discountPercentage: 7.36,
    rating: 2.73,
    stock: 81,
    brand: "NutriBullet",
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
    deleted: false,
  },
  {
    id: 17,
    title: "Electric Stove",
    description:
      "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    category: "kitchen-accessories",
    price: 49.99,
    discountPercentage: 16.64,
    rating: 4.84,
    stock: 41,
    brand: "Cuisinart",
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png",
    deleted: false,
  },
  {
    id: 18,
    title: "Microwave Oven",
    description:
      "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    category: "kitchen-accessories",
    price: 89.99,
    discountPercentage: 18.73,
    rating: 2.71,
    stock: 27,
    brand: "KitchenAid",
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png",
    deleted: false,
  },
  {
    id: 19,
    title: "Mug Tree Stand",
    description:
      "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    category: "kitchen-accessories",
    price: 15.99,
    discountPercentage: 15.21,
    rating: 4.34,
    stock: 93,
    brand: "HomePlus",
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
    deleted: false,
  },
  {
    id: 20,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    category: "laptops",
    price: 1999.99,
    discountPercentage: 9.25,
    rating: 3.13,
    stock: 39,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    deleted: false,
  },
  {
    id: 21,
    title: "Asus Zenbook Pro Dual Screen Laptop",
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    category: "laptops",
    price: 1799.99,
    discountPercentage: 9.21,
    rating: 3.14,
    stock: 38,
    brand: "Asus",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
    deleted: false,
  },
  {
    id: 22,
    title: "Huawei Matebook X Pro",
    description:
      "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    category: "laptops",
    price: 1399.99,
    discountPercentage: 15.25,
    rating: 4.62,
    stock: 34,
    brand: "Huawei",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },
  {
    id: 23,
    title: "Lenovo Yoga 920",
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    category: "laptops",
    price: 1099.99,
    discountPercentage: 7.77,
    rating: 2.98,
    stock: 71,
    brand: "Lenovo",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
    deleted: false,
  },
  {
    id: 24,
    title: "New DELL XPS 13 9300 Laptop",
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    category: "laptops",
    price: 1499.99,
    discountPercentage: 11.7,
    rating: 2.98,
    stock: 18,
    brand: "Dell",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
    deleted: false,
  },
  {
    id: 25,
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    category: "mens-shirts",
    price: 29.99,
    discountPercentage: 1.41,
    rating: 4.19,
    stock: 44,
    brand: "Fashion Trends",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
    deleted: false,
  },
  {
    id: 26,
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    category: "mens-shirts",
    price: 24.99,
    discountPercentage: 12.6,
    rating: 4.95,
    stock: 64,
    brand: "Gigabyte",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
    deleted: false,
  },
  {
    id: 27,
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    category: "mens-shirts",
    price: 34.99,
    discountPercentage: 17.53,
    rating: 3.66,
    stock: 65,
    brand: "Classic Wear",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
    deleted: false,
  },
  {
    id: 28,
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    category: "mens-shirts",
    price: 19.99,
    discountPercentage: 8.65,
    rating: 4.62,
    stock: 20,
    brand: "Casual Comfort",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
    deleted: false,
  },
  {
    id: 29,
    title: "Men Check Shirt",
    description:
      "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    category: "mens-shirts",
    price: 27.99,
    discountPercentage: 14.21,
    rating: 2.9,
    stock: 69,
    brand: "Urban Chic",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
    deleted: false,
  },
  {
    id: 30,
    title: "Nike Air Jordan 1 Red And Black",
    description:
      "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    category: "mens-shoes",
    price: 149.99,
    discountPercentage: 15.82,
    rating: 2.77,
    stock: 15,
    brand: "Nike",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
    deleted: false,
  },
  {
    id: 31,
    title: "Nike Baseball Cleats",
    description:
      "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    category: "mens-shoes",
    price: 79.99,
    discountPercentage: 11.4,
    rating: 4.01,
    stock: 14,
    brand: "Nike",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
    deleted: false,
  },
  {
    id: 32,
    title: "Puma Future Rider Trainers",
    description:
      "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    category: "mens-shoes",
    price: 89.99,
    discountPercentage: 3.64,
    rating: 4.85,
    stock: 10,
    brand: "Puma",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png",
    deleted: false,
  },
  {
    id: 33,
    title: "Sports Sneakers Off White & Red",
    description:
      "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    category: "mens-shoes",
    price: 119.99,
    discountPercentage: 11.69,
    rating: 4.92,
    stock: 73,
    brand: "Off White",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
    deleted: false,
  },
  {
    id: 34,
    title: "Sports Sneakers Off White Red",
    description:
      "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    category: "mens-shoes",
    price: 109.99,
    discountPercentage: 17.22,
    rating: 2.95,
    stock: 75,
    brand: "Off White",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
    deleted: false,
  },
  {
    id: 35,
    title: "Brown Leather Belt Watch",
    description:
      "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    category: "mens-watches",
    price: 89.99,
    discountPercentage: 15.01,
    rating: 4.47,
    stock: 69,
    brand: "Fashion Timepieces",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    deleted: false,
  },
  {
    id: 36,
    title: "Longines Master Collection",
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    category: "mens-watches",
    price: 1499.99,
    discountPercentage: 0.64,
    rating: 2.64,
    stock: 65,
    brand: "Longines",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
    deleted: false,
  },
  {
    id: 37,
    title: "Rolex Cellini Date Black Dial",
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    category: "mens-watches",
    price: 8999.99,
    discountPercentage: 14.28,
    rating: 3.61,
    stock: 84,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
    deleted: false,
  },
  {
    id: 38,
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    category: "mens-watches",
    price: 12999.99,
    discountPercentage: 5.7,
    rating: 4.52,
    stock: 33,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
    deleted: false,
  },
  {
    id: 39,
    title: "Rolex Datejust",
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    category: "mens-watches",
    price: 10999.99,
    discountPercentage: 9.69,
    rating: 4.94,
    stock: 11,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
    deleted: false,
  },
  {
    id: 40,
    title: "Rolex Submariner Watch",
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    category: "mens-watches",
    price: 13999.99,
    discountPercentage: 0.82,
    rating: 2.97,
    stock: 35,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
    deleted: false,
  },
  {
    id: 41,
    title: "Amazon Echo Plus",
    description:
      "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    category: "mobile-accessories",
    price: 99.99,
    discountPercentage: 16.3,
    rating: 3.52,
    stock: 50,
    brand: "Amazon",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
    deleted: false,
  },
  {
    id: 42,
    title: "Apple Airpods",
    description:
      "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    category: "mobile-accessories",
    price: 129.99,
    discountPercentage: 4.82,
    rating: 4.38,
    stock: 93,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    deleted: false,
  },
];

const brands = [...new Set([...products.map(p=>p.brand)])]; 
// categories.map((c) => ({
//   value: c,
//   label: c.split("-").join(" "),
//   checked: false,
// }));



brands.map((c) => ({
  value: c,
  label: c.split("-").join(" "),
  checked: false,
}));
