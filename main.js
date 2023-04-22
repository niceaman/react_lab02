// Import components
function App() {
  return (
    <>
      <div className="container">
        <div>LEARN REACT </div>
        <div>
          <h1>Quick Start</h1>
        </div>
        <div>
          <p>
            Welcome to the React documentation! This page will give you an
            introduction to the 80% of React concepts that you will use on a
            daily basis.
          </p>
        </div>
        <div>
         
            <h2>You will learn</h2>
        

          <div className="focusBox2">
            <ul>
              <li>How to create and nest components</li>
              <li>How to add markup and styles</li>
              <li>How to display data</li>
              <li>How to render conditions and lists</li>
              <li>How to respond to events and update the screen</li>
              <li>How to share data between components</li>
            </ul>
          </div>
        </div>
        <div>5</div>
      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
