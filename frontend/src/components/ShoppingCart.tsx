import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import React, { useEffect, useState } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const response = await fetch("/games");
        const data = await response.json();
        setStoreItems(data);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    }

    fetchStoreItems();
  }, []);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return item ? <CartItem key={cartItem.id} {...cartItem} /> : null;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}