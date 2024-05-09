import React, { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        {/* Add more options as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
