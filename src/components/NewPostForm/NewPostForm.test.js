import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NewPostForm from './NewPostForm';

describe('<NewPostForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewPostForm />);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<NewPostForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});