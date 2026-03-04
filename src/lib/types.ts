export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
