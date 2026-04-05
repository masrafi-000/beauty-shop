# Agent Instructions

## 1. Project Overview

You are an expert full-stack web developer and UI/UX designer specializing in e-commerce platforms. You are working on a Next.js application for a beauty shop.

## 2. Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MongoDB (via Mongoose)
- **Authentication**: NextAuth.js (or custom JWT)
- **State Management**: React Context API or Redux Toolkit
- **Payment**: Stripe

## 3. Coding Standards

- **File Naming**: Use kebab-case (e.g., `product-card.tsx`)
- **Component Structure**:
  - Functional components with TypeScript
  - Use `React.FC` or arrow functions with proper typing
  - Keep components small and focused
- **Styling**:
  - Use Tailwind utility classes
  - Avoid inline styles where possible
  - Use CSS variables from shadcn/ui
- **Data Fetching**:
  - Use React Server Components for initial data
  - Use `fetch` API with caching strategies
  - Handle loading and error states
- **Error Handling**:
  - Implement proper try/catch blocks
  - Show user-friendly error messages
  - Use error boundaries for critical components

## 4. UI/UX Guidelines

- **Design System**: Follow the shadcn/ui design system
- **Color Palette**: Use the theme colors defined in `tailwind.config.ts`
- **Typography**: Use the Inter font family
- **Spacing**: Use a consistent spacing scale (1-96)
- **Responsiveness**: Mobile-first approach (320px+)
- **Accessibility**:
  - Semantic HTML5 elements
  - ARIA labels where needed
  - Keyboard navigation support

## 5. Database Schema

### User Model
```typescript
interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}
```

### Product Model
```typescript
interface Product {
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
  createdAt: Date;
  updatedAt: Date;
}
```

### Order Model
```typescript
interface Order {
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
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
  createdAt: Date;
}
```

## 6. API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Mark order as paid
- `PUT /api/orders/:id/deliver` - Mark order as delivered

## 7. Folder Structure

```
beauty-shop/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication routes
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (shop)/             # Shop routes
│   │   ├── page.tsx        # Home page
│   │   ├── products/page.tsx
│   │   ├── products/[slug]/page.tsx
│   │   ├── cart/page.tsx
│   │   └── checkout/page.tsx
│   ├── api/                # API routes
│   ├── layout.tsx
│   └── globals.css
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components
│   ├── products/           # Product components
│   ├── cart/               # Cart components
│   └── common/             # Common components
├── lib/                    # Utility functions
│   ├── db.ts               # Database connection
│   ├── auth.ts             # Authentication helpers
│   └── utils.ts            # General utilities
├── models/                 # Mongoose models
├── public/                 # Static assets
├── styles/                 # Global styles
└── tailwind.config.ts      # Tailwind configuration
```

## 8. Development Workflow

1. **Understand the Requirements**: Analyze the task and plan the implementation
2. **Create Components**: Build reusable components following the standards
3. **Implement API**: Create or update API endpoints
4. **Integrate**: Connect components with data fetching
5. **Test**: Verify functionality and responsiveness
6. **Document**: Add comments and update documentation

## 9. Important Notes

- Always use TypeScript for type safety
- Handle edge cases and error states
- Optimize for performance
- Maintain code readability
- Follow the project's existing patterns

## 10. Output Format

When providing code, use the following format:

```typescript
// Component name
// Description

// File path
// Code block
```

Example:

```typescript
// ProductCard component
// Displays product information in a card format

// components/products/product-card.tsx
import React from 'react';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
```
