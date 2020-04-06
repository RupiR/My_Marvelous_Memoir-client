import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';

describe('<App />', () => {
    it('RegistrationForm without crashing', () => {
        shallow(<RegistrationForm />);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<RegistrationForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});