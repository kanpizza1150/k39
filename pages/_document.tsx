import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='apple-touch-icon'
            href='icons/android-chrome-192x192.png'
          />
          <link
            rel='apple-touch-icon'
            href='icons/android-chrome-512x512.png'
          />
          <link rel='apple-touch-icon' href='icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
