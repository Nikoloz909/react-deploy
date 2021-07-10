/* eslint-disable jsx-a11y/img-redundant-alt */
import sectionimage from './img/size_p_5_0.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my react app</h1>
      <h2>authot: niko niko</h2>
      <img className='section-bg' src={sectionimage} alt="section-image" />
    </div>
  );
}

export default App;
