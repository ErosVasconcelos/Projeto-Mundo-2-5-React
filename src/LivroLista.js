import React, { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const controleLivro = new ControleLivros();
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const excluirLivro = (codigo) => {
        const controleLivro = new ControleLivros();
        controleLivro.excluir(codigo);
        setCarregado(!carregado);
    };

    const controleEditora = new ControleEditora();

    const LinhaLivro = ({ livro, excluir }) => {
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

        return (
            <tr>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{nomeEditora}</td>
                <td>{livro.resumo}</td>
                <td>
                    <ul>
                        {livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
                <td>
                    <button onClick={() => excluir(livro.codigo)}>Excluir</button>
                </td>
            </tr>
        );
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Título</th>
                        <th>Editora</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
