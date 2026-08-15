# SmartBike - App para Detecção de Rotas Menos Cansativas para Entregadores de Bike

## Visão Gerola

SmartBike é um aplicativo React desenvolvido para ajudar entregadores de bicicleta a encontrar rotas mais eficientes e menos cansativas para suas entregas. Utilizando as APIs do Google Maps, o app analisa diferentes fatores que afetam o esforço físico do ciclista, como:

- Elevação do terreno (subidas e descidas)
- Tipo de superfície da rua
- Volume de tráfego
- Condições climáticas
- Distância total

## Funcionalidades Principais

- **Entrada de Destino**: Permite ao usuário inserir pontos de partida e destino
- **Análise de Rota**: Calcula múltiplas opções de rota com foco em minimizar esforço físico
- **Visualização em Mapa**: Exibe as rotas sugeridas em um mapa interativo
- **Métricas de Esforço**: Mostra estimativas de elevação acumulada, velocidade média esperada e nível de esforço
- **Modo Entregador**: Otimizado para múltiplas paradas em sequência típicas de entregas

## Tecnologias Utilizadas

- **React** com Vite para desenvolvimento rápido
- **Google Maps JavaScript API** para mapas e serviços de rota
- **Google Maps Elevation API** para dados de elevação do terreno
- **Google Maps Roads API** para informações sobre superfícies de estrada
- **CSS Modules** ou **Tailwind CSS** para estilização (a ser definido)
- **React Router** para navegação entre páginas
- **Context API** ou **Redux** para gerenciamento de estado (a ser definido)

## Como Executar Localmente

1. Clone este repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure suas APIs do Google Maps:
   - Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/)
   - Ative as APIs necessárias: Maps JavaScript API, Elevation API, Roads API, Directions API
   - Gere uma chave de API
   - Crie um arquivo `.env` na raiz do projeto com:
     ```
     VITE_GOOGLE_MAPS_API_KEY=sua_chave_aqui
     ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse `http://localhost:5173` no seu navegador

## Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── pages/          # Páginas principais da aplicação
├── hooks/          # Custom hooks para lógica de negócio
├── utils/          # Funções utilitárias e helpers
├── services/       # Serviços para integração com APIs externas
├── styles/         # Arquivos de estilo
├── App.jsx         # Componente raiz
└── main.jsx        # Ponto de entrada
```

## Próximos Passos de Desenvolvimento

- [ ] Configurar autenticação com Google Maps APIs
- [ ] Implementar cálculo de rotas com otimização de esforço
- [ ] Criar interface de entrada de pontos de entrega
- [ ] Desenvolver visualização de métricas de esforço
- [ ] Adicionar suporte a múltiplos pontos de entrega (rota otimizada)
- [ ] Implementar modo offline para áreas com conexão limitada
- [ ] Adicionar histórico de rotas e estatísticas de desempenho
- [ ] Criar versão para dispositivos móveis (PWA ou React Native)

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Seu Nome - [seuemail@exemplo.com](mailto:seuemail@exemplo.com)

Link do Projeto: [https://github.com/seuusuario/smartbike](https://github.com/seuusuario/smartbike)