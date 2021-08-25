import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './views/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Footer from './views/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faPhone,
  faPhoneVolume,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  library.add(fab, faEnvelope, faPhone, faPhoneVolume, faGlobe);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/award">
            <Awards />
          </Route>
          <Route path="/interest">
            <Interest />
          </Route>
          <Route path="/experience">
            <Experiences />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
