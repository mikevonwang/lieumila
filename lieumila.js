import React from 'react';

let lang = '';
let default_lang = '';

export function Localizer(dictionary) {
  return function T(item) {
    if (dictionary[lang]) {
      return dictionary[lang][item];
    }
    else if (default_lang) {
      return dictionary[default_lang][item];
    }
    else {
      return undefined;
    }
  }
}

export function Internationalizer(props) {
  lang = props.lang;
  default_lang = props.default;
  return props.children;
};

export const L = {
  text: function(text) {
    return compose(React.Fragment, text);
  },

  p: function(text, props) {
    return compose('p', text, props);
  },

  strong: function(text, props) {
    return compose('strong', text, props);
  },

  em: function(text, props) {
    return compose('em', text, props);
  },

  span: function(text, props) {
    return compose('span', text, props);
  },

  sup: function(text, props) {
    return compose('sup', text, props);
  },

  sub: function(text, props) {
    return compose('sub', text, props);
  },

  ul: function(text, props) {
    return compose('ul', text, props);
  },

  ol: function(text, props) {
    return compose('ol', text, props);
  },

  li: function(text, props) {
    return compose('li', text, props);
  },

  a: function(text, props) {
    return compose('a', text, props);
  },
};

function compose(tag, text = '', props = null) {
  const child = (!Array.isArray(text)) ? text : text.map((node,i) => {
    return React.createElement(React.Fragment, {key: i}, node);
  });
  return React.createElement(tag, props, child);
}

const Lieumila = {
  Localizer,
  Internationalizer,
  L,
};

export default Lieumila;

module.exports = Lieumila;
