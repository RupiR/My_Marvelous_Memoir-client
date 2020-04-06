import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';

describe('<NewPostForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<LoginForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});