function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let deuErro = false;
            if(!deuErro){
                resolve({time: 6, to:"anderson@gmail.com"});
            }else{
                reject("Fila Cheia");
            }
        },4000);
    });
}
enviarEmail("Ola,","anderson.silveira@tech.com"). then(({time,to}) =>{

console.log(`

        time: ${time} 
        ---------------
        to:${to}

`)

}).catch((erro) =>{
    console.log("Opa, nao deu." + erro)
});