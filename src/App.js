import './App.css';
import top from './assets/bg-pattern-top.svg';
import bottom from './assets/bg-pattern-bottom.svg';
import card from './assets/bg-pattern-card.svg';
import victor from './assets/image-victor.jpg';

function App() {

  let socialData = [

    {
      count: '80K',
      name: 'Followers'
    },

    {
      count: '803K',
      name: 'Likes'
    },

    {
      count: '1.4K',
      name: 'Photos'
    }

  ]

  return (
    <div className="App">

      <img className="top-bg"
        src={top} alt="top" loading="lazy" />

      <div className="profile-card">

        <div className="card-pattern">
          <img src={card} alt="image" />
        </div>

        <div className="details">

          <div className="profile-image-wrapper">
            <img src={'https://source.unsplash.com/weekly?skateboard'} alt="profile" />
          </div>

          <div className="user-name">
            <h1>Victor Crest <span>26</span></h1>
            <p style={{ marginTop: '10px' }}>London</p>
          </div>

          <div className="social-data-wrapper">
            {
              socialData.map((e, index) => {
                return (
                  <div style={{
                    width: '100%',
                    textAlign: 'center'
                  }}>
                    <h1>{e.count}</h1>
                    <p>{e.name}</p>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>

      <img className="bottom-bg"
        src={bottom} alt="bottom" loading="lazy" />

    </div >
  );
}

export default App;
