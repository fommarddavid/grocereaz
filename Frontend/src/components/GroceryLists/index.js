import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import image from '../../assets/images/V2/salad-1.png';
import FormStyle from '../../styles/FormStyle';

const GroceryLists = ({
  groceryLists,
  saveSelectedId,
  deleteList,
}) => {
  const handleClick = (id) => {
    saveSelectedId(id);
    deleteList();
  };
  // console.log(groceryLists);
  return (
    <FormStyle>
      <section className="content-part">
        <h2>My shopping lists</h2>
        <div className="list grocery-lists">
          {groceryLists.map((list) => (
            <div className="grocery-item" key={list.id}>
              <div>
                <Link to={`/grocery-lists/${list.id}`}>
                  <Icon
                    link
                    name="eye"
                  />
                </Link>
                {list.title}
              </div>
              <Icon
                link
                name="trash"
                onClick={() => handleClick(list.id)}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A salad"
            className="image-size"
          />
        </div>
      </section>
    </FormStyle>
  );
};

GroceryLists.propTypes = {
  groceryLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  saveSelectedId: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
};

export default GroceryLists;
