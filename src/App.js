import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import LeftUI from './components/leftUI/LeftUI';
import RightUI from './components/rightUI/RightUI';

function App() {
  return (<Container>
    <LeftUI />
    <RightUI />
  </Container>);
}

export default App;
