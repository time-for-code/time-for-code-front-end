import { Link } from '@tanstack/react-router';
import '../../public/assets/css/login.css'

const Login = () => {
	return (
		<>
			<img className="wave" src="img/wave.png" alt="wave" />
			<div className="container">
				<div className="img">
					<img src="img/grupoMascotes.png" alt="grupoMascotes" />
				</div>
				<div className="login-content">
					<form action="index.html">
						<h2 className="title">Login</h2>
						<div className="input-div one">
							<div className="i">
								<i className="fas fa-user"></i>
							</div>
							<div className="div">
								<h5>E-mail</h5>
								<input type="text" className="input" />
							</div>
						</div>
						<div className="input-div pass">
							<div className="i">
								<i className="fas fa-lock"></i>
							</div>
							<div className="div">
								<h5>Senha</h5>
								<input type="password" className="input" />
							</div>
						</div>
						<a href="#">Esqueceu a sua senha?</a>
						<div className="border-first-button">
							<input type="submit" className="btn" value="Fazer Login" />
						</div>
						<p className="signup-message">Não tem uma conta? <Link to={'/register'}>Crie uma!</Link></p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;

