import Document, { Head, Main, NextScript } from 'next/document'

export default class NextProductDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/vendor/bootstrap/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        </Head>
        <body className="next-product">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}