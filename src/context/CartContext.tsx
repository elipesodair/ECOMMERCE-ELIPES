import React, { createContext, useContext, useState } from 'react';
import { CartItem } from '../types/CartItem';

// Define o tipo do contexto do carrinho de compras
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

// Cria o contexto com valor inicial indefinido
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto do carrinho, que gerencia o estado do carrinho e fornece funções para modificá-lo
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Adiciona um item ao carrinho ou atualiza a quantidade se o item já estiver no carrinho
  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  // Remove um item do carrinho com base no id
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Atualiza a quantidade de um item no carrinho
  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    // Fornece o contexto para os componentes filhos
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acessar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
