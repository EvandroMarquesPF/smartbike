import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-glass">
        <h1>SmartBike</h1>
        <p className="subtitle">Encontre as rotas menos cansativas para suas entregas de bike</p>
      </header>
      
      <main className="content-glass">
        <section className="hero-section">
          <h2>Como funciona</h2>
          <p>
            O SmartBike utiliza as APIs do Google Maps para analisar rotas considerando:
          </p>
          <ul className="features-list">
            <li>Elevação do terreno (minimizando subidas íngremes)</li>
            <li>Tipo de superfície da rua (evitando chão ruim)</li>
            <li>Volume de tráfego (rotas mais tranquilas)</li>
            <li>Distância e tempo estimado</li>
            <li>Condições climáticas quando disponíveis</li>
          </ul>
        </section>
        
        <section className="cta-section">
          <h2>Próximos passos</h2>
          <p>
            Este é o ponto de partida para o desenvolvimento do aplicativo completo.
            As próximas etapas incluem:
          </p>
          <ol className="steps-list">
            <li>Integração com as APIs do Google Maps</li>
            <li>Interface para inserção de pontos de entrega</li>
            <li>Algoritmo de otimização de rotas com foco em esforço físico</li>
            <li>Visualização das rotas em mapa interativo</li>
            <li>Modo de múltiplas paradas para entregadores</li>
          </ol>
        </section>
      </main>
      
      <footer className="header-glass">
        <p>&copy; {new Date().getFullYear()} SmartBike - Rotas inteligentes para entregadores de bike</p>
      </footer>
    </div>
  );
}

export default App;