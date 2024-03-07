import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice.js';
import Categories from '../Components/Categories.jsx';
import Sort from '../Components/Sort.jsx';
import DurumBlock from '../Components/DurumBlock/index.jsx';
import Skeleton from '../Components/DurumBlock/skeleton.jsx';
import Swiper from '../Components/SwiperComp.jsx';
import Pagination from '../Pagination';
import { SearchContext } from '../App.js';

const Home = () => {

  const dispatch = useDispatch();
  const { categoryId, currentPage } = useSelector((state) => state.filter);
  const sortType = useSelector((state) => state.filter.sort.sortProperty); // Вероятно, это было имелось в виду

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (Id) => {
    dispatch(setCategoryId(Id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const sortby = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    axios
      .get(
        `https://65c4eaa7dae2304e92e3a51e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortby}&order=${order}&${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
    
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (window.location.search){
      FetchDurum(); 
    }
  }, []) /
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType,
      categoryId,
      currentPage,
    });

  }, [categoryId, sortType, currentPage]);

  const durums = Array.isArray(items)
    ? items.map((obj) => <DurumBlock key={obj.Id} {...obj} />)
    : null;

  const skeletons = [...new Array(6)].map((index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <Swiper />
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все durumы</h2>
      <div className="content__items">{isLoading ? skeletons : durums}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
