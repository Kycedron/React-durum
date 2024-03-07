import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'мясныe', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, id) => (
          <li key={id} onClick={() => onChangeCategory(id)} className={value === id ? 'active' : ''}>

          {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
