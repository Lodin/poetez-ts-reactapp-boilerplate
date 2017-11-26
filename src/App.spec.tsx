import {shallow} from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

describe('renders without crashing', () => {
  it('simply', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  xit('with enzyme', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toHaveTagName('div');
  });
});
