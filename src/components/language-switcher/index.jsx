import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './styles.css';

export const LanguageSwitcher = ({ languages, active, changeLanguage }) => (
  <ul className="lng">
    {languages.map(
      ({ title, id }, index) =>
        (
          <li key={id}>
            <Link onClick={() => { changeLanguage(id); }} className={id === active ? 'active' : ''}>
              {title}
            </Link>
            {index === languages.length - 1 ? '' : '|'}
          </li>
        ),
    )}
  </ul>
);

LanguageSwitcher.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({ active: state.language.current });

export default connect(mapStateToProps, actions)(LanguageSwitcher);
