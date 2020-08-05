// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

// == Import
import RecipeCard from '../../containers/Home/RecipeCard';
import Modal from '../../containers/Home/Modal';
import HomeStyled from './HomeStyled';

// == Component
const Home = ({ loadRecipes, recipesData }) => {
  let recipes = '';
  const pageBoolean = false; // indicates the modal is called from /home, not from /favorite-recipes
  useEffect(() => {
    if (sessionStorage.getItem('homeData') === null) {
      loadRecipes();
    }
  }, [loadRecipes]);
  // We use the sessionStorage in order to be able to keep the search data after
  // the redirection to home page when the user uses the search bar
  if (sessionStorage.getItem('searchData') === null) {
    if (sessionStorage.getItem('homeData') === null) {
      recipes = recipesData;
    }
    else {
      recipes = JSON.parse(sessionStorage.getItem('homeData'));
    }
  }
  else {
    recipes = JSON.parse(sessionStorage.getItem('searchData'));
  }

  return (
    <HomeStyled>
      <section className="dynamic-display">
        <Modal calledFromFavoriteRecipes={pageBoolean} />
        <h2 className="welcome-title">Welcome to Grocer'eaz !</h2>
        <div className="presentation-paragraphs">
          <div className="presentation-paragraph">
            <Icon name="search" size="big" color="grey" />
            <p>
              Use the search bar to look for recipes. You can add{' '}
              <em>filters</em> to precise your request.
            </p>
          </div>
          <div className="presentation-paragraph">
            <Icon name="add circle" size="big" color="grey" />
            <p>
              Once you are signed in and found a recipe you would like to cook,
              select it.
            </p>
          </div>
          <div className="presentation-paragraph">
            <Icon name="list alternate outline" size="big" color="grey" />
            <p>
              Click on "Add to a grocery list". It will <em>automatically</em>{' '}
              generate a grocery list. Simple, easy.
            </p>
          </div>
        </div>
      </section>
      <section className="recipes-display">
        <div className="mobile-modale">
          <Modal calledFromFavoriteRecipes={pageBoolean} />
        </div>
        <div className="mobile-presentation">
          <p className="mobile-presentation-text">
            Select your favorite recipes and <em>automatically</em> generate a
            grocery list !
          </p>
        </div>
        <h2 className="recipes-display-title">Explore recipes</h2>
        <div className="recipes-display-cards-big-screen">
          <Card.Group itemsPerRow={3} stackable>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </Card.Group>
        </div>
        <div className="recipes-display-cards-medium-screen">
          <Card.Group itemsPerRow={2} stackable>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </Card.Group>
        </div>
        <div className="recipes-display-cards-little-screen">
          <Card.Group itemsPerRow={1} stackable>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </Card.Group>
        </div>
      </section>
    </HomeStyled>
  );
};
Home.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
  recipesData: PropTypes.array.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  addToListStatus: PropTypes.bool.isRequired,
  addToFavoriteStatus: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
};
// == Export
export default Home;
