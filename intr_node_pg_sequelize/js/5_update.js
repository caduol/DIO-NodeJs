// Exercicio
const db = require('./_database')

const update = (async() => {

    await db.connect()

    // ATUALIZANDO NOME DE PARTICIPANTE
    let id = 1
    let query = {
        text: "UPDATE participante SET nome = 'Carlos Augusto' WHERE id=$1",
        values: [id]
    }

    db.query(query)
        .then(res => {
            console.log(res.rows[0])
        })
        .catch(err => {
            console.log(err)
        })

    // REMOVENDO PARTICIPANTE
    query = {
        text: "DELETE FROM evento_participante WHERE participante_id=$1",
        values: [id]
    }

    db.query(query)
        .then(res => {
            console.log(res.rows[0])
        }).catch(err => {
            console.log(err)
        })

})()