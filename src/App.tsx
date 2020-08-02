import React from 'react';
import Sidenav from './components/Sidenav';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './redux';
function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <div className="flex-none">
          < Sidenav />
        </div>
        <div className="flex flex-col flex-grow">
          <Navbar />
          <Header />
          <Content />
        </div>
      </div>
    </Provider>
  );
}

export default App;
