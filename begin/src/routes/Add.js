import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Add({ handlerAddProduct }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const addItem = (event) => {
    setForm((prevState) => {
      const newItem = {
        ...prevState,
        [event.target.name]: event.target.value,
      };
      return newItem;
    });
  };

  return (
    <>
      <h2>Add</h2>
      <form>
        <input
          value={form.name}
          type="text"
          name="name"
          onChange={addItem}
          placeholder="Name"
        />
        <br />
        <input
          value={form.quantity}
          type="number"
          name="quantity"
          min={1}
          onChange={addItem}
          placeholder="Product"
        />
        <br />
        <input
          value={form.price}
          type="number"
          min={0}
          step={0.01}
          name="price"
          onChange={addItem}
          placeholder="Price"
        />
        <br />
        <input
          value={form.discount}
          type="number"
          min={0}
          name="discount"
          onChange={addItem}
          placeholder="Discount"
        />
        <br />
        <br />
        <button
          onClick={() => {
            handlerAddProduct(form);
            navigate("/view");
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}
export default Add;
