import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <div className="App">
        <header className="nav">
          <Link
            className="logo"
            activeClass="active"
            smooth
            spy
            to="presentation"
          >
            FRACTAL RIFT
          </Link>

          <nav className="nav__container__actions">
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="presentation">
                  PRESENTATION
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="le-jeu">
                  LE JEU
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="news">
                  NEWS
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section id="presentation">
          <div className="bg-video">
            <video className="video" autoPlay loop width="250">
              <source
                src="src/assets/level-1-final_WQCVIigp.mp4"
                type="video/webm"
              />
            </video>
          </div>
          <h1>FRACTAL RIFT</h1>
          <ul className="text-list">
            <li>Traversez la Faille</li>
            <li>Emparez vous du Trésor</li>
            <li>Fuyez avant la Fin</li>
          </ul>
        </section>
        <section id="le-jeu">
          <p>
            Fractal Rift est un jeu tactique avec des parties intenses et
            rapides en joueur contre joueur.
          </p>
          <p>
            Controlez une petite équipe de sbires dirigée par un puissant
            magicien !
          </p>
          <p>Récupérez un maximum de trésor et fuyez par le portail !</p>
          <p>
            Votre adversaire a le meme objectif que vous et il faudra parfois
            choisir entre fuir pour protéger vos hommes ou tenter le tout pour
            le tout pour vous enrichir !
          </p>
          <p>
            Faites attention à l'environnement, la tempete et les betes qui y
            rode ne seront pas tendre avec vous...
          </p>
        </section>
        <section id="news">
          <div className="container">
            <img className="images" src="src/assets/newmap.png" />
            <p className="text">
              Dev log 1 : Aujourd'hui nous implémentons la nuit sur notre carte
              de la cité en ruine !
            </p>
          </div>
          <div className="container reverse">
            <img className="images" src="src/assets/image.png" />
            <p className="text">
              Dev log 2 : Un petit aperçu du brouillard magique délimitant le
              terrain.
            </p>
          </div>
        </section>
        <section id="contact">
          <p>CONTACT US</p>
          <p>Etudiants en Master à l'ETNA :</p>
          <p>GRASSET H-H</p>
          <p>CHARDAT P</p>
          <p>OBLET-JOFFRE J</p>
          <p>RODRIGUEZ L</p>
        </section>
      </div>
    </>
  );
}

export default App;
