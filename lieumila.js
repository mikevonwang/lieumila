import React from 'react';

const AppContext = React.createContext(null);

export function withTranslations(content) {
  return function Connect(Component) {
    return function HOC(props) {
      return React.createElement(AppContext.Consumer, null, ((lang) => {
        return React.createElement(Component, {t: (key) => content[lang][key]}, props.children);
      }));
    };
  }
};

export function Internationalizer(props) {
  return React.createElement(AppContext.Provider, {value: props.lang}, props.children);
};

const Lieumila = {
  withTranslations,
  Internationalizer,
};

export default Lieumila;

module.exports = Lieumila;
