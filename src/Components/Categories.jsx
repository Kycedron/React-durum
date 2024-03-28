import React from 'react';
import { useTranslation } from 'react-i18next';

function Categories({ value, onChangeCategory }) {
  const [t] = useTranslation('global');
  const categories = [ 
  t('Categories.all'),
  t('Categories.meat'),
  t('Categories.vegetarian'),
  t('Categories.grill'),
  t('Categories.spicy'),
  t('Categories.closed')
];

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
