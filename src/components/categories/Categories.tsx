import React from 'react';
import style from './categories.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type categoriesNameType = {
  categoriesName: string[];
  onClickCategory: (ind: number) => void;
};

const Categories: React.FC<categoriesNameType> = ({categoriesName, onClickCategory}) => {

  const categoryInd = useSelector((state: RootState) => state.filter.categoryInd);

  const categoriesBtn = categoriesName.map((name, ind) => {
  return <li 
    key={name} 
    className={categoryInd === ind ? style.activeCategory : ''}
    onClick={() => onClickCategory(ind)}
    >
      {name}
    </li>
})

  return (
    <ul className={style.wrap} >
      {categoriesBtn}
    </ul>
  )
}

export default Categories;