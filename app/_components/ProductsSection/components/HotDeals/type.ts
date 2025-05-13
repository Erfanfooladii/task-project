enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  HomeKitchen = "Home & Kitchen",
  Books = "Books",
  ToysGames = "Toys & Games",
  Beauty = "Beauty & Personal Care",
  Sports = "Sports & Outdoors",
  Automotive = "Automotive",
  Grocery = "Grocery",
}
interface Discount {
  percentage: number;
  discountedPrice: number;
  hasDiscount: boolean;
}

export interface HotDealsType {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: Discount;
  category: ProductCategory;
  image: string;
  rating: number;
  stock: number;
}
