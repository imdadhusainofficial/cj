function createItem(item) {
  const discount = Math.round(((item.original_price - item.current_price) / item.original_price) * 100);
  
  return {
    ...item,
    discount_percentage: discount
  };
}

const items = [
  createItem({
    id: '001',
    images: ['/images/1/1.png', '../images/1/1b.png',],
    company: 'Classic',
    item_name: 'Elegant Gold-Toned Jhumkas',
    original_price: 550,
    current_price: 450,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.5, count: 1400 },
    stock: 1,
    description: 'These are a stunning pair of traditional gold-toned Jhumka earrings. They feature an intricate circular, filigree upper design from which a bell-shaped jhumka dangles. The earrings are beautifully accented with multiple strands of light green/mint green crystal beads, adding a vibrant touch of color and movement. Perfect for ethnic wear, festive occasions, or weddings.',
  }),
  createItem({
    id: '002',
    images: ['../images/2/2.jpg', '../images/2/2b.png',],
    company: 'Classic',
    item_name: 'Striking Red & Gold Dangle Earrings',
    original_price: 450,
    current_price: 350,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.3, count: 24 },
    stock: 1,
    description: 'A sophisticated pair of gold-toned chandelier earrings featuring an ornate, round filigree drop design. The earrings are fastened with a square stud detailed with deep red crystal stones. The lower edge is elegantly embellished with five small dangling red crystal beads, providing a rich, striking contrast to the gold tone. They are an ideal accessory for special occasions and festive attire.',
  }),
  createItem({
    id: '003',
    images: ['../images/3/3.png', '../images/3/3b.png', '../images/3/3c.png',],
    company: 'Classic',
    item_name: 'Traditional Jhumkas with Ear Chains (Sahara)',
    original_price: 900,
    current_price: 699,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.1, count: 249 },
    description: 'An exquisite set of traditional gold-toned Jhumka earrings complete with elegant attached pearl ear chains (Sahara/Saharay). The main earring features a circular top and a bell-shaped drop, heavily embellished with delicate white faux pearls. The long, delicate gold chain is also adorned with small clusters of pearls, designed to be worn over the ear and clipped into the hair, offering a complete, regal look. Perfect for bridal or grand occasion wear.',
    stock: 1
  }),
  createItem({
    id: '004',
    images: ['../images/4/4.png', '../images/4/4b.png', '../images/4/4c.png', '../images/4/4d.png',],
    company: 'Classic',
    item_name: 'Elegant Gold-Plated Jhumka Earrings',
    original_price: 550,
    current_price: 400,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 5.0, count: 10 },
    sizes: [7,8],
    stock: 3,
    description: 'These exquisite gold-plated Jhumka earrings blend traditional Indian craftsmanship with a touch of modern elegance, perfect for any special occasion.',
  }),
  createItem({
    id: '005',
    images: ['../images/5/5.png', '../images/5/5b.png', '../images/5/5c.png',],
    company: 'Classic',
    item_name: 'Artisan Filigree Drop Earrings',
    original_price: 499,
    current_price: 350,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.2, count: 3500 },
    sizes: [8,9],
    stock: 3,
    description: 'These exquisite gold-tone, circular drop earrings feature intricate Jaali (filigree) work, offering a sophisticated blend of traditional craftsmanship and modern appeal.',
  }),
  createItem({
    id: '006',
    images: ['/images/6/6.png', '/images/6/6b.png', 'images/6/6c.png'],
    company: 'Classic',
    item_name: 'The Aura Serenity Collection: Teal Focus Beads',
    original_price: 250,
    current_price: 199,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 2.1, count: 400 },
    sizes: [2,3],
    stock: 1,
    description: `Experience portable equilibrium.
    The Teal Focus Beads are meticulously crafted for the mindful professional seeking instant grounding. Featuring high-grade polymer beads with a smooth tactile finish and an intricate sterling-silver accent, this piece serves as a sophisticated tool for meditation and stress management.`,
  }),
  createItem({
    id: '007',
    images: ['/images/7/7.png', '/images/7/7b.png', '/images/7/7c.png'],
    company: 'Classic',
    item_name: 'The Serenity Charm Bracelet',
    original_price: 350,
    current_price: 250,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.2, count: 388 },
    stock: 1,
    description: `A splash of stunning turquoise for your wrist! This isn't just a bracelet; it's a little piece of calm you can wear every day. Featuring polished, bright blue beads and a detailed silver charm, it's the perfect accessory to add an elegant, yet relaxed, pop of color to any outfit. Ready to turn heads?.`,
  }),
  createItem({
    id: '008',
    images: ['/images/8/8.png', '/images/8/8b.png','/images/8/8c.png'],
    company: 'Classic',
    item_name: 'Teal Serenity Bracelet',
    original_price: 650,
    current_price: 450,
    return_period: 14,
    delivery_date: '30 Oct 2025',
    rating: { stars: 4.2, count: 5200 },
    sizes: [4,7],
    stock: 1,
    description: `Good vibes only! 
      This beautiful teal bracelet is your daily reminder to take a deep breath. It's the perfect pop of color that effortlessly matches your style while keeping your peace close`,
  }),

   createItem({
    id: '009',
    images: ['/images/9/9.jpeg', '/images/9/9b.jpeg',],
    company: 'Classic',
    item_name: 'Teal Serenity Bracelet',
    original_price: 650,
    current_price: 500,
    return_period: 14,
    delivery_date: '31 Oct 2025',
    rating: { stars: 4.2, count: 5200 },
  
    stock: 1,
    description: `Good vibes only! 
      This beautiful teal bracelet is your daily reminder to take a deep breath. It's the perfect pop of color that effortlessly matches your style while keeping your peace close`,
  }),

   createItem({
    id: '010',
    images: ['/images/10/10.jpeg', '/images/10/10b.jpeg',],
    company: 'Classic',
    item_name: 'Teal Serenity Bracelet',
    original_price: 650,
    current_price: 500,
    return_period: 14,
    delivery_date: '31 Oct 2025',
    rating: { stars: 4.2, count: 5200 },
   
    stock: 1,
    description: `Good vibes only! 
      This beautiful teal bracelet is your daily reminder to take a deep breath. It's the perfect pop of color that effortlessly matches your style while keeping your peace close`,
  })
];
