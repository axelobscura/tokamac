import Layout from "./components/Layout"

function HomePage() {
  return (
    <Layout>
      <div className="container-fluid home">
        <h1>TOKAMAK</h1>
        <h4><b>Fusion Energy</b> can produce little waste and requires only small amounts of abundant, naturally-sourced fuel, including elements extracted from seawater. This makes it an attractive option as the world <b>transitions away from the fossil fuels</b> driving climate change.</h4>
      </div>
    </Layout>
  )
}

export default HomePage
