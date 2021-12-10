import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
