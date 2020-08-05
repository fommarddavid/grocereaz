import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import FormStyle from '../../styles/FormStyle';
import image from '../../assets/images/V2/salad-2.png';


const GroceryList = ({
  selectedId,
  saveSelectedId,
  loadIngredients,
  ingredientsList,
}) => {
  useEffect(() => {
    saveSelectedId(selectedId);
    loadIngredients();
  }, [selectedId, saveSelectedId, loadIngredients]);

  const shoppingList = JSON.parse(sessionStorage.getItem('shoppingList'));
  // const { shoppingList } = userDatas;
  const { title } = shoppingList.find((list) => (selectedId === list.id));
  return (
    <FormStyle>
      <section className="content-part">
        <h2>{title}</h2>
        <div className="list ingredients-list">
          {ingredientsList.map((ingredient) => (
            <Checkbox
              className="ingredient-item"
              key={ingredient.id}
              label={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
            />
          ))}
        </div>
      </section>
      <section className="picture-part">
        <div className="image">
          <img src={image} alt="A greek salad." className="image-size" />
        </div>
      </section>
    </FormStyle>
  );
};

GroceryList.propTypes = {
  selectedId: PropTypes.number.isRequired,
  saveSelectedId: PropTypes.func.isRequired,
  loadIngredients: PropTypes.func.isRequired,
  ingredientsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default GroceryList;
