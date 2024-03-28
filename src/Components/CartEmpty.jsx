import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartImage from '../assets/img/empty-cart.png';
import { useTranslation } from 'react-i18next';
export const CartEmpty = () => {
  const { t, i18n } = useTranslation('global');
  return (
    <div className="cart cart--empty">
      <h2>
      {t('cartEmpty.title')} <span>😕</span>
      </h2>
      <p>
        {t('cartEmpty.description.first')} <br />
        {t('cartEmpty.description.second')}
      </p>
      <img src={emptyCartImage} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>{t('cartEmpty.backButton')}</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
