import { Link } from '@tanstack/react-router';
import '../../public/assets/css/login.css'
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/User';
import { useUser } from '../contexts/UserContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const { armazenarLogin } = useUser()

	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: async ({ email, senha }) => {
			login(email, senha)
		},
		onError: (e) => console.log(e),
		onSuccess: (data) => {
			armazenarLogin(data)
			console.log('Cadastro realizado com sucesso!', data);
		},
	})

	return (
		<>
			<img className="wave" src="img/wave.png" alt="wave" />
			<div className="container">
				<div className="img">
					<img src="img/grupoMascotes.png" alt="grupoMascotes" />
				</div>
				<div className="login-content">
					<form action={() => mutation.mutate} >
						<h2 className="title">Login</h2>
						<div className="input-div one">
							<div className="i">
								<i className="fas fa-user"></i>
							</div>
							<div className="div">
								<h5>E-mail</h5>
								<input
									type="text"
									className="input"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									minLength="5"
									maxLength="50"
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
									title="Digite um e-mail válido"
								/>
							</div>
						</div>
						<div className="input-div pass">
							<div className="i">
								<i className="fas fa-lock"></i>
							</div>
							<div className="div">
								<h5>Senha</h5>
								<input
									type="password"
									className="input"
									value={senha}
									onChange={(e) => setSenha(e.target.value)}
									required
									minLength="8"
									maxLength="20"
									pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$"
									title="A senha deve ter pelo menos 8 caracteres, incluindo letras e números"
								/>
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

