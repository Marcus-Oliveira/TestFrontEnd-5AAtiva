// Arquivo para configurações que sejam úteis para o projeto como um todo
// Por exemplo variáveis de ambiente
// Funções de uso global

// Definiando a URL das apis conforme os ambientes
// dev/localhost, hml ou prod
let definirUrlAPIsConformeAmbinete = () => {
    let environment = process.env.NODE_ENV
    
    //Nesta variável srerão definidos as urls
    //das APIs conforme o ambiente da aplicação

    //Configurar o estado inicial com os endereços de DEV
    return{
        'marvelAPI'  : 'https://gateway.marvel.com:443/v1/public/',
    }
}

export const urlAPIs = definirUrlAPIsConformeAmbinete()