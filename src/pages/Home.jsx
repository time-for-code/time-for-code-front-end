import Conteudos from '../components/Conteudos'
import '../../public/assets/css/home.css'

const Home = () => {
    return (
        <>
            <section className="main-banner" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>Bem-vindo ao Time For Code!</h2>
                            <p>Aprenda sobre tecnologia de forma divertida e interativa!</p>
                        </div>
                        <div className="col-6">
                            <img src="/img/grupoMascotes.png" alt="Ilustração" className="banner-img" />
                        </div>
                    </div>
                </div>
            </section>
            <Conteudos />
        </>
    )
}
export default Home;