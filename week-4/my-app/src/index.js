import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <header className="main-header">
          <p className="name">Website Title / Logo</p>
            <ul className="main-nav">
                <il><a href="#">Item1</a></il>
                <il><a href="#">Item2</a></il>
                <il><a href="#">Item3</a></il>
                <il><a href="#">Item4</a></il>
            </ul>
            <div className="dropdown-menu"> 
                <img src="img/icon.png" tabindex="0" onclick="return true" />
                <ul className="dropdown-nav">
                <p><a href="#">Item1</a>
                  <span className = "menuX" tabindex="0" onclick="return true"> X </span></p> 
                <p><a href="#">Item2</a></p>
                <p><a href="#">Item3</a></p>
                <p><a href="#">Item4</a></p>

            </ul>
            </div>
     </header>

    <div className="container">    
       <h2 id="message">Welcome Message</h2>
       <h3>Section Title</h3>
    </div>
    
    <div className="box-container1">
       <div className="box-itemA">Content Box1</div>
        <div className="box-itemA">Content Box2</div>
    </div>
    <div className="box-container2">    
       <div className="box-itemA">Content Box3</div>
       <div className="box-itemA">Content Box4</div>
    </div>

    </div>
        );
    }
}

ReactDOM.render(
    App,
    document.getElementById('root')
);
