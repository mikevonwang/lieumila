# Lïeumïla

Lïeumïla is a A lightweight internationalizer for React.

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

**3.** For each component you want to use Lïeumïla with, construct a `dictionary` with your valid language codes:

```javascript
const Content = {
  en: {
    title: 'A little serenade',
  },
  de: {
    title: 'Eine kleine Nachtmusik',
  },
};
```

**4.** Connect each component to Lïeumïla with `Lieumila.withTranslations` and the `dictionary` you just created:
```javascript
// Instead of exporting `SheetMusic` directly, export its connected version below.
function SheetMusic() {
  return ();
}

export default Lieumila.withTranslations(Content)(SheetMusic);
```

**5.** Use `t()` to access your translations:
```javascript
function SheetMusic(props) {
  return (
    <h1>{props.t('title')}</h1>
  );
}
```
