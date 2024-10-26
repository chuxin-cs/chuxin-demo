import { HashRouter, Link, Route } from './plugins/index.tsx';

function Home(){
  return (
    <div>home</div>
  )
}

function About(){
  return (
    <div>about</div>
  )
}




const App = () => {


  return (
    <>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </HashRouter>
    </>
  );
};

export default App;
