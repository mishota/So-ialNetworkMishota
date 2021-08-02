import './App.css';



function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/736x/7f/a9/36/7fa9368444fec306b9fa2d61e4f4f3c2.jpg'/>
      </header>

      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messeges</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
        <div></div>
      </nav>

      <div className='content'>
        <div>
          <img src='https://www.eyestudio.co.zw/wp-content/uploads/2018/12/Eye_Studio_New_Technology.jpg'/>
        </div>
        <div>
          <img src='https://i.pinimg.com/736x/a8/98/76/a89876726813dc956ad3edb9faab8a13.jpg'/>
          Description
        </div>
        <div>
          MyPosts
          <div>
            NewPosts
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
