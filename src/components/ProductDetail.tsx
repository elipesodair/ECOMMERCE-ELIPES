import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/Product';
import '../styles/ProductDetail.css';

const ProductDetail: React.FC = () => {
  // Obtém o ID do produto a partir dos parâmetros da URL
  const { id } = useParams<{ id: string }>();
  
  // Estado para armazenar os dados do produto
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Função assíncrona para buscar os dados do produto
    const fetchProduct = async () => {
      try {
        // Faz a requisição para a API para obter os dados do produto
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: Product = await response.json();
        // Atualiza o estado com os dados do produto
        setProduct(data);
      } catch (error) {
        // Exibe um erro no console se a requisição falhar
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Dependência para atualizar os dados quando o ID muda

  // Exibe uma mensagem de carregamento enquanto os dados não são carregados
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      {/* Exibe a imagem do produto */}
      <img src={product.image} alt={product.title} />
      {/* Exibe o título do produto */}
      <h2>{product.title}</h2>
      {/* Exibe a descrição do produto */}
      <p>{product.description}</p>
      {/* Exibe o preço do produto formatado */}
      <p className="price">${product.price.toFixed(2)}</p>
      {/* Exibe o status de estoque do produto */}
      <p className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      {/* Botão para adicionar o produto ao carrinho */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
