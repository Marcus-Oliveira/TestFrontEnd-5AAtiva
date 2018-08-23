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
    let APIs = {
        'marvelAPI'  : 'https://appsegurosgatewaydev.azure-api.net/',
    }

    /**
        Subistituindo os endereços das APIs conforme os ambientes
        Estou utilizando o environment como base. Cada ambiente
        Dev/localhost, hml, e prod.        
    */
    switch(environment) {
        case 'development':
            return {
                ...APIs, 
                'marvelAPI'  : 'https://gateway.marvel.com:443/v1/public/'
            }
            break
        case 'hml':
            return {
                ...APIs, 
                'marvelAPI'  : 'https://gateway.marvel.com:443/v1/public/'
            }
            break
        case 'production':
            return {
                ...APIs, 
                'marvelAPI'  : 'https://gateway.marvel.com:443/v1/public/'
            }
            break
        default:
            return {
                ...APIs, 
                'appseguros'  : 'https://gateway.marvel.com:443/v1/public/'
            }
            break
    }
}

export const urlAPIs = definirUrlAPIsConformeAmbinete()