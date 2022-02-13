import Head from "next/head";
import Header from "./Header";

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>TOKAMAK Limitless clean power source</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TOKAMAK limitless clean power source is possible" />
        <meta name="keywords" content="tokamak, energy, clean power" />
        <meta name="author" content="Axel Laurent Obscura Sarzotti" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;800&family=Lora:wght@400;700&family=Nunito+Sans:wght@200;900&family=Poppins:wght@100;900&family=Titillium+Web:wght@200;300;900&display=swap" rel="stylesheet" /> 
      </Head>

      <Header />

      <div className="container-fluid m-0 p-0">
        {children}
      </div>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
    </div>
  )
}

export default Layout
