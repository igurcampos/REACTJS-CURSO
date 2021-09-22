import { RepositoryItem } from "./RepositoryItem";

const entendo = {
    name: "Entendendo a propriedade",
    description:"qualquer coisa",
    link: "https://www.instagram.com/"
 }
 const outro = {
    name: "No reactJS usando props na função como parâmetro?",
    description:"qualquer outra coisa",
    link: "https://www.instagram.com/"
 }

export function RepositoryList() {
    return (
        <section className="repository-list" >
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem repository ={entendo} />
               <RepositoryItem repository ={outro} />
               <RepositoryItem repository ={entendo} />
               <RepositoryItem repository ={entendo} />
               <RepositoryItem/>
            
            </ul>
        </section>
    );
}