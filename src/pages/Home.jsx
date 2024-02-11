import React from 'react';
import Categories from '../Components/Categories.jsx';
import Sort from '../Components/Sort.jsx';
import DurumBlock from '../Components/DurumBlock/index.jsx';
import Skeleton from '../Components/DurumBlock/skeleton.jsx';
import Swiper from '../Components/SwiperComp.jsx';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    const onChangeCategory = React.useCallback((id, obj) => {
        setCategoryId(id);
        console.log(categoryId)
    }, []);
    
    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://65c4eaa7dae2304e92e3a51e.mockapi.io/items?${categoryId>0?`category=${categoryId}`:''}&sortBy=${sortType.sortProperty}&order=desc`
        )
            .then((res) => res.json())
            .then((arr) => {
                console.log(arr);
                setItems(arr);
                setIsLoading(false);
            })

        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    console.log(categoryId, sortType);
    

    return (
        <div className="container">
            <Swiper />
            <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort value={sortType}
                    onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все durumы</h2>
            <div className="content__items">
            {isLoading 
                    ? [...new Array(6)].map(( index) => <Skeleton key={index} />) 
                    : items.map((obj) => <DurumBlock key={obj.id} {...obj} />)
                    
                }
            </div>
        </div>
    );
};

export default Home;
