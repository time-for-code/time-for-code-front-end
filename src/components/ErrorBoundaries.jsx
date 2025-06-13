import * as React from "react";
import "../../public/assets/css/utilidades.css";
import { useNavigate } from "@tanstack/react-router";

// ErrorBoundary catches JavaScript errors in its child component tree, logs them, and displays a fallback UI.
// Use it to prevent the entire app from crashing due to errors in part of the UI.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleGoHome = this.handleGoHome.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
    // You can also log the error to an error reporting service here.
  }

  handleGoHome() {
    if (this.props.navigate) {
      this.props.navigate({ to: "/" });
      setTimeout(() => window.location.reload(), 0);
    }
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI if provided, otherwise show a default message.
      return (
        this.props.fallback || (
          <div className="error-boundary-fallback">
            <div className="error-boundary-content">
              <h1>WHOPPS!</h1>
              <h2>Alguma coisa deu errado. Que Vergonha</h2>
              <button className="btn exception-button"
                onClick={this.handleGoHome}
              >
                Ir para Home
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

// Wrapper to inject navigate prop from useNavigate into ErrorBoundary
export function ErrorBoundaryWithNavigate(props) {
  const navigate = useNavigate();
  return <ErrorBoundary {...props} navigate={navigate} />;
}

export const Pagina404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate({ to: "/" });
    setTimeout(() => window.location.reload(), 0);
  };

  return (
    <div className="container-404">
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <button onClick={() => handleGoHome()} className="btn exception-button">
        Voltar para a página inicial
      </button>
    </div>
  );
};