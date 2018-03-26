import React from 'react'
import {expect} from 'chai';
import UsersListview from '../src/UsersListview';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {spy} from 'sinon';
import  {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('App UsersListview', function() {
  describe('(Component) UsersListview', () => {
    it('renders...', () => {
      const div = document.createElement('div');
      ReactDOM.render(<UsersListview />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    it('calls componentDidMount', () => {
      spy(UsersListview.prototype, 'componentDidMount');
      const wrapper = shallow(<UsersListview/>);
      expect(UsersListview.prototype.componentDidMount.calledOnce).to.equal(true);
    });
  });
});