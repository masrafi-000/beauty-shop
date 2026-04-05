import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';

interface WishlistState {
  items: Product[];
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleItem: (product) => {
        const currentItems = get().items;
        const exists = currentItems.some((item) => item._id === product._id);

        if (exists) {
          set({ items: currentItems.filter((item) => item._id !== product._id) });
        } else {
          set({ items: [...currentItems, product] });
        }
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item._id === productId);
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'beauty-shop-wishlist',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
