import { Navbar, Feature, Brand , CTA} from "./components/index";
import { Header,Blog,Features, Footer, WhatGTP3, Possibility } from "./container/index";

import './App.css'



const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App