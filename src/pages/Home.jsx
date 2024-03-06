import React from 'react';
import Categories from '../Components/Categories.jsx';
import Sort from '../Components/Sort.jsx';
import DurumBlock from '../Components/DurumBlock/index.jsx';
import Skeleton from '../Components/DurumBlock/skeleton.jsx';
import Swiper from '../Components/SwiperComp.jsx';
import Pagination from '../Pagination';

export const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const onChangeCategory = React.useCallback((id, obj) => {
    setCategoryId(id);
    console.log(categoryId);
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    const sortby = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    fetch(
      `https://65c4eaa7dae2304e92e3a51e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortby}&order=${order}&${search}`,
    ) 
    
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue,currentPage]);

  console.log(categoryId, sortType);

  const durums = Array.isArray(items) ? items.map((obj) => <DurumBlock key={obj.id} {...obj} />) : null;

  const skeletons = [...new Array(6)].map((index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <Swiper />
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все durumы</h2>
      <div className="content__items">{isLoading ? skeletons : durums}</div>
      <Pagination onChangePage={number => setCurrentPage(number)}/>
    </div>
  );
};

export default Home;
