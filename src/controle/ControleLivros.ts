import Livro from "../modelos/Livro";
import 'bootstrap/dist/css/bootstrap.css';

class ControleLivros {
    livros: Livro[];

    constructor() {
        this.livros = [
            new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1", "Autor 2"]),
            new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 3"]),
            new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 4", "Autor 5"])
        ];
    }

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        livro.codigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
