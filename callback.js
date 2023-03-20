function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        let deuErro = true;
        if (deuErro){
            callback(12,"O envio de email falhou")
        }else{
            callback(12)
        }
    }, 100)
}
console.log("Inicio de envio de um email");
enviarEmail("Oi, o email acaba de ser enviado","anderson.silver@tech4.com",(time,erro) => {

    if(erro == undefined){ //Nao deu nenhum erro
        console.log(`
            TIME: ${time}
            Sem nenhuma avaria
        `)
    }else{//Deu algum erro
        console.log(`
            TIME: ${time}
            ERRO: ${erro}
        `)
    }
})