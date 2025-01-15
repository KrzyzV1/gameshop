import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { getGames } from "../api/GameService";

type Game = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function Store() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div>
      <Row md={3} xs={1} lg={4} className="g-4">
        {games.map(game => (
          <Col key={game.id}>
            <StoreItem {...game} />
          </Col>
        ))}
      </Row>
    </div>
  );
  }