import React from 'react';
import Header from '../Header/Header';


const Layout: React.FC = (props) => (
  <React.Fragment>
    <Header></Header>
    <main className="main">
      { props.children }
    </main>
  </React.Fragment>
  )

export default Layout;