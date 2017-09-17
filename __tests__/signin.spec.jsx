import React from 'react';
import { shallow } from 'enzyme';
import { Signin } from '../src/scenes/signin';
import SocialsAuth from '../src/scenes/signin/components/signin-socials';
import SigninForm from '../src/scenes/signin/components/signin-form';

describe('Signin', () => {
  const socialsProviders = [
    { provider: 'facebook' },
    { provider: 'vk' },
    { provider: 'yandex' },
    { provider: 'google-plus' },
  ];
  const minLength = 6;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signin minLength={minLength} socials={socialsProviders} withSocials />).dive();
  });

  it(`render ${socialsProviders.length} languages`, () => {
    const socialsBlock = wrapper.find(SocialsAuth).dive().find('.socials');
    expect(socialsProviders.every(({ provider }) => (socialsBlock.find(`button.${provider}`).length === 1))).toBeTruthy();
  });

  it(`render login form`, () => {
    expect(wrapper.find(SigninForm).length).toEqual(1);
  });
});
