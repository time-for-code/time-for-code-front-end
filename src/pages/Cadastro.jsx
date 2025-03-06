import { Link } from '@tanstack/react-router';
import '../../public/assets/css/cadastro.css'

const Cadastro = () => {
    return (
        <>
            <img className="wave" src="../public/img/wave.png" alt="wave" />
            <div className="container">
                <div className="img">
                    <img src="../public/img/grupoMascotes.png" alt="grupoMascotes" />
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <h2 className="title">Cadastro</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nome Completo</h5>
                                <input type="text" className="input" required />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="div">
                                <h5>Ano de Nascimento</h5>
                                <input type="text" className="input year-input" id="birthyear" maxLength="4" required />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <h5>E-mail dos Pais</h5>
                                <input type="email" className="input" required />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Senha</h5>
                                <input type="password" className="input" required />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Confirmar Senha</h5>
                                <input type="password" className="input" required />
                            </div>
                        </div>
                        <div className="border-first-button">
                            <input type="submit" className="btn" value="Cadastrar" />
                        </div>
                        <p className="login-message">
                            Já tem uma conta?<Link to={'/login'}>Faça login!</Link>
                        </p>
                    </form>
                </div>
            </div>
            <script type="text/javascript" src="../public/assets/js/script.js"></script>
        </>
    );
};

export default Cadastro;


{/* <script>
document.getElementById('birthyear').addEventListener('input', function(e) {
let input = e.target.value;
input = input.replace(/\D/g, ""); // Remove caracteres não numéricos
if (input.length > 4) {
input = input.substring(0, 4); // Limita a entrada a 4 dígitos
}
e.target.value = input;
});
</script> */}

