import React from 'react'
import Categories from '../Components/Categories.jsx';
import Sort from '../Components/Sort.jsx';
import DurumBlock from '../Components/DurumBlock/index.jsx';
import Skeleton from '../Components/DurumBlock/skeleton.jsx';
import Swiper from '../Components/SwiperComp.jsx';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const[isLoading,setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
  
      fetch('https://65c4eaa7dae2304e92e3a51e.mockapi.io/items')
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
    }, []);
  
  return (
   <>
   <Swiper />
       <div className="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 className="content__title">Все durumы</h2>
              <div className="content_items">
              {isLoading 
				? [... new Array(6)].map((_, index) =><Skeleton/>)
				 : items.map((obj) => <DurumBlock key ={obj.id}{...obj} />)}
              </div>
   </>
  )
}
export default Home;