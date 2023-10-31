// import './assets/js/custom';
import './App.css';
import './assets/js/bootstrap-min';
import './assets/js/custom'
import Layout from './components/layouts/Layout';

import { BrowserRouter as Router } from "react-router-dom";

// import RouteList from './components/router/RouteList';


function App() {

  return (
    <>
      <Router>
        <Layout></Layout>
      </Router>

      {/* <Header></Header> */}
    </>
  )
}

export default App
