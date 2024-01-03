import React from 'react';
import style from './sort.module.scss';
import { SortPropertuEnum, setSortBy } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


type SortNamesType = {
    name: string;
    sortProperty: SortPropertuEnum
  };
  
  const sortNames: SortNamesType[]  = [
    {name: 'Popular: max-min', sortProperty: SortPropertuEnum.RATING_DESK },//'rating'
    {name: 'Popular: min-max', sortProperty: SortPropertuEnum.RATING_ASK },// '-rating'
    {name: 'Price: max-min', sortProperty: SortPropertuEnum.PRICE_DESK },// 'price'
    {name: 'Price: min-max', sortProperty: SortPropertuEnum.PRICE_ASK },// '-price'
    {name: 'Alphabet: Z-A', sortProperty: SortPropertuEnum.NAME_DESK },// 'name'
    {name: 'Alphabet: A-Z', sortProperty: SortPropertuEnum.NAME_ASK }// '-name'
  ];

const Sort = () => {

  const dispatch = useDispatch();
    const [sortOpen, setSortOpen] = React.useState(false);

    const sortBy = useSelector((state: RootState) => state.filter.sortType)

    const onSortActive = (obj: SortNamesType) => {
      dispatch(setSortBy(obj))
        setSortOpen(false);
    };

    React.useEffect(() => {
      const toggleSort = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.classList.contains('sortName')) {
          setSortOpen(false);
        } 
      };

      document.addEventListener('click', toggleSort );
  
      return () => {
        document.removeEventListener('click', toggleSort );
      };
    
    }, []);

    const sortItems = sortNames.map((obj, ind) => {
      return (
        <li 
          key={ind}
          className={obj.sortProperty === sortBy.sortProperty ?  style.active : ''} 
          onClick={() => onSortActive(obj)}
        >
          {obj.name}
        </li>
      )
    })

  return (
    <div className={style.sortWrap}>
      <div className={style.label}>
        <b>Sort by:</b>
        <span className="sortName" onClick={() => setSortOpen(!sortOpen)}>
          {sortBy.name}
        </span>
      </div>
      {sortOpen && (
        <div className={style.popap}>
          <ul>{sortItems}</ul>
        </div>
      )}
    </div>
  );
}

export default Sort