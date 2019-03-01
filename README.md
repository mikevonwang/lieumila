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
