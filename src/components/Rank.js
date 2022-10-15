export default function Rank({ index, name, linksCount, visitCount }) {
    return (
        <li>
            {index}. {name} - {linksCount} links - {visitCount} visualizações
        </li>
    );
}