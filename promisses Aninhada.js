function pegarID(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(5);
        },1500);
    });
}

function buscarEmailNoBanco(id){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("andersonsilver18@gmail.com");
        },2000);
    });
}

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

pegarID().then((id) =>{
    buscarEmailNoBanco(id).then((email)=>{
        enviarEmail("Ola, como vai:",email).then(()=>{
            console.log("Email enviado com id:"+id)
        }).catch((err)=>{
            console.log(err)
        })
    })   
})