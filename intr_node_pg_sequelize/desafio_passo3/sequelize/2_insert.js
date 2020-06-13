const models = require('./models')

async function insert() {

    //Eventos
    const eventoNode = await models.evento.create({
        nome: 'Encontro de Nodejs',
        data: new Date(2020, 3, 20)
    })

    const eventoPostgres = await models.evento.create({
        nome: 'Encontro de Postgresql',
        data: new Date(2020, 5, 20)
    })

    const eventoJavascript = await models.evento.create({
        nome: 'Encontro de Javascript',
        data: new Date(2020, 3, 11)
    })

    const eventoVue = await models.evento.create({
        nome: 'Encontro de Vue',
        data: new Date(2020, 3, 18)
    })

    const eventoReact = await models.evento.create({
        nome: 'Encontro de React',
        data: new Date(2020, 6, 25)
    })

    const eventoDocker = await models.evento.create({
        nome: 'Encontro de Docker',
        data: new Date(2020, 7, 1)
    })

    const eventoWebpack = await models.evento.create({
        nome: 'Encontro de Webpack',
        data: new Date(2020, 7, 8)
    })

    //Participantes
    const carlos = await models.participante.create({ nome: 'Carlos' })
    const augusto = await models.participante.create({ nome: 'Augusto' })
    const janaina = await models.participante.create({ nome: 'Janaína' })
    const rafael = await models.participante.create({ nome: 'Rafael' })


    //Participantes em eventos
    await eventoNode.setParticipantes([carlos, augusto, janaina])
    await eventoPostgres.setParticipantes([janaina, rafael])
    await eventoJavascript.setParticipantes([carlos, augusto, rafael, janaina])
    await eventoVue.setParticipantes([carlos, augusto, rafael])
    await eventoReact.setParticipantes([augusto, janaina])
    await eventoDocker.setParticipantes([carlos, rafael])
    await eventoWebpack.setParticipantes([carlos, augusto, janaina])

    await models.sequelize.close()

    console.log("Dados Inseridos");
}
insert()