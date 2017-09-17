import React from 'react';
import { shallow } from 'enzyme';
import { LanguageSwitcher } from '../src/components/language-switcher';

describe('languageSwitcher', () => {
  let wrapper;
  const languages = [
    { id: 'ru', title: 'Русский' },
    { id: 'en', title: 'English' },
  ];
  let active = 'en';
  const changeLanguage = (lng) => {
    active = lng;
  };

  beforeEach(() => {
    wrapper = shallow(<LanguageSwitcher languages={languages} active={active} changeLanguage={changeLanguage} />);
  });

  it(`render ${languages.length} languages`, () => {
    const allItems = wrapper.find('li');
    expect(languages.every(({ id }) => (allItems.filterWhere(n => n.key() === id).length === 1))).toBeTruthy();
  });

  it(`has active ${active} language`, () => {
    expect(wrapper.find('li').filterWhere(n => n.key() === active).find('.active').length).toEqual(1);
  });

  it('change language', () => {
    const newActive = languages[0].id;
    wrapper.find('li').filterWhere(n => n.key() === newActive).childAt(0).simulate('click');
    expect(active).toEqual(newActive);
  });
});
