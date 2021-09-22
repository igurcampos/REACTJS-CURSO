export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "Defaut"}</strong>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.link}>
                Acessar repositorio
            </a>
        </li>
    );
}
// ?? = caso tiver vazio usa-se para nomear ex: 'defaut'