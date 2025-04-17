import { Link } from '@tanstack/react-router';
import '../../public/assets/css/cadastro.css'
import { useMutation } from '@tanstack/react-query';
import { cadastro } from '../api/User';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [anoNascimento, setAnoNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { armazenarCadastro } = useUser()

    const handleAnoNascimentoChange = (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (input.length > 8) {
            input = input.substring(0, 8); // Limit to 8 digits
        }
        if (input.length > 4) {
            input = input.replace(/^(\d{2})(\d{2})(\d+)/, "$1/$2/$3"); // Format as DD/MM/YYYY
        } else if (input.length > 2) {
            input = input.replace(/^(\d{2})(\d+)/, "$1/$2"); // Format as DD/MM
        }
        setAnoNascimento(input);
    };

    const mutation = useMutation({
        mutationKey: ['cadastro'],
        mutationFn: async ({ nome, anoNascimento, email, senha }) => {
            cadastro(nome, anoNascimento, email, senha)
        },
        onError: (e) => console.log(e),
        onSuccess: (data) => {
            armazenarCadastro(data)
            console.log('Cadastro realizado com sucesso!', data);
        },
    })

    return (
        <>
            <img className="wave" src="../public/img/wave.png" alt="wave" />
            <div className="container">
                <div className="img">
                    <img src="/img/grupoMascotes.png" alt="grupoMascotes" />
                </div>
                {mutation.isSuccess ? (
                    alert('Cadastro realizado com sucesso!')
                ) : (
                    <div className="login-content">
                        <form action={() => mutation.mutate({ nome, anoNascimento, email, senha })}>
                            <h2 className="title">Cadastro</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>Nome Completo</h5>
                                    <input
                                        type="text"
                                        className="input"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        title="O nome deve conter apenas letras e espaços"
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
                                        maxLength="10"
                                        value={anoNascimento}
                                        onChange={handleAnoNascimentoChange}
                                        required
                                        title="Digite uma data válida no formato DD/MM/AAAA"
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
                                        minLength="5"
                                        maxLength="50"
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
                                        required
                                        minLength="8"
                                        maxLength="20"
                                        title="A senha deve ter pelo menos 8 caracteres, incluindo letras e números"
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
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        required
                                        minLength="8"
                                        maxLength="20"
                                        title="A senha deve ter pelo menos 8 caracteres, incluindo letras e números"
                                    />
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
                )}
            </div>
        </>
    );
};

export default Cadastro;