const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function TodoList() {
  
    return (
        <>
        <ul>
          <h1>ARTHUR AZEVEDO COSTA DE PAULA</h1>
          <br></br>
            <p>
              &#34 Estudante de programação. Comecei aprendendo a lógica com Java, onde trabalhei com exercícios para organizar informações, resolver problemas matemáticos e usar repetições para criar padrões. Agora, estou no processo de aprender a criar sites e componentes usando React e Next.js. Já consegui configurar meu primeiro projeto e construir meu primeiro componente. Tenho me esforçado para entender os conceitos por trás do código e resolver os desafios que aparecem. Estou no começo da minha jornada, e animado para continuar construindo minhas habilidades como desenvolvedor web. &#34
            </p>
            <br></br>
            <p>Minhas tarefas para hoje:</p>
            <br></br>
            <li>Estudar JavaScript</li>
            <li>Aprender React</li>
            <li>Praticar Next.js</li>
            
        </ul>
        </>
    );
}