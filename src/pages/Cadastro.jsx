import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../services/api';
import '../../public/assets/css/cadastro.css';

const Cadastro = () => {
    const [fullName, setFullName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            navigate({ to: '/login' });
        },
        onError: (error) => {
            setError(error.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate form
        if (password !== confirmPassword) {
            setError('Senhas não coincidem');
            return;
        }

        if (birthYear.length !== 4 || isNaN(birthYear)) {
            setError('Por favor, insira um ano de nascimento válido');
            return;
        }

        // Convert birthYear to integer before sending to API
        registerMutation.mutate({
            fullName,
            birthYear: parseInt(birthYear, 10), // Convert string to integer
            email,
            password
        });
    };

    // ...rest of the component...

    const handleBirthYearChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.length <= 4) {
            setBirthYear(input);
        }
    };

    return (
        <>
            <img className="wave" src="../public/img/wave.png" alt="wave" />
            <div className="container">
                <div className="img">
                    <img src="../public/img/grupoMascotes.png" alt="grupoMascotes" />
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit}>
                        <h2 className="title">Cadastro</h2>
                        {error && <div className="error-message">{error}</div>}
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nome Completo</h5>
                                <input
                                    type="text"
                                    className="input"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="div">
                                <h5>Ano de Nascimento</h5>
                                <input
                                    type="text"
                                    className="input year-input"
                                    id="birthyear"
                                    maxLength="4"
                                    value={birthYear}
                                    onChange={handleBirthYearChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <h5>E-mail dos Pais</h5>
                                <input
                                    type="email"
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
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Confirmar Senha</h5>
                                <input
                                    type="password"
                                    className="input"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="border-first-button">
                            <button
                                type="submit"
                                className="btn"
                                disabled={registerMutation.isPending}
                            >
                                {registerMutation.isPending ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                        </div>
                        <p className="login-message">
                            Já tem uma conta? <Link to={'/login'}>Faça login!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Cadastro;