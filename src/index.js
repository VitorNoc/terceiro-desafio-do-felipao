class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    efetuarAtaque(){
        const ataques = {
            'mago'  : "usou magia",
            'guerreiro' : "usou espada",
            'monge' : "usou artes marciais",
            'ninja' : "usou shuriken"
        };
        return ataques[this.tipo.toLowerCase()] || 'usou um ataque desconhecido'

    }

    atacar(){
        const ataque = this.efetuarAtaque()
        console.log("O " + $(this.tipo) + "atacou usando " + $(this.ataque))
    }
}

const herois = [
    new Heroi('Merlin', 150, 'mago'),
    new Heroi('Arthur', 70, 'guerreiro'),
    new Heroi('Paul', 50, 'monge'),
    new Heroi('Uzui', 35, 'ninja')
]

herois.forEach(heroi => heroi.atacar())




