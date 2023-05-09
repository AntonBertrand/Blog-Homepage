import './App.css';
import Navigation from './components/Navigation.js'
import Post from './components/Post.js'
import Post_Data from './components/Post_Data.js'

function App() {

  const posts = Post_Data.map(item => {
    return (
      <Post
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navigation/>
      <div className='Posts'>
        {posts}
      </div>

    </div>
  );
}

export default App;
