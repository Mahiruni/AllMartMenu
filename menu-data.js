window.ALL_MART_MENU = [
  {
    id: "breakfast",
    label: "Breakfast",
    group: "breakfast",
    kicker: "Morning favorites",
    description: "Comforting breakfasts, eggs, pancakes and classic ALL MART morning plates.",
    items: [
      { name: "Classic Omelet", price: 385, description: "Tomato, avocado, lettuce, onion and cheese.", popular: true, tags: ["Breakfast"] },
      { name: "Scrambled Eggs", price: 350, description: "Onion, tomato and chili." },
      { name: "Spanish Omelet", price: 360, description: "Onion, tomato, chili and fresh tomato salsa." },
      { name: "Fatira", price: 375, description: "Egg, beef, onion and chili." },
      { name: "Malawah", price: 335, description: "Served with honey.", tags: ["Sweet"] },
      { name: "Waffle", price: 530, description: "Fresh strawberries, banana and syrup.", popular: true, tags: ["Sweet"] },
      { name: "Butter Pancake", price: 420, description: "Served warm with syrup.", tags: ["Sweet"] },
      { name: "French Toast", price: 390, description: "Served with syrup.", tags: ["Sweet"] },
      { name: "Ful", price: 360, description: "Pimento, tomato, onion and awaze.", tags: ["Plant-forward"] },
      { name: "Special Ful", price: 455, description: "Egg, pimento, tomato, onion and awaze." }
    ]
  },
  {
    id: "healthy",
    label: "Healthy Corner",
    group: "breakfast",
    kicker: "Lighter choices",
    description: "Oat-based plates, fruit-forward toppings and balanced morning options.",
    items: [
      { name: "Oat Meal", price: 280, description: "Served with honey, flax powder, peanut and fruits.", tags: ["Oats"] },
      { name: "Oat Crepes", price: 360, description: "Served with honey, strawberry and banana.", tags: ["Oats"] },
      { name: "Oat Pancake", price: 350, description: "Served with honey.", tags: ["Oats"] },
      { name: "Oat Waffle", price: 530, description: "Served with honey, strawberry and banana.", tags: ["Oats"] },
      { name: "Oat Pizza", price: 1040, description: "Choice of five toppings: tuna, capsicum, zucchini, eggplant, sweet corn, tomato, beef, chicken, mozzarella or cheese.", tags: ["Oats"] }
    ]
  },
  {
    id: "salads",
    label: "Salads",
    group: "mains",
    kicker: "Fresh & crisp",
    description: "Colorful salads prepared with vegetables, herbs and house-style dressings.",
    items: [
      { name: "ALL MART Mixed Salad", price: 360, description: "Lettuce, onion, tomato, carrot, cucumber, fresh herbs and Italian dressing.", tags: ["Fresh"] },
      { name: "Chicken Caesar Salad", price: 655, description: "Chicken, lettuce, tomato, cucumber, fresh herbs, croutons and Caesar dressing.", popular: true },
      { name: "Tuna Salad", price: 450, description: "Tuna, lettuce, tomato, cucumber, fresh herbs, croutons and Caesar dressing." },
      { name: "Fruit Salad", price: 300, description: "A fresh selection of seasonal fruit.", tags: ["Fruit"] }
    ]
  },
  {
    id: "pizza",
    label: "Pizza",
    group: "pizza",
    kicker: "From the oven",
    description: "Generous pizzas with classic tomato sauce, mozzarella and satisfying toppings.",
    items: [
      { name: "ALL MART Special Pizza", prices: { Large: 1040, Small: 660 }, description: "Tomato sauce, mozzarella, chicken, beef, onion, chili, oregano, tuna and meat.", popular: true, tags: ["House special"] },
      { name: "Vegetable Pizza", prices: { Large: 624, Small: 420 }, description: "Tomato sauce, seasonal vegetables and oregano.", tags: ["Vegetable"] },
      { name: "Tuna Pizza", prices: { Large: 912, Small: 564 }, description: "Tomato sauce, seasonal vegetables, mozzarella and oregano." },
      { name: "Chicken Pizza", prices: { Large: 882, Small: 564 }, description: "Tomato sauce, mozzarella, chicken strips, green pepper, onion and oregano." },
      { name: "Beef Pizza", prices: { Large: 768, Small: 444 }, description: "Tomato sauce, mozzarella, beef, onion, chili and oregano." },
      { name: "Margherita Pizza", prices: { Large: 666, Small: 552 }, description: "Tomato sauce, mozzarella, olive and oregano.", tags: ["Classic"] },
      { name: "Meat Lovers Pizza", prices: { Large: 804, Small: 432 }, description: "Tomato sauce, mozzarella, beef, chicken, tuna and oregano." },
      { name: "ALL MART Pizza with Vegetable, Tuna & Cheese", prices: { Large: 822, Small: 552 }, description: "Tuna, cheese, onion, chili, black olive and mushroom." }
    ]
  },
  {
    id: "burgers",
    label: "Burgers & Sandwiches",
    group: "pizza",
    kicker: "Handheld favorites",
    description: "Burgers, panini, sandwiches and satisfying sides made for an easy lunch or dinner.",
    items: [
      { name: "Chicken Burger", price: 750, description: "Lettuce, tomato, onion and chicken." },
      { name: "ALL MART Burger", price: 630, description: "Lettuce, tomato and onion." },
      { name: "ALL MART Cheese Burger", price: 750, description: "Lettuce, tomato, onion and cheese.", popular: true },
      { name: "ALL MART Special Double Burger", price: 1080, description: "A double burger with lettuce, tomato, onion and cheese.", tags: ["House special"] },
      { name: "Club Sandwich with Tuna", price: 594, description: "Classic club-style sandwich with tuna." },
      { name: "Classic Club Sandwich", price: 636, description: "ALL MART's classic club sandwich." },
      { name: "Grilled Chicken Panini", price: 670, description: "Grilled chicken served panini-style." },
      { name: "Tuna Sandwich", price: 605, description: "A hearty tuna sandwich." },
      { name: "Egg Sandwich", price: 265, description: "Simple and satisfying egg sandwich." },
      { name: "French Fries", price: 265, description: "Golden, crisp fries.", tags: ["Side"] },
      { name: "Vegetable Sandwich", price: 200, description: "A light vegetable-filled sandwich.", tags: ["Vegetable"] },
      { name: "Chicken or Beef Fajita", price: 750, description: "Choose chicken or beef." },
      { name: "Steak & Cheese Panini", price: 650, description: "Steak and cheese in a warm panini." }
    ]
  },
  {
    id: "daily-specials",
    label: "Daily Specials",
    group: "mains",
    kicker: "Kitchen specials",
    description: "Sambusa, pasta and comforting plates designed for a satisfying everyday meal.",
    items: [
      { name: "Meat Sambusa", price: 345, description: "Three crisp meat-filled sambusas served with sweet and sour sauce." },
      { name: "Lentil Sambusa", price: 315, description: "Three crisp lentil-filled sambusas served with sweet and sour sauce.", tags: ["Lentil"] },
      { name: "Shiro", price: 320, description: "A comforting traditional-style shiro plate.", tags: ["Plant-forward"] },
      { name: "Spaghetti with Tomato Sauce", price: 420, description: "Onion, tomato, tomato paste, berbere, black pepper, rosemary and garlic." },
      { name: "Spaghetti with Vegetables", price: 455, description: "Onion, carrot, zucchini, abeba gomen, eggplant, cabbage, garlic, rosemary and black pepper.", tags: ["Vegetable"] },
      { name: "Spaghetti Bolognese", price: 535, description: "Tomato, onion, mixed meat, garlic and rosemary." },
      { name: "Spaghetti with Tuna", price: 575, description: "Onion, tomato, tuna and chili." }
    ]
  },
  {
    id: "shawarma",
    label: "Shawarma",
    group: "mains",
    kicker: "Warm & savory",
    description: "Juicy chicken, creamy garlic sauce and cabbage wrapped in warm pita bread.",
    items: [
      { name: "Special Shawarma", price: 780, description: "Two warm pita breads cut into six small pieces, creamy garlic sauce, cabbage and juicy chicken.", popular: true, tags: ["House special"] },
      { name: "Shawarma", price: 590, description: "One warm pita bread cut into four small pieces, creamy garlic sauce, cabbage and juicy chicken." }
    ]
  },
  {
    id: "fresh-juice",
    label: "Fresh Juice & Smoothies",
    group: "drinks",
    kicker: "Freshly poured",
    description: "Fruit juices and smoothies for a bright, refreshing finish.",
    items: [
      { name: "Mango Juice", price: 300, description: "Fresh mango juice.", tags: ["Fresh"] },
      { name: "ALL MART Special Juice", price: 320, description: "ALL MART's signature house juice.", popular: true, tags: ["House special"] },
      { name: "Papaya Juice", price: 175, description: "Fresh papaya juice." },
      { name: "Avocado Juice", price: 195, description: "Creamy avocado juice." },
      { name: "Cocktail Juice", price: 280, description: "A refreshing mixed-fruit cocktail." },
      { name: "Strawberry Smoothie", price: 280, description: "Creamy strawberry smoothie." },
      { name: "Strawberry Juice", price: 235, description: "Fresh strawberry juice." }
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    group: "desserts",
    kicker: "Something sweet",
    description: "Cakes, pastries, cookies and bakery favorites for the final course — or the first.",
    items: [
      { name: "Black Forest Cake", price: 180 },
      { name: "Chocolate Croissant", price: 110 },
      { name: "Cinnamon Roll", price: 65 },
      { name: "Cheesecake", price: 200 },
      { name: "Chocolate Brownies", price: 130, popular: true },
      { name: "Opera Cake", price: 200 },
      { name: "Cream Puff", price: 95 },
      { name: "Milifoni", price: 170 },
      { name: "Tiramisu", price: 160 },
      { name: "Strawberry Cream Cake", price: 180 },
      { name: "Apple Pie", price: 180 },
      { name: "Marble Cake", price: 115 },
      { name: "Bonbolino", price: 90 },
      { name: "Plain Croissant", price: 105 },
      { name: "Tiramisu Cup Cake", price: 130 },
      { name: "Barley / Peanut / Whole Grain Cookies", price: 85 },
      { name: "Oat Biscuits", price: 85 },
      { name: "Fasting Caramel", price: 110 },
      { name: "Banana Cake", price: 120 },
      { name: "Caramel Cake", price: 200 },
      { name: "White Forest", price: 180 },
      { name: "Rich Chocolate Cake", price: 200 }
    ]
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    group: "drinks",
    kicker: "Coffee & tea",
    description: "Espresso, tea and warming cafe classics for any time of day.",
    items: [
      { name: "Macchiato", price: 100 },
      { name: "Double Macchiato", price: 175 },
      { name: "Fasting Macchiato", price: 115 },
      { name: "Double Fasting Macchiato", price: 210 },
      { name: "Coffee", price: 85 },
      { name: "Espresso", price: 90 },
      { name: "Americano", price: 100 },
      { name: "Latte", price: 110 },
      { name: "Cappuccino", price: 135, popular: true },
      { name: "ALL MART Latte with Tea", price: 115 },
      { name: "Hot Chocolate", price: 115 },
      { name: "Tea", price: 40 },
      { name: "Flavored Tea", price: 65 },
      { name: "Lemon Tea", price: 75 },
      { name: "Special Tea", price: 125 },
      { name: "Latte with Coffee", price: 125 },
      { name: "Banatu Macchiato", price: 138 },
      { name: "Lewz Tea", price: 100 },
      { name: "Keshir", price: 75 },
      { name: "Spris", price: 80 },
      { name: "Iced Latte", price: 288 },
      { name: "Iced Caramel Latte", price: 385, popular: true }
    ]
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    group: "drinks",
    kicker: "Chilled refreshment",
    description: "Soft drinks, sparkling water and chilled bottled refreshments.",
    items: [
      { name: "Soft Drinks", price: 110 },
      { name: "Ambo / Flavored Ambo", price: 65 },
      { name: "Water 500ml", price: 40 },
      { name: "Water 2L", price: 75 },
      { name: "Coca-Cola Bottle", price: 66 },
      { name: "Water 1L", price: 55 },
      { name: "Novida", price: 65 },
      { name: "The Original Marathon Ginger Beer & Tonic Water 330ml", price: 65 }
    ]
  }
];

window.ALL_MART_FEATURED = [
  {
    section: "pizza",
    item: "ALL MART Special Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=82",
    alt: "Fresh pizza with melted cheese and toppings"
  },
  {
    section: "burgers",
    item: "ALL MART Cheese Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=82",
    alt: "Juicy cheeseburger served with fresh toppings"
  },
  {
    section: "shawarma",
    item: "Special Shawarma",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=82",
    alt: "Warm savory filled wraps served on a plate"
  }
];
