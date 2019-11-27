class App extends React.Component {
    render() {
        return (
        <div>
            <header className="main-header">
          <p className="name">Website Title / Logo</p>
             <ul className="main-nav">
                <il><a href="#">Item1</a></il>
                <il><a href="#">Item2</a></il>
                <il><a href="#">Item3</a></il>
                <il><a href="#">Item4</a></il>
             </ul>
            </header>
        </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);