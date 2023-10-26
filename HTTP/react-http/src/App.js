import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import axios from 'axios' //Library

function App() {
  return (
    <div className="App">
      {/* <PostList/> */}
      <PostForm/>
    </div>
  );
}

export default App;
