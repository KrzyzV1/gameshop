import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem, Game } from "../components/StoreItem";
import { EditProductForm } from "../components/EditProductForm";
import { getGames, updateGame, deleteGame } from "../api/GameService";
import { useAuth } from "../context/AuthContext";

export function Store() {
  const [games, setGames] = useState<Game[]>([]);
  const [editingGame, setEditingGame] = useState<Game | null>(null);
  const { userRole } = useAuth();

  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleEditGame = (game: Game) => {
    setEditingGame(game);
  };

  const handleUpdateGame = async (updatedGame: Game) => {
    try {
      const { id, ...gameData } = updatedGame;
      await updateGame(id, gameData);
      setGames((prevGames) =>
        prevGames.map((game) =>
          game.id === updatedGame.id ? updatedGame : game
        )
      );
      setEditingGame(null);
    } catch (error) {
      console.error("Failed to update game:", error);
    }
  };

  const handleDeleteGame = async (id: number) => {
    try {
      await deleteGame(id);
      setGames((prevGames) => prevGames.filter((game) => game.id !== id));
    } catch (error) {
      console.error("Failed to delete game:", error);
    }
  };

  return (
    <div>
      {editingGame ? (
        <EditProductForm
          product={editingGame}
          onSave={handleUpdateGame}
          onCancel={() => setEditingGame(null)}
        />
      ) : (
        <Row md={3} xs={1} lg={4} className="g-4">
          {games.map((game) => (
            <Col key={game.id}>
              <StoreItem
                {...game}
                onEdit={userRole === "admin" ? handleEditGame : undefined}
                onDelete={userRole === "admin" ? handleDeleteGame : undefined}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
