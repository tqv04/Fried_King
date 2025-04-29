interface PostType {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  price: string;
  rating: number;
  time: string;
}

interface CateType {
  id: number;
  name: string;
  quanity: string;
  imageUrl: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
