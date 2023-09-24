import './App.css';
import Post from "./components/Post"
import { useState } from 'react';
import posts from "./resources/posts"
import Tweet from "./components/Tweet"
function App() {

  const [keyword, setKeyword] = useState("")
  const [foundPosts, setFoundPosts] = useState(posts)
  function searchPosts(text){
    setKeyword(text)
    setFoundPosts(posts.filter(post => {return post.text.toLowerCase().includes(keyword.toLowerCase())}))
  }
  function clearSearch(){
    setKeyword("")
  }
  return (
    <div className="App">
    
      <header className="App-header">
        <div className='header-left'>
          <h1>Search</h1>
          <div className='input_container'>
          <input type='text' value={keyword} onChange={e => searchPosts(e.target.value)}/>
          {keyword!= "" && <button onClick={clearSearch}>x</button>}
          </div>
          {keyword!= "" && <p><b>{foundPosts.length} Posts</b> were found</p>}
        </div>
        <div className='header-right'>
          <Tweet />
        </div>
      </header>
      <main>
        {foundPosts.map(post => <Post keyword={keyword} post={post} /> )}
      </main>
      
    </div>
  );
}

export default App;
