import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGameById } from '../api/GameService';
import { Container, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useAuth } from '../context/AuthContext';

type Game = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
  rating: number;
  description: string;
  tags: string;
};

export function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const navigate = useNavigate();
  const { increaseCartQuantity } = useShoppingCart();
  const { userRole } = useAuth();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await getGameById(Number(id));
        setGame(data);
      } catch (error) {
        console.error('Failed to fetch game:', error);
      }
    };
    fetchGame();
  }, [id]);

  const handleAddToCart = () => {
    if (game) {
      increaseCartQuantity(game.id);
      navigate('/');
    }
  };

  if (!game) return <div>Ładowanie...</div>;

  return (
    <Container className="mt-5">
      <h1>{game.name}</h1>
      <img
	  src={game.imgUrl}
	  alt={game.name}
	  style={{ maxWidth: '100%', height: '450px', objectFit: 'cover'}}
	  />
      <p><strong>Cena:</strong> {formatCurrency(game.price)}</p>
      <p><strong>Dostępna ilość:</strong> {game.quantity}</p>
      <p><strong>Ocena:</strong> {game.rating}</p>
      <p><strong>Opis:</strong> {game.description}</p>
      <p><strong>Tagi:</strong> {game.tags}</p>
      <div className="d-flex gap-2">
        <Button variant="primary" onClick={() => navigate(-1)}>
          Powrót do sklepu
        </Button>
        {userRole !== "admin" && (
          <Button variant="success" onClick={handleAddToCart}>
            + Add To Cart
          </Button>
        )}
      </div>
    </Container>
  );
}
