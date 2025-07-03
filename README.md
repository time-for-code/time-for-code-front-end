# Time for Code

![Logo](https://avatars.githubusercontent.com/u/182120128?s=200&v=4)

## Descrição do projeto

Time for Code é uma plataforma de ensino de programação voltada para crianças e adolescentes, com o objetivo de desenvolver habilidades de pensamento computacional. O projeto oferece exercícios práticos que ajudam os usuários a entender e aplicar os conceitos fundamentais do pensamento computacional, além de contar com 4 mascotes, cada um representando um pilar do pensamento computacional, para tornar o aprendizado mais lúdico e envolvente.

## Público Alvo

O Time for Code está sendo desenvolvido para crianças e adolescentes que estão iniciando sua jornada na programação, com foco no desenvolvimento do pensamento computacional. A plataforma é uma ótima ferramenta para jovens que buscam aprender de maneira divertida e interativa.

## Funcionalidades

* **Cadastro e Login:** Usuários podem criar uma conta e acessar a plataforma de forma segura.
* **Exercícios de Pensamento Computacional:** Exercícios que abordam diferentes pilares do pensamento computacional, como decomposição, reconhecimento de padrões, abstração e algoritmos.
* **Mascotes:** Quatro mascotes, cada um representando um pilar do pensamento computacional, guiam os usuários e tornam o aprendizado mais divertido e engajador.
* **Landing Page:** Página inicial que apresenta o projeto, explica seus objetivos e fornece mais informações sobre o conteúdo oferecido.

## Páginas do sistema
<img src="/docs/img01.png" alt="Landing page" width="650">
<img src="/docs/img02.png" alt="Exercício 04" width="650">

## Tecnologias utilizadas no projeto
![TechStack](https://skillicons.dev/icons?i=html,css,js,react,nodejs,npm,express,postgres,azure,git,github)
+ **HTML/CSS:** Para construção da estrutura e design responsivo da plataforma.
+ **JavaScript (JS):** Linguagem de programação utilizada tanto no frontend quanto no backend.
+ **React:** Biblioteca JavaScript para construção de interfaces de usuário.
+ **NodeJS:** Linguagem utilizada para utilizar o JavaScript a nível de servidor e para aplicações backend.
+ **NPM:** NPM ou Node Package Manager é um gerenciador de pacotes padrão para os ambientes NodeJS e JavaScript.
+ **Express:** Framework backend para construção da API e gerenciamento de dados.
+ **PostgreSQL:** Banco de dados utilizado para armazenar informações de usuários e progresso nos exercícios.
+ **Azure:** Plataforma de nuvem para hospedagem e infraestrutura.
+ **Git/GitHub:** Para controle de versão e colaboração no desenvolvimento do projeto.

## Equipe

- **Gustavo [(gstvgms)](https://github.com/gstvgms)**: Desenvolvedor Backend e Analista de Negócio
- **Lucas [(zlucasftw)](https://github.com/zlucasftw)**: Desenvolvedor Backend
- **Layla [(laycsz)](https://github.com/laycsz)**: Desenvolvedora Frontend e Designer UI/UX
- **Arthur [(ArthurVenturi)](https://github.com/ArthurVenturi)**: Desenvolvedor Frontend

# Time for Code - Frontend

## Configuração de Variáveis de Ambiente

### Desenvolvimento Local

1. Copie o arquivo `env.example` para `.env`:
```bash
cp env.example .env
```

2. Configure a URL da API no arquivo `.env`:

**Para testar API de produção:**
```bash
VITE_API_BASE_URL=https://sua-api-producao.com
```

**Para API local:**
```bash
VITE_API_BASE_URL=http://localhost:3000
```

**Nota:** Em desenvolvimento, o sistema usa proxy do Vite automaticamente para APIs externas.

### Deploy na Vercel

1. Acesse o dashboard da Vercel
2. Vá para **Settings > Environment Variables**
3. Adicione a variável:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://sua-api-producao.com`
   - **Environment**: Production (e Preview se desejar)

### Vantagens da Configuração

✅ **Flexível**: Pode usar qualquer URL da API através de variáveis de ambiente
✅ **Seguro**: URLs não ficam hardcoded no código
✅ **Portável**: Funciona em qualquer ambiente (dev, staging, prod)
✅ **Manutenível**: Fácil de mudar URLs sem alterar código

### Estrutura de Arquivos

- `src/config/api.js` - Configuração centralizada da API
- `src/api/` - Endpoints da API
- `src/contexts/` - Contextos do React

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run vercel-build` - Build específico para Vercel

## Tecnologias

- React 19
- Vite
- TanStack Router
- TanStack Query
