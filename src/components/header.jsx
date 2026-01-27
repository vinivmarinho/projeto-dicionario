// Arquivo cria componente para o cabeçalho e a barra de pesquisa
import logo from "../assets/logo.svg"; // Importa a logo
import "../style/header.css"; // Importa o arquivo de estilo
export default function Header({ font, setFont }) {
  return (
    <header className="header">
      <Logo />
      <ChooseFont font={font} setFont={setFont}/>
      <input type="checkbox" />
    </header>
  );
}
// Componente da logo
function Logo() {
  return <img src={logo} alt="Logo" />;
}

// Controla a escolha da fonte
function ChooseFont({ font, setFont }) {
  const fonts = ["Inter", "Poppins", "Roboto", "Merriweather"]; // Lista de fontes
  return (
    // "select" cria o menu. O "value" é a opção que está selecionada do estado "fonte"
    // O "onChange" dispara quando o usuário escolhe outra opção, depois atualiza o estado
    // Uso o método "map" para criar as opções do menu percorrendo a lista de fontes
    // Obs: o "evento.target" é o elemento HTML que disparou o evento. (<select>, <input> ou <textarea> )
    <select value={font} onChange={(event) => setFont(event.target.value)}>
      {fonts.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
}

// Próximo passo => Adicionar a funcionalidade que mude a fonte da página de acordo com a escolha do usuário de fato

