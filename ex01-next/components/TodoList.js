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
            <p>Desenvolvedor em formação com uma base sólida em lógica de programação e algoritmos, adquirida através do domínio de conceitos essenciais em Java. Em transição para o ecossistema de front-end, onde venho aplicando meu raciocínio lógico em projetos com JavaScript, React e Next.js. Sou um aprendiz persistente e detalhista, com experiência prática em criação de componentes, manipulação de fluxo de controle (laços aninhados) e resolução de erros de compilação, sempre focado em construir aplicações web robustas e funcionais.</p>
        </ul>
        </>
    );
}