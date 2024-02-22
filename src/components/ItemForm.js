import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({name: '', category: 'produce', id:uuid()})

  function handleFormDataChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  console.log(formData)

  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit(formData)}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormDataChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormDataChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
