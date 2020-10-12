import React from 'react';
import renderer from 'react-test-renderer';

import PersonalJournal from './PersonalJournal';

test('renders correctly', () => {
    const tree = renderer.create(<PersonalJournal />).toJSON();
    expect(tree).toMatchSnapshot();
  });