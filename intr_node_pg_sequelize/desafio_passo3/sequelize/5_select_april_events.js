const Sequelize = require('sequelize')
const models = require('./models')
const moment = require('moment')
const Op = Sequelize.Op

async function april_events() {
    //Regra 1 : Listar apenas eventos para o mês de abril  
    const eventosComParticipantes = await models.evento.findAll({
        where: {
            data: {
                [Op.between]: ['2020-04-01', '2020-04-30']
            }
        },
        include: [{
            model: models.participante,
        }]
    })
    eventosComParticipantes.forEach((evento) => {
        console.log("\nEvento: ", evento.nome)
        console.log("Data: ", moment(evento.data).format('DD/MM/YYYY'))
        evento.participantes.forEach((participante) => {
            console.log("----------> Participante: ", participante.nome)
        })
    })
    console.log("\n");

    await models.sequelize.close()
}
april_events()