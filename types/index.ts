export type Role = 'admin' | 'user';

export interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: Role;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  numReviews: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  _id: string;
  user: string;
  orderItems: Array<{
    product: string;
    name: string;
    qty: number;
    image: string;
    price: number;
  }>;
  shippingAddress: string;
  paymentMethod: string;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string | Date;
  isDelivered: boolean;
  deliveredAt?: string | Date;
  createdAt?: string | Date;
}
