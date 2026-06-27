const EventEmitter = require('events');

const emissor = new EventEmitter();

class Notificador extends EventEmitter {

    enviarEmail(para, assunto, corpo) {
        const email = { para, assunto, corpo, new: Date() };
        this.emit('EmailEnviado', email);
    }

    enviarSMS(mensagem, numero) {
        const sms = { mensagem, numero, new: Date() };
        this.emit("SMSEnviado", sms);
    }
}


const notificador = new Notificador();

notificador.on("EmailEnviado", (email) => {
    console.log("Email enviado");
    console.log(`Enviado para: ${email.para}`)
    console.log(`Assunto: ${email.assunto}`)
})

notificador.on("SMSEnviado", (sms) => {
    console.log("SMS enviado");
    console.log(`Enviado para: ${sms.numero}`)
    console.log(`Mensagem: ${sms.mensagem}`)
})

module.exports = notificador