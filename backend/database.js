const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/livros.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IT NOT EXISTS livros (
            id INTEDER PRIMARY KEY AUTOICREMENT,
            titulo TEXT,
            autor TEXT,
            nota INTEGER,
            favorito BOOLEAN,
            data TEXT
        )
    `);
});

export default db;