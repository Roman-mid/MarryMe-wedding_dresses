import React from 'react'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import DressBlock from '../components/dressBlock/DressBlock';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import { setCategoryInd } from '../redux/filterSlice';
import SceletonItem from '../components/sceletonItem/SceletonItem';
import { fetchDresses } from '../redux/dressesSlice';
import style from './styles/shop.module.scss';

const categoriesName = ['All', 'Lush', 'Beach', 'Short', 'Strait'];

const Shop: React.FC = () => {

    const dispatch = useAppDispatch();

    const {items, status} = useSelector((state: RootState) => state.dresses);
    const categoryInd = useSelector((state: RootState) => state.filter.categoryInd);
    const sortType = useSelector((state: RootState) => state.filter.sortType);

    const dresses = items.map((obj, ind) => <DressBlock key={obj.id} {...obj} />);

    const sceleton = [...new Array(3)].map((_, ind) => {
        return <SceletonItem key={ind} />
    });

    const onClickCategory = (ind: number) => {
        dispatch(setCategoryInd(ind))
    };

    const getDresses = () => {
        const category = categoryInd > 0 ? `category=${categoryInd}` : '';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    
        dispatch(fetchDresses({ category, sortBy, order }));
    };
    
    React.useEffect(() => {
        getDresses()
    }, [categoryInd, sortType.sortProperty]);

    if(status === 'error') {
        return <div className="erroeWrap">
            <h1>Something was wrong</h1>
        </div>
    }

  return (
    <section className="lastSection">
        <div className="container">
            <h1>Shop</h1>
            <Categories categoriesName={categoriesName} onClickCategory={onClickCategory}/>
            <div className={style.filterWrap}>
                <h2 className={style.categoryTitle}>{categoriesName[categoryInd]} dresses</h2>
                <Sort />
            </div>
            <div className={style.itemsWrap}>
                {status === 'loading' ? sceleton : dresses}
            </div>
        </div>
    </section>
  )
};

export default Shop;