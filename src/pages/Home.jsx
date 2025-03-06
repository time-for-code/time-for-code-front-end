import Conteudos from '../components/Conteudos'
import '../../public/assets/css/home.css'

const Home = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <h1 className="logo"><a href="#">Time For Code</a></h1>
                        <ul className="nav">
                            <li><a href="#content">Conteúdos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="main-banner" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>Bem-vindo ao Time For Code!</h2>
                            <p>Aprenda sobre tecnologia de forma divertida e interativa!</p>
                        </div>
                        <div className="col-6">
                            <img src="../public/img/grupoMascotes.png" alt="Ilustração" className="banner-img" />
                        </div>
                    </div>
                </div>
            </section>
            <Conteudos />
        </>
    )
}
export default Home;








