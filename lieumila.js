let lang = '';

export function Localizer(dictionary) {
  return function T(item) {
    return dictionary[lang][item];
  }
}

export function Internationalizer(props) {
  lang = props.lang
  return props.children;
};

const Lieumila = {
  Localizer,
  Internationalizer,
};

export default Lieumila;

module.exports = Lieumila;
