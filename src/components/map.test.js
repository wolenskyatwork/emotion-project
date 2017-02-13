import React from 'react';
import Map from './map';
import { expect } from 'chai';
import { shallowInsideProvider } from '../test/utils';

describe('<Map />', () => {

  it('should render a <Map> component', () => {
    const wrapper = shallowInsideProvider(<Map />);
    expect(wrapper).to.have.length(1);
  });

});
