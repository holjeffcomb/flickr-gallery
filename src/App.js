import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import ApiKey from './config';

function App() {
  return (
    <div className="container">
      
      <SearchForm />

      <Nav />

      <PhotoContainer />

      <h1>{ApiKey}</h1>

    </div>
  );
}

export default App;
