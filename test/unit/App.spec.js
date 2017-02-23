import App from '../../src/App';
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('App tests', () => {
    let props,
        element;

    beforeEach(() => {
        props = {};
        element = shallow(<App {...props} />)
    });

    it('should be a div', () => {
        expect(element.type()).to.equal('div');
    });

    it('should have the text "hello, moon"', () => {
        expect(element.text()).to.equal("hello, moon");
    })
});
