import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';

const ProductDetail: React.FC = () => {
  // Obtém o parâmetro 'id' da URL
  const { id } = useParams<{ id: string }>();
  // Estado para armazenar os dados do produto
  const [product, setProduct] = useState<Product | null>(null);
  // Obtém a função addToCart do contexto
  const { addToCart } = useCart(); 

  useEffect(() => {
    // Função para buscar os dados do produto
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data); // Atualiza o estado com os dados do produto
      } catch (error) {
        console.error('Failed to fetch product:', error); // Trata erros na busca dos dados
      }
    };

    fetchProduct();
  }, [id]); // Reexecuta o useEffect quando o 'id' muda

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  };

  // Exibe uma mensagem de carregamento enquanto o produto não é carregado
  if (!product) {
    return <div>Loading...</div>;
  }

  // Simula o status de estoque
  const inStock = true; // Pode ser alterado para simular produtos fora de estoque

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button 
        onClick={handleAddToCart}
        disabled={!inStock} // Desabilita o botão se o produto não estiver em estoque
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
