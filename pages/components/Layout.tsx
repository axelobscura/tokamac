import Head from "next/head";

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>TOKAMAK Limitless clean power source</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TOKAMAK limitless clean power source is possible" />
        <meta name="keywords" content="tokamak, energy, clean power" />
        <meta name="author" content="Axel Laurent Obscura Sarzotti" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;800&family=Lora:wght@400;700&family=Nunito+Sans:wght@200;900&family=Poppins:wght@100;900&family=Titillium+Web:wght@200;300;900&display=swap" rel="stylesheet" /> 
      </Head>
      <div className="container-fluid m-0 p-0">
        {children}
      </div>
    </div>
  )
}

export default Layout
