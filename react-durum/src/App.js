
import './scss/app.scss';

function App() {
  return (
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div id="root">
		<div class="wrapper">
			<div class="header">
				<div class="container">
					<a href="/">
						<div class="header__logo">
							<img width="38" src="/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="Pizza logo" />
							<div>
								<h1>React durum</h1>
								<p>самая вкусный durum во вселенной</p>
							</div>
						</div>
					</a>
					<div class="Search_root__eiX89">
						<svg class="Search_icon__XMmYc" enable-background="new 0 0 32 32" id="EditableLine" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
							<line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"></line>
						</svg>
						<input class="Search_input__klILD" placeholder="Поиск пиццы..." value="" />
					</div>
					<div class="header__cart">
						<a class="button button--cart" href="/cart">
							<span>0 ₽</span>
							<div class="button__delimiter"></div>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
									stroke="white"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
									stroke="white"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
									stroke="white"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
							<span>0</span>
						</a>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="container">
					<div class="content__top">
						<div class="categories">
							<ul>
								<li class="active">Все</li>
								<li class="">Мясные</li>
								<li class="">Вегетарианские</li>
								<li class="">Гриль</li>
								<li class="">Острые</li>
								<li class="">Закрытые</li>
							</ul>
						</div>
						<div class="sort">
							<div class="sort__label">
								<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
										fill="#2C2C2C"
									></path>
								</svg>
								<b>Сортировка по:</b><span>популярности</span>
							</div>
						</div>
					</div>
					<h2 class="content__title">Все durumы</h2>
					<div class="content__error-info">
						<h2>Произошла ошибка 😕</h2>
						<p>К сожалению, не удалось получить durumсы. Попробуйте повторить попытку позже.</p>
					</div>
					<ul class="Pagination_root__uwB0O">
						<li class="previous disabled"><a class=" " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">&lt;</a></li>
						<li class="selected"><a rel="canonical" role="button" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a></li>
						<li><a rel="next" role="button" tabindex="0" aria-label="Page 2">2</a></li>
						<li><a role="button" tabindex="0" aria-label="Page 3">3</a></li>
						<li class="next"><a class="" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">&gt;</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
  );
}

export default App;
