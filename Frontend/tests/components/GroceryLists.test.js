import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import GroceryLists from '../../src/components/GroceryLists';


describe('<GroceryLists />', () => {
  const groceryLists = [
    {
      id: 1,
      title: 'list 1',
    },
    {
      id: 2,
      title: 'list 2',
    },
    {
      id: 8,
      title: 'list 8',
    },
  ];

  const wrapper = shallow((
    <GroceryLists
      groceryLists={groceryLists}
    />));
  it('renders "My Shopping lists" as title', () => {
    const textHeader = <h2>My shopping lists</h2>;
    expect(wrapper.contains(textHeader)).equal(true);
  });
  it('should not renders just 1 groceryLists item', () => {
    expect(wrapper.find('.grocery-item')).to.not.have.lengthOf(1);
  });
  it('renders 3 groceryLists item', () => {
    expect(wrapper.find('.grocery-item')).to.have.lengthOf(3);
  });
});
