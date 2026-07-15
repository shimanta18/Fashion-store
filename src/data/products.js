
export const products = [
  // Panjabi
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1sImcEsZqevf3Cyzh1_bxuDAT0gCHgKtzktmZhM3PQ&s=10",
    rating: 4.5,
    colors: ["White", "Navy", "Olive"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Premium breathable cotton fabric, perfect for festive occasions and casual traditional wear. Features subtle embroidery details along the placket."
  },
  {
    id: 2,
    name: "Slim-Fit Indigo Kabli Set",
    category: "Panjabi",
    price: 3250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpsO3oMHOCPkFa07f-FrGqZbuoTDaZWel1kWW6ACruw&s",
    rating: 4.8,
    colors: ["Indigo", "Slate Gray", "Midnight Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Modernized two-piece Kabli set with a tailored fit. Cut from a structured cotton-blend that retains its clean shape all day."
  },
  {
    id: 3,
    name: "Textured Silk Festive Panjabi",
    category: "Panjabi",
    price: 4500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE6dKcciLQKNvm85THVH7WiipBtoVn3_s0BVOc2MMdw&s=10",
    rating: 4.9,
    colors: ["Crimson", "Deep Gold", "Emerald Green"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    description: "Luxe raw silk textures with exquisite, minimalist metallic thread embroidery on the collar. A timeless centerpiece for major celebrations."
  },
  {
    id: 4,
    name: "Summer Linen Panjabi",
    category: "Panjabi",
    price: 1890,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3yD7X_WGKiAOYj2n2V-R0LH1XLHzUyfcg-uMbB-9hg&s=10",
    rating: 4.2,
    colors: ["Sand", "Sky Blue", "Off-White"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Ultra-light linen blend panjabi designed to offer optimal air circulation during hot summer days. Standard casual comfort."
  },
  {
    id: 5,
    name: "Subtle Jacquard Panjabi",
    category: "Panjabi",
    price: 2600,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSNnZnaYw4dXhicvEOOn1gmMT87NHPddXg1HLjyw4GA&s=10",
    rating: 4.4,
    colors: ["Charcoal", "Burgundy"],
    sizes: ["S", "M", "L", "XL"],
    inStock: false, // Testing empty/sold out states
    description: "Intricate self-weave jacquard patterns on premium soft cotton. Elegant tone-on-tone buttons for a sharp, sophisticated look."
  },

  // shirts
  {
    id: 6,
    name: "Minimalist Linen Shirt",
    category: "Shirts",
    price: 1850,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4R_AOpwJVtc9A4BY6fqF-Tczwnd4segvqxhpFEoTPA&s=10",
    rating: 4.7,
    colors: ["Beige", "White", "Sky Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Lightweight, relaxed-fit linen shirt designed for maximum comfort during warm weather. Pre-washed for extra softness."
  },
  {
    id: 7,
    name: "Vintage Camp Collar Shirt",
    category: "Shirts",
    price: 1690,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTbs4QWpN20du_H2U2IC8037Gf2EruBeEPmrnSv_fKw&s=10",
    rating: 4.3,
    colors: ["Olive Green", "Mustard Yellow", "Rust Red"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description: "Retro retro-inspired silhouette with a relaxed flat collar. Made from a fluid tencel blend that drapes naturally."
  },
  {
    id: 8,
    name: "Structured Oxford Shirt",
    category: "Shirts",
    price: 1990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrA-_0jrXQQkSYFs1kC0OV5_Y4ll9THdIIenK6M3h6A&s=10",
    rating: 4.6,
    colors: ["Oxford Blue", "Classic White", "Soft Pink"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    description: "Heavyweight Oxford weave cotton. Features a perfect button-down collar and a robust tailored fit that transitions from office to weekend easily."
  },
  {
    id: 9,
    name: "Indigo Chambray Casual Shirt",
    category: "Shirts",
    price: 2100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioVhQDB2mstz61-mYUtR2TGdlkPnaoau445i4DxlLcQ&s=10",
    rating: 4.5,
    colors: ["Dark Wash", "Mid Wash"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Washed down chambray cotton shirt. Soft to the touch, with contrasting white stitching details and double utility chest pockets."
  },
  {
    id: 10,
    name: "Sage Corduroy Utility Shirt",
    category: "Shirts",
    price: 2450,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35hRwplVQt1ofdahxqEsMNEk8y1Xp119rhU0CVpU1fg&s=10",
    rating: 4.7,
    colors: ["Sage Green", "Warm Tan"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Fine-wale corduroy fabric. Designed to be worn as an overshirt or on its own, adding great layered texture to cold-season outfits."
  },
  {
    id: 11,
    name: "Micro-Print Poplin Shirt",
    category: "Shirts",
    price: 1750,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop",
    rating: 4.1,
    colors: ["Navy Pattern", "White Pattern"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Breathable crisp cotton poplin with neat geometric prints. Wrinkle-resistant finishing makes it perfect for low-maintenance days."
  },

  // t-shirt
  {
    id: 12,
    name: "Heavyweight Boxy Tee",
    category: "T-Shirts",
    price: 850,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9ccXaKaiHc8F9tlpdhgP2_Pv3HSxnSlGnL1vPT0B3w&s=10",
    rating: 4.8,
    colors: ["Off-White", "Vintage Black", "Moss Green"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Knitted from dense 260 GSM combed cotton. Boxy, slightly cropped silhouette with a thick ribbed crewneck collar."
  },
  {
    id: 13,
    name: "Pique Cotton Polo",
    category: "T-Shirts",
    price: 1150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuUgs7j1wrnDUhcER3CnhvpYAEzcn5krGQi3f5sB2cw&s=10",
    rating: 4.4,
    colors: ["Crimson Red", "Royal Blue", "Forest Green"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Classic pique weave polo with structured collar tips that won't curl over time. A polished casual standard."
  },
  {
    id: 14,
    name: "Striped Slub Cotton Tee",
    category: "T-Shirts",
    price: 790,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
    rating: 4.2,
    colors: ["Navy/White", "Grey/Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Textured slub cotton yarn with timeless nautical stripes. Remarkably lightweight and feels exceptionally soft against the skin."
  },
  {
    id: 15,
    name: "Waffle-Knit Long Sleeve",
    category: "T-Shirts",
    price: 1290,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMintX-tq9j73HioQluGsz70ldc9TuM5oKmTt6M3thg&s=10",
    rating: 4.6,
    colors: ["Oatmeal", "Charcoal Gray"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Thermal trapping waffle knit texture. Adds depth under coats and denim jackets or functions as an easy-going loungewear option."
  },
  {
    id: 16,
    name: "Mercerized Crewneck Tee",
    category: "T-Shirts",
    price: 990,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    colors: ["Emerald", "Classic Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Mercerized cotton treatment produces a subtle silky sheen and deep, rich color tones that refuse to fade in the wash."
  },

  // pants
  {
    id: 17,
    name: "Slim-Fit Indigo Denim",
    category: "Pants",
    price: 2400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MMcna3GX5SyKE7JRqK_0JAYLyyoukhZZeGU4mLtwdA&s=10",
    rating: 4.3,
    colors: ["Dark Indigo", "Light Wash"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    description: "Classic raw-wash stretch denim with a modern slim silhouette. Engineered for long-term durability and day-to-day movement."
  },
  {
    id: 18,
    name: "Sand-Washed Chino Pants",
    category: "Pants",
    price: 2200,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    colors: ["Khaki", "Olive", "Slate Gray"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    description: "Cotton twill blended with 2% spandex for comfortable flexibility. Soft sand-washed finish gives them an immediate broken-in feel."
  },
  {
    id: 19,
    name: "Pleated Linen Trousers",
    category: "Pants",
    price: 2800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvP4OeNDaJyr_VnYJ8_GH0I591OuQRc4cX5h1APqF8g&s=10",
    rating: 4.6,
    colors: ["Flax", "Off-White", "Midnight Black"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    description: "Relaxed vintage single-pleat trousers cut from pure Italian linen. Perfect smart-casual wear for summer garden parties or beach retreats."
  },
  {
    id: 20,
    name: "Relaxed Utility Cargo Pants",
    category: "Pants",
    price: 2590,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobDqV0hXw15dwAiU251uE3WghNFbH-GfotZ-_7hGWVg&s=10",
    rating: 4.4,
    colors: ["Military Green", "Coyote Brown"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    description: "Tough ripstop fabric with deep functional cargo side pockets and adjustable hem drawstrings to customize your taper drape style."
  },
  {
    id: 21,
    name: "Athletic Smart Joggers",
    category: "Pants",
    price: 1800,
    image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    colors: ["Heather Grey", "Obsidian Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Performance interlock knit fabric. Tapered cut with discrete concealed zipper pockets for active commutes and off-duty styling."
  },

  // jacket and sweeter
  {
    id: 22,
    name: "Oversized Heavyweight Hoodie",
    category: "Outerwear",
    price: 2990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRbjtGyB4AAZympR5CQ-vghbU8D-428Hm4IVSY2sS1w&s=10",
    rating: 4.7,
    colors: ["Charcoal", "Sand Dunes", "Pitch Black"],
    sizes: ["M", "L", "XL"],
    inStock: false, // Testing out of stock
    description: "400 GSM ultra-dense French terry cotton. Features dropped shoulders and deep double-lined hood wraps for cozy street presence."
  },
  {
    id: 23,
    name: "Minimalist Suede Bomber Jacket",
    category: "Outerwear",
    price: 5500,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    colors: ["Tan Suede", "Chocolate Brown"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Ultra-supple vegan suede outer shell fitted with sleek gunmetal zippers and premium ribbed trims. Sophisticated night-out companion."
  },
  {
    id: 24,
    name: "Classic Denim Trucker Jacket",
    category: "Outerwear",
    price: 3400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJECw1fHvvlE3VTFUQfXhlHdgwkLBJhrfHiVtxWvHfLA&s=10",
    rating: 4.6,
    colors: ["Classic Indigo", "Acid Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Unwashed heavy rigid denim construction. Built to conform and fade uniquely to your body's movements over years of hard wear."
  },
  {
    id: 25,
    name: "Merino Wool Knit Cardigan",
    category: "Outerwear",
    price: 3800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5MVEi6YvWrs4B4kNAthhGidfw80r2AZm9VMFC2ctmg&s=10",
    rating: 4.8,
    colors: ["Earthy Brown", "Navy Blue"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Spun from 100% fine Australian merino wool. Offers soft thermal insulation with a classic relaxed button front structure."
  },

  //accesories
  {
    id: 26,
    name: "Minimalist Leather Wallet",
    category: "Accessories",
    price: 1200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiAthNII12oGpBUhbxKzKRsF9DBH_ETCGG755JOAuDw&s=10",
    rating: 4.7,
    colors: ["Cognac Brown", "Classic Black"],
    sizes: ["OS"],
    inStock: true,
    description: "Full-grain vegetable-tanned leather. Slim bi-fold design holding up to 8 cards and flat cash bills without bulging."
  },
  {
    id: 27,
    name: "Brushed Nickel Leather Belt",
    category: "Accessories",
    price: 950,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ei-DWj5IvgBg7FRrhcT-Jhe4HwFZtHno3Ryubx31Ew&s=10",
    rating: 4.3,
    colors: ["Mahogany", "Matte Black"],
    sizes: ["32", "34", "36", "38"],
    inStock: true,
    description: "Crafted from a solid strip of thick saddle leather. Finished with an elegant brushed-nickel buckle closure."
  },
  {
    id: 28,
    name: "Classic Chronograph Watch",
    category: "Accessories",
    price: 6500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    colors: ["Silver/White", "Black/Silver"],
    sizes: ["OS"],
    inStock: true,
    description: "Minimalist dual-dial analog system operating on a precise Japanese quartz movement. Features robust scratch-resistant mineral glass."
  },
  {
    id: 29,
    name: "Premium Linen Tote Bag",
    category: "Accessories",
    price: 750,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqewLCjlOCkczGCkbIXvdVV2aNmk_1TE_pvMKlIP-u6w&s=10",
    rating: 4.2,
    colors: ["Natural Flax", "Coal Gray"],
    sizes: ["OS"],
    inStock: true,
    description: "Reinforced canvas-lined linen tote. Heavy-duty woven straps make it highly reliable for market trips or beach days."
  },
  {
    id: 30,
    name: "Polarized Acetate Sunglasses",
    category: "Accessories",
    price: 1850,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    colors: ["Tortoiseshell", "Glossy Black"],
    sizes: ["OS"],
    inStock: false, 
    description: "Classic D-frame design meticulously crafted from hand-polished cellulose acetate. Fitted with 100% UVA/UVB protection filters."
  }
];