import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<Header />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});