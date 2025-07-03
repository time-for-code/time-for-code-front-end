import { Link, useNavigate } from '@tanstack/react-router';
import '../../public/assets/css/cadastro.css'
import { useMutation } from '@tanstack/react-query';
import { cadastro } from '../api/User';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import Loading from '../components/Loading';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [anoNascimento, setAnoNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { armazenarCadastro } = useUser()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ['cadastro'],
        mutationFn: async ({ nome, anoNascimento, email, senha }) => {
            return cadastro(nome, parseInt(anoNascimento), email, senha)
        },
        onError: (e) => console.log(e),
        onSuccess: (data) => {
            armazenarCadastro(data.user)
            console.log('Cadastro realizado com sucesso!', data);
            armazenarLogin(data.name);
            setTimeout(() => {
                navigate({ to: "/home", reloadDocument: true });
            }, 800);
        },
    })

    return (
        <>
            <Link reloadDocument="true" to="/" className="return-button">
                &#8592; Voltar
            </Link>
            <img className="wave" src="/img/wave.png" alt="wave" />
            <div className="container">
                <div className="img">
                    <img src="/img/grupoMascotes.png" alt="grupoMascotes" />
                </div>
                <div className="login-content">
                    {mutation.isPending ? (
                        <Loading />
                    ) : (
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
                                        maxLength="4"
                                        value={anoNascimento}
                                        onChange={(e) => setAnoNascimento(e.target.value)}
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
                                        regex="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                                        regex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$"
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
                                Já tem uma conta?<Link reloadDocument="true" to={'/login'}>Faça login!</Link>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cadastro;