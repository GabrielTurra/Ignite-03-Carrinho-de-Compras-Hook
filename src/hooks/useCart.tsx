import { createContext, ReactNode, useContext, useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const prevCartRef = useRef<Product[]>();
  
  useEffect(() => {
    prevCartRef.current = cart;
  }, []);

  const cartPreviousValue = prevCartRef.current ?? cart;

  useEffect(() => {
    if(cartPreviousValue !== cart){
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviousValue]);

  const addProduct = async (productId: number) => {
    try {
      const currentCart = [...cart];
      const hasProduct = cart.find(item => item.id === productId) || false;

      const stockProduct = await api.get(`/stock/${productId}`)
      .then(response => response.data.amount);

      const amount = hasProduct ? hasProduct.amount : 0;

      if(stockProduct <= amount){
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if(hasProduct){
        hasProduct.amount += 1;
      }
      else{
        const productAPI = await api.get(`/products/${productId}`)
        .then(response => response.data);

        const newProduct = {
          ...productAPI, 
          amount: 1
        }
        currentCart.push(newProduct);
      }

      setCart(currentCart);

    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const currentCart = [...cart];
      const productIndex = currentCart.findIndex(item => item.id === productId);

      if(productIndex >= 0){
        currentCart.splice(productIndex, 1);
        setCart(currentCart);     
      }
      else{
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount <= 0){
        return;
      }
      
      const stockProduct = await api.get(`/stock/${productId}`)
      .then(response => response.data.amount);

      if(amount > stockProduct){
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const currentCart = [...cart];
      const product = currentCart.find(product => product.id === productId);
      
      if(product){
        product.amount = amount;
        setCart(currentCart);
      }
      else{
        throw Error();
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
