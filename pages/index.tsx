import Layout from "./components/Layout";
import { ImSpinner9 } from 'react-icons/im';

function HomePage() {
  return (
    <Layout>
      <div className="container-fluid home">
        <h2><ImSpinner9 color="#fff" /></h2>
        <h1>TOKAMAK</h1>
        <h4><b>Fusion Energy</b> can produce little waste and requires only small amounts of abundant, naturally-sourced fuel, including elements extracted from seawater. This makes it an attractive option as the world <b>transitions away from the fossil fuels</b> driving climate change.</h4>
        <h2>There's no silver bullet to the climate crisis</h2>
      </div>
    </Layout>
  )
}

export default HomePage
