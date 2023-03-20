function pegarID(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(5);
        },1000);
    });
}

function buscarEmailNoBanco(id){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("andersonsilver18@gmail.com");
        },1000);
    });
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let deuErro = true;
            if(!deuErro){
                resolve({time: 6, to:"anderson@gmail.com"});
            }else{
                reject("Fila Cheia");
            }
        },1000);
    });
}
async function principal(){
    let id = await pegarID();
    let emailBanco = await buscarEmailNoBanco(id);
    
    try{
       await enviarEmail("ola, como vai?", emailBanco);
        console.log("Email enviado");
    }catch(erro){
        console.log(erro)
    }
}

principal();