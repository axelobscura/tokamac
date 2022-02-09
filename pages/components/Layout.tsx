import Head from "next/head";

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>TOKAMAC Limitless clean power source</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Free Web tutorials for HTML and CSS" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
