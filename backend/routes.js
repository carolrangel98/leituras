// rota para listar livros
app.get("/livros", (req, res) => {
    db.all("SELECT * FROM livros", [], (err, rows) => {
        res.json(rows);
    });
});

// rota para adicionar livro
app.post("/livros", (req, res) => {
    const { titulo, autor, nota, favorito, data } = req.body;

    db.run(
        `INSERT INTO livros (titulo, autor, nota, favorito, data)
        VALUES (?, ?, ?, ?, ?)`,
        [titulo, autor, nota, favorito, data],
        function (err) {
            res.json({ id: this.lastID });
        }
    );
});

// editar livro
app.put("/livros/:id", (req, res) => {
    const { titulo, autor, nota, favorito } = req.body;

    db.run(
        `UPDATE livros
        SET titulo=?, autor=?, nota=?, favorito=?
        WHERE id=?`,
        [titulo, autor, nota, favorito, req.params.id],
        () => res.sendStatus(200)
    );
});

// excluir livro
app.delete("/livros/:id", (req, res) => {
    db.run(
        `DELETE FROM livros WHERE id=?`,
        [req.params.id],
        () => res.sendStatus(200)
    );
});

// calcular média das notas
app.get("/media", (req,res) => {
    db.get(
        `SELECT AVG(nota) as media FROM livros`,
        [],
        (err, row) => {
            res.json(row);
        }
    );
});