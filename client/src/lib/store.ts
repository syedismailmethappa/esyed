import { create } from 'zustand';
import { Product } from './mock';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  total: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (product) => {
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }], isOpen: true };
    });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  total: () => {
    const items = get().items;
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));

interface AuthState {
  user: {
    id: string;
    name: string;
    email: string;
    role: 'customer' | 'seller' | 'admin';
  } | null;
  login: (role?: 'customer' | 'seller' | 'admin') => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (role = 'customer') =>
    set({
      user: {
        id: '1',
        name: 'Demo User',
        email: 'demo@lumina.com',
        role,
      },
    }),
  logout: () => set({ user: null }),
}));
