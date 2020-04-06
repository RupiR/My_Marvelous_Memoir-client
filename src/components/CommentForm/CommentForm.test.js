import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CommentForm from './CommentForm';

describe('<CommentForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CommentForm />);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<CommentForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});