import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';

const particleOptions = {
  particles: {
    links: {
      distance: 150,
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particles"
        options={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
