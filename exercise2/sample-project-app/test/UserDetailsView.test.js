import React from 'react'
import {expect} from 'chai';
import UserDetailsView from '../src/UserDetailsView';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {spy} from 'sinon';

import  {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDetailsview', function() {
  describe('(Component) UserDetailsView', () => {
    it('renders...', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserDetailsView />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('calls componentDidMount', () => {
      let context = { router: {isactive: (a, b) => ture }};
      let mockData = {params: 
        {id: 1}
      };

      spy(UserDetailsView.prototype, 'componentDidMount');
      const userObj = shallow(<UserDetailsView match={mockData}/>, { context });
      expect(UserDetailsView.prototype.componentDidMount.calledOnce).to.equal(true);
    });
    
  });
});