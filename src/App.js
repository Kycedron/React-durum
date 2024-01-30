import './scss/app.scss';

import Header from './Components/Header';		
import Categories from './Components/Categories';			
import Sort from './Components/Sort';		
import DurumBlock from './Components/DurumBlock';			
import Footer from './Components/Footer/Footer';
import Swiper from './Components/SwiperComp';



function App() {
  return (
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div id="root">
		<div className="wrapper">
			<Header/>
			<Swiper/>
			<div className="content">
				<div className="container">
					<div className="content__top">
					<Categories/>
					<Sort/>
					</div>
					<h2 className="content__title">Все durumы</h2>
					<div className="content_items">
						<DurumBlock/>
						<DurumBlock/>
						<DurumBlock/>
						<DurumBlock/>
						<DurumBlock/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer/>
</body>
  );
}

export default App;
