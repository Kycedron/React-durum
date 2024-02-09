import React from 'react'

const Cart = () => {
  return (
   <div class="content">
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы не заказывали ещё дурум.<br />
              Для того, чтобы заказать дурум, перейди на главную страницу.
            </p>
            <img src="/img/empty-cart.png" alt="Empty cart" />
            <a href="/" class="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      </div>
)};

export default Cart;