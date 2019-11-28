class Top extends React.Component {
    render() {
        return (
            <header className="main-header">
          <p className="name"> Anny's Assignment3 / Logo</p>
            <ul className="main-nav">
                <il><a href="#">&emsp;Item1</a></il>
                <il><a href="#">&emsp;Item2</a></il>
                <il><a href="#">&emsp;Item3</a></il>
                <il><a href="#">&emsp;Item4</a></il>
            </ul>
            <div className="dropdown-menu"> 
                <img src="img/icon.png" tabindex="0" onClick="return true" />
                <ul className="dropdown-nav">
                  <p><a href="#">Item1</a>
                     <span className = "menuX" tabindex="0" onClick="return true"> X </span></p> 
                  <p><a href="#">Item2</a></p>
                  <p><a href="#">Item3</a></p>
                  <p><a href="#">Item4</a></p>
            </ul>
            </div>
            </header>
        );
    }
};

class Message extends React.Component {
    change() {
        message.innerHTML = "Have a nice day !"
    }
    render() {
        return (
            <div className="container">    
                <h2 id="message" className="message" onClick={this.change.bind()}>Welcome Message</h2>
                <h3>Section Title</h3>
            </div>
        )
    }
};

class TopBoX extends React.Component {
    boxes() {
        const boxitemB = document.querySelectorAll(".box-itemB"); 
        for (var i=0; i< boxitemB.length; i++){
            if (boxitemB[i].style.display == 'block') {
            boxitemB[i].style.display = 'none';
            } else {
                boxitemB[i].style.display = 'block';
            }
        }
    }
    render() {
        return (
            <div>
            <div className="box-container1">
                <div className="box-itemA">Content Box1</div>
                <div className="box-itemA">Content Box2</div>
            </div>
            <div className="box-container2">    
                 <div className="box-itemA">Content Box3</div>
                 <div className="box-itemA">Content Box4</div>
            </div>
            <div className="mainfooter" onClick={this.boxes.bind()}>Call to Action</div>
            <div className="box-container3">
                <div className="box-itemB">Content Box5</div>
                <div className="box-itemB">Content Box6</div>
            </div>
            <div className="box-container4">    
                <div className="box-itemB">Content Box7</div>
                <div className="box-itemB">Content Box8</div>
            </div>
            </div>
        )
    }
};

class HiddenBoX extends React.Component {
    render() {
        return (
            <div>
            <div className="box-container3">
                <div className="box-itemB">Content Box5</div>
                <div className="box-itemB">Content Box6</div>
            </div>
            <div className="box-container4">    
                <div className="box-itemB">Content Box7</div>
                <div className="box-itemB">Content Box8</div>
            </div>  
            </div>
        )
    }
};

const App =() => {
        return (
            <div>
            <Top />
            <Message />
            <TopBoX />
            </div>
        );
    }



ReactDOM.render(
 <App />,
    document.getElementById('root')
);
