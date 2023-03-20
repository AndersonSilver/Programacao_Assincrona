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
            let deuErro = false;
            if(!deuErro){
                resolve({time: 6, to:"anderson@gmail.com"});
            }else{
                reject("Fila Cheia");
            }
        },1000);
    });
}


/*
function pegarUsuario(){
    return new Promise((resolve, reject) =>{
        resolve([
            {nome: "Anderson", idade: 26},
            {nome: "Lara", idade: 2},
            {nome: "Majo", idade: 42}
        ])
    })
}

async function principal(){
    let usuarios = await pegarUsuario()
    console.log(usuarios)
}
principal();
*/
async function principal(){
    let id = await pegarID();
    let emailBanco = await buscarEmailNoBanco(id);
    enviarEmail("Ola, como vai:",emailBanco).then(()=>{
        console.log("Email Enviado");
    }).catch(erro =>{
        console.log(erro)
    })
}

principal();



/*
pegarID().then((id) =>{
    buscarEmailNoBanco(id).then((email)=>{
        enviarEmail("Ola, como vai:",email).then(()=>{
            console.log("Email enviado com id:"+id)
        }).catch((err)=>{
            console.log(err)
        })
    })   
})
*/