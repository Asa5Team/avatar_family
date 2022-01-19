function testeError() {
    console.log("Inicio")
    funcao2()
    throw new Error('Erro aconteceu')
}

function funcao2(){
    console.log('funcao 2')
    throw new Error('Erro aconteceu funcao 2')
}

try {
    const error = testeError()
    console.log(error.message)
} catch (e) {
    console.log('Catch do main')
    console.log(e.message)
}