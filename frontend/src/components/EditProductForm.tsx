import React, { useState } from "react";

type EditProductFormProps = {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
  };
  onSave: (updatedProduct: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
  }) => void;
  onCancel: () => void;
};

export function EditProductForm({
  product,
  onSave,
  onCancel,
}: EditProductFormProps) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
	onSave({
	  id: product.id,
	  name,
	  price,
	  quantity,
	  imgUrl,
	});
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label className="form-label">Nazwa produktu</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Cena</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ilość</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">URL zdjęcia</label>
        <input
          type="text"
          className="form-control"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary me-2">
          Zapisz zmiany
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Anuluj
        </button>
      </div>
    </form>
  );
}
