import fastify from "fastify"
import { createPoll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"
import { voteOnPoll } from "./routes/vote-on-poll"
import cookie from "@fastify/cookie"

//quando o usuário acessar o endereço /hello, queremos executar a função abaixo
/*app.get('/hello', () => {
    return 'Hello NLW'
})*/

const app = fastify()

app.register(cookie, {
    secret: 'polls-app-nlw',
    hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

//ouvir a porta 3333 e quando o server entrar no ar, será exibida a mensagem abaixo
app.listen({port: 3333}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})