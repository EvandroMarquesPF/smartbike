import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-glass">
        <h1>SmartBike</h1>
        <p className="subtitle">Encontre as rotas menos cansativas para suas entregas de bike</p>
      </header>

      <main className="content-glass">
        <section className="glassmorphism-card" style={{ marginBottom: '24px' }}>
          <h2>Sobre o SmartBike</h2>
          <p>
            O SmartBike é um aplicativo desenvolvido para ajudar entregadores de bicicleta a encontrar as rotas mais eficientes e menos cansativas, considerando fatores como elevação, tipo de superfície, tráfego e condições climáticas.
          </p>
        </section>

        <section className="glassmorphism-card" style={{ marginBottom: '24px' }}>
          <h2>Funcionalidades</h2>
          <ul className="features-list">
            <li>Análise de elevação do terreno para minimizar subidas íngremes</li>
            <li>Detecção de tipo de superfície da rua (evitando chão ruim ou não pavimentado)</li>
            <li>Integração com dados de tráfego em tempo real para escolher rotas mais tranquilas</li>
            <li>Consideração de distância e tempo estimado</li>
            <li>Inclusão de condições climáticas quando disponíveis</li>
            <li>Interface intuitiva para inserção de pontos de entrega e visualização de rotas</li>
            <li>Algoritmo de otimização personalizado para esforço físico do ciclista</li>
          </ul>
        </section>

        <section className="glassmorphism-card" style={{ marginBottom: '24px' }}>
          <h2>Como funciona</h2>
          <p>
            O SmartBike utiliza as APIs do Google Maps para analisar rotas considerando:
          </p>
          <ol className="steps-list">
            <li>Coleta do ponto de partida e pontos de entrega fornecidos pelo usuário</li>
            <li>Consulta às APIs do Google Maps para obter dados de elevação, superfície e tráfego</li>
            <li>Processamento dos dados através de nosso algoritmo de otimização de esforço físico</li>
            <li>Geração da rota recomendada com visualização em mapa interativo</li>
            <li>Fornecimento de instruções de turno a turno e estimativas de tempo e esforço</li>
          </ol>
        </section>

        <section className="glassmorphism-card" style={{ marginBottom: '0' }}>
          <h2>Contato</h2>
          <p>
            Tem dúvidas, sugestões ou quer parceria com o SmartBike? Entre em contato conosco:
          </p>
          <p>
            📧 <a href="mailto:contato@smartbike.app">contato@smartbike.app</a>
          </p>
          <p>
            📱 WhatsApp: <a href="https://wa.me/5511999999999">(11) 99999-9999</a>
          </p>
          <p>
            📍 Sede: Rua das Entregas, 123 - São Paulo, SP
          </p>
        </section>
      </main>

      <footer className="header-glass">
        <p>&copy; {new Date().getFullYear()} SmartBike - Rotas inteligentes para entregadores de bike</p>
      </footer>
    </div>
  );
}

export default App;