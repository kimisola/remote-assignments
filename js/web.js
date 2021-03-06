class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick() {
      console.log(this.state);
              this.setState({isToggleOn: !this.state.isToggleOn},function(){
           console.log(this.state);
          });
    }
        // 因為異步執行為了防止點擊兩次才改變所以把style={{display:this.state.isToggleOn ? 'none':'block'}}
        // 改放置被執行的對象中

    render() {
        return (
            <header className="main-header">
          <p className="name"> Anny's Assignment3 / Logo</p>
            <ul className="main-nav">
                <il><a href="#">Item1</a></il>
                <il> </il>
                <il> <a href="#">Item2</a></il>
                <il> </il>
                <il> <a href="#">Item3</a></il>
                <il> </il>
                <il><a href="#">Item4</a></il>
            </ul>
            <div className="dropdown-menu"> 
                <img src="img/icon.png" onClick={this.handleClick} />
                <ul className="dropdown-nav" style={{display:this.state.isToggleOn ? 'none':'block'}}>
                  <p><a href="#">Item1</a>
                    <span className = "menuX" onClick={this.handleClick}> X </span></p> 
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
 constructor(props) {
    super(props);
    this.state = {isToggleOn: true};  //屬性設定
    this.handleClick = this.handleClick.bind(this);  //綁定這個東西、用來調用這地方的變數(isToggleOn)
  }
    handleClick() {   //創了一個function
    this.setState(prevState => ({isToggleOn: false}));  //上面的屬性可以用setState來改變
  }

    render() {
        return (
            <div className="container">    
                <h2 id="message" className="message" onClick={this.handleClick}>{this.state.isToggleOn ? 'Welcome Message':'Have a nice day !' }</h2>
                <h3>Section Title</h3>
            </div>
        )
    }
};


class TopBoX extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isToggleOn: true,
          display: 'none' 
    };
    this.handleClick = this.handleClick.bind(this);
    }
 
        handleClick() {
          this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,            
          }));
        }

    render() {
        return (
            <div>
            <div className="box-container1">
                <div className="box-itemA" id="box0">Content Box1</div>
                <div className="box-itemA" id="box1">Content Box2</div>
            </div>
            <div className="box-container2">    
                 <div className="box-itemA" id="box2">Content Box3</div>
                 <div className="box-itemA" id="box3">Content Box4</div>
            </div>
            <div className="mainfooter" onClick={this.handleClick}>Call to Action</div>
            <div className="box-container3">
                <div className="box-itemB" style={{display:this.state.isToggleOn ? 'none':'block'}}>Content Box5</div>
                <div className="box-itemB" style={{display:this.state.isToggleOn ? 'none':'block'}}>Content Box6</div>
            </div>
            <div className="box-container4">    
                <div className="box-itemB" style={{display:this.state.isToggleOn ? 'none':'block'}}>Content Box7</div>
                <div className="box-itemB" style={{display:this.state.isToggleOn ? 'none':'block'}}>Content Box8</div>
            </div>
            </div>
        )
    }
};

function ajax(src, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            callback(response)
        }
    };
    xhr.open('GET', src);
    xhr.send();
};

function render(data){ 
    for ( var i=0; i < data.length; i++ ) {
        document.getElementById("box"+[i]).innerHTML = "Name: "+data[i]['name'] +"<br>"+ "Price: "+ data[i]['price'] + "<br>"+ "Description: " +data[i]['description'];
    }
};

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
}); 

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
