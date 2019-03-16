# Lïeumïla

Lïeumïla is a lightweight internationalizer for React.

## Installation

`npm install lieumila --save`

## Usage and Example

After installation, there are 5 main steps to using Lïeumïla:

**1.** Import Lïeumïla into your app at the top of each component you want to use it with:

```javascript
import Lieumila from 'lieumila';
```

If you use Webpack, you could instead include Lïeumïla in Webpack's `providePlugin()`, and avoid having to write the above `import` statement over and over:

```javascript
plugins: [
  new webpack.ProvidePlugin({
    Lieumila: 'lieumila',
  }),
],
```

**2.** Wrap your top-level React Component with a `Lieumila.Internationalizer`. Give the internationalizer your current language code ([ISO 639](https://en.wikipedia.org/wiki/ISO_639) codes are useful):

```javascript
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
    };
  }

  render() {
    return (
      <Lieumila.Internationalizer lang={this.state.lang}>
        {/* Your app goes here */}
      </Lieumila.Internationalizer>
    );
  }

}
```

**3.** For each component you want to use Lïeumïla with, construct a dictionary with your language codes as keys, and your localizations as values:

```javascript
const dictionary = {
  en: {
    title: 'Hello World!',
  },
  de: {
    title: 'Hallo Welt!',
  },
};
```

**4.** Assign a call to `Lieumila.Localizer` to a constant, giving the `Localizer` the dictionary you just created:

```javascript
// We can call this constant anything we want; `T` is convenient
const T = Lieumila.Localizer(dictionary);
```

**5.** The constant you just defined is actually a function, which takes in a key from your dictionary. Use this function to access your localizations:
```javascript
function ExampleComponent(props) {
  return (
    <h1>{T('title')}</h1>
  );
}
```

---

## Documentation

### `<Lieumila.Internationalizer/>`

A Lïeumïla internationalizer. This is a React Component, and should wrap your top-level Component (see step 2 in "Usage and Example" for an example). This component takes two props: `lang` and `default_lang`.

#### Props

##### `lang` **String** *required*

The current language setting of your app.

##### `default_lang` **String** *optional*

The language to default to, when Lïeumïla tries to display a localization that doesn't yet exist. This should be a language that always has a localization in your app.

---

### `Lieumila.Localizer`

This function accepts a `dictionary`, and returns a function that selects the appropriate localization for your app's current language setting. This returned function should be used in your React Components to render localized text.

#### Parameters

##### `dictionary` **Object** *required*

An object where each key is a language code. The values can be either arrays or objects, but each value in a single dictionary should have the same schema. If a `default_lang` has been defined, then values that correspond to languages that are not the `default_lang` can be `null`.

See step 3 in "Usage and Example" for an example dictionary.

#### Returns

##### `T(key)` **Function**

`T()` automatically knows the current language setting of your app. It accepts a `key` string parameter, and should be used in your React Components to render localized text. See step 4 in "Usage and Example" for an example.

---

### `Lieumila.L`

`Lieumila.L` is a convenience tool, meant to assist in the composition of complex localized text. If you include `Lieumila.L` in Webpack's `providePlugin()`, you can call it with just `L`:

```javascript
plugins: [
  new webpack.ProvidePlugin({
    Lieumila: 'lieumila',
    L: ['lieumila', 'L'],
  }),
],
```

`L` contains several functions:

- `L.text()`
- `L.p()`
- `L.strong()`
- `L.em()`
- `L.span()`
- `L.sup()`
- `L.sub()`
- `L.ul()`
- `L.ol()`
- `L.li()`
- `L.a()`

Each of these accepts two parameters: `text` and `props` (except for `L.text()`, which only accepts `text`).

#### Parameters

##### `text` **Array** or **String** *required*

This parameter is either:

- a string containing localized text, or
- an array of either:
  - strings containing localized text, or
  - calls to `L` functions

For example:

```javascript
const dictionary = {
  en: {
    // `L.text()` is being called here with an array of strings and calls to other `L` functions
    title: L.text([
      'Hello ',
      // `L.strong()` is being called here with a string
      L.strong('World'),
      '!',
    ]),
  },
  de: {
    title: L.text([
      'Hallo ',
      L.strong('Welt'),
      '!',
    ]),
  },
};
```

##### `props` **Object** *optional*

This parameter is an object of props to pass to the React Component returned by the `L` function. `L.text()` does not accept this parameter, because it is the only `L` function that returns a React Fragment instead of a React Component.

#### Returns

Either a React Component corresponding to the `L` function used, or a React Fragment in the case of `L.text()`.
