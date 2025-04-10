import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../utils/api';
import '../../public/assets/css/login.css';

const Login = () => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate({ to: '/home' });
        },
        onError: (error) => {
            setError(error.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        loginMutation.mutate({ email, password });
    };

	return (
		<>
			<img className="wave" src="img/wave.png" alt="wave" />
			<div className="container">
				<div className="img">
					<img src="img/grupoMascotes.png" alt="grupoMascotes" />
				</div>
				<div className="login-content">
					<form onSubmit={handleSubmit}>
						<h2 className="title">Login</h2>
						{error && <div className="error-message">{error}</div>}
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
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
						</div>
						<a href="#">Esqueceu a sua senha?</a>
						<div className="border-first-button">
							<button
								type="submit"
								className="btn"
								disabled={loginMutation.isPending}
							>
								{loginMutation.isPending ? 'Conectando...' : 'Fazer Login'}
							</button>
						</div>
						<p className="signup-message">Não tem uma conta? <Link to={'/register'}>Crie uma!</Link></p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;