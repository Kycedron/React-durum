import './scss/app.scss';

import Header from './Components/Header';		
import Categories from './Components/Categories';			
import Sort from './Components/Sort';		
import DurumBlock from './Components/DurumBlock';			
import Footer from './Components/Footer/Footer';


function App() {
  return (
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div id="root">
		<div class="wrapper">
			<Header/>
			<div class="content">
				<div class="container">
					<div class="content__top">
					<Categories/>
					<Sort/>
					</div>
					<h2 class="content__title">Все durumы</h2>
					<div class="content_items">
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
