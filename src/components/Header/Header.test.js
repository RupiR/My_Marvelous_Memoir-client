import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<MemoryRouter><Header /></MemoryRouter>);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<MemoryRouter><Header /></MemoryRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});