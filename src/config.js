// Arquivo para configurações que sejam úteis para o projeto como um todo
// Por exemplo variáveis de ambiente
// Funções de uso global

// Definiando a URL das APIs conforme os ambientes
// dev/localhost, hml ou prod
let definirUrlAPIsConformeAmbinete = () => {
    //Nesta variável srerão definidos as urls
    //das APIs conforme o ambiente da aplicação

    //Configurar o estado inicial com os endereços de DEV
    return{
        'marvelAPI'  : 'https://gateway.marvel.com:443/v1/public/',
    }
}

export const urlAPIs = definirUrlAPIsConformeAmbinete()

export const publicKey = 'ab23d2daf8aa099290ffea13df22aca0'

export const privateKey = 'f4a90808506c3d9e21dab7a23d720b2136c22861'