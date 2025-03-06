const BannerPrincipal = () => {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h6>Bem vindo(a)</h6>
                                            <h2>Quem somos nós?</h2>
                                            <p>Aqui acreditamos que aprender a programar pode ser uma jornada divertida e cheia de descobertas!
                                                Nossa missão é tornar a programação acessível e envolvente para crianças, ajudando-as a
                                                desenvolver habilidades importantes enquanto se divertem.</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-first-button scroll-to-section">
                                                <a href="#services">Conheça quem vai te guiar nessa jornada</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="img/grupoMascotes.png" alt="Ilustração"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPrincipal;