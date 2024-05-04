import './App.css';

function App() {
  const scrollToTop = () => {window.scrollTo(0,0)};

  return (
    <div className="App">
      <header className="App-header">
	<a href="#about"> about </a>
	<a href="#stack"> stack </a>
	<a href="#projects"> projects </a>
      </header>
      <div className="landing">
	<h1 className="welcome-text-p1">
		Welcome,
	</h1>
	<h1 className="welcome-text-p2">
		my name is
	</h1>
	<h1 className="name">
		Adam.
	</h1>
      </div>
      <div id="about" className="about">
	<p> I am a {new Date().getFullYear() - 2005} year old developer with skills ranging from <p className="about-skill"> full stack web development </p> to <p className="about-skill"> systems administration </p> and <p className="about-skill"> automation </p> </p>
      </div>
      <div id="stack" className="stack">
	<div className="master">
		<div className="lang-banner" />
		<div className="linux-banner" > <h2> linux </h2> </div>
		<div className="docker-banner"> <h2> docker </h2> </div>
		<div className="sql-banner" > <h2> SQL </h2> </div>
	</div>
      </div>
      <div id="projects" className="projects">
      	<h2 className="projects-title">
		Projects
	</h2>
	<ul>
		<li> <a href="https://github.com/mr4dd/todew"> Todo app </a></li>
		<li> <a href="https://github.com/mr4dd/jolt"> AI assistant for the terminal </a> </li>
		<li> Inventory management (public repo coming soon) </li>
		<li> <a href="https://github.com/mr4dd/personalmk4"> echo $PWD </a> </li>
	</ul>
	<div className="return" onClick={scrollToTop}>⮝</div>
      	<footer>
		<a href="https://github.com/mr4dd"> github </a>
		<a href="mailto:adam.co"> email </a>
		<p className="copyright"> © 2024 adam </p>
      	</footer>
      </div>
    </div>
  );
}

export default App;
