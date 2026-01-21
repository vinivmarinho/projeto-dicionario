// Componente Container que renderiza uma div envolvendo seus children
// children é uma prop especial do React que representa o conteúdo interno do componente
export default function Container({ children }) {
    return (
        <div className="container">{children}</div>
    )
}