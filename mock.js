// This is a (sample) collection of properties we'll be able to query
// the GraphQL server for. A more complete example might fetch
// from an existing data source like a REST API or database.

// Data mock
const properties = [
    {
        id: 0,
        title: 'Apartamento bonitão',
        neighborhood: 'Consoloacão',
        likes: 0,
        price: 450000,
        contacts: [
            {
                id: 0,
                name: "Maria",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Ricardo",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 1,
        title: 'Casa arrumadinha',
        neighborhood: 'Santana',
        likes: 1,
        price: 510300,
        contacts: [
            {
                id: 0,
                name: "Pessoa",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Homo Sapiens",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 2,
        title: 'Apartamento com 3 quartos no Jardins',
        neighborhood: 'Jardins',
        likes: 10,
        price: 3650999,
        contacts: [
            {
                id: 0,
                name: "Morty",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Ricky",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 3,
        title: 'Apartamento no Jabaquara',
        neighborhood: 'Jabaquara',
        likes: 15,
        price: 690000,
        contacts: [
            {
                id: 0,
                name: "Cássia",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Marcelo",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 4,
        title: 'Casa pequena do vovó do UP',
        neighborhood: 'Centro',
        likes: 5,
        price: 1000000,
        contacts: [
            {
                id: 0,
                name: "Diego",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Ana Paula",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 5,
        title: 'Apartamento antigo',
        neighborhood: 'Butantã',
        likes: 0,
        price: 390000,
        contacts: [
            {
                id: 0,
                name: "Serafina",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Porche",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 6,
        title: 'Apartamento de 1 quarto',
        neighborhood: 'Consoloacão',
        likes: 3,
        price: 750000,
        contacts: [
            {
                id: 0,
                name: "Greg",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Marta",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 7,
        title: 'Casa com 2 suites',
        neighborhood: 'Morumbi',
        likes: 8,
        price: 1450000,
        contacts: [
            {
                id: 0,
                name: "Sinthia",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Cleusa",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 8,
        title: 'Apartamento com 1 banheiro',
        neighborhood: 'Santana',
        likes: 1,
        price: 300000,
        contacts: [
            {
                id: 0,
                name: "Mariana",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Beto Guedes",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 9,
        title: 'Apartamento especial',
        neighborhood: 'Centro',
        likes: 2,
        price: 510000,
        contacts: [
            {
                id: 0,
                name: "Ayrton Mega Senna",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Rubens Pé de Chinelo",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 10,
        title: 'Casa arrumadinha 2',
        neighborhood: 'Santana',
        likes: 3,
        price: 520500,
        contacts: [
            {
                id: 0,
                name: "Malcom",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Sandra",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 11,
        title: 'Apartamento com 4 quartos em Pinheiros',
        neighborhood: 'Pinheiros',
        likes: 12,
        price: 1100000,
        contacts: [
            {
                id: 0,
                name: "Interessado 0",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Alguém",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 12,
        title: 'Apartamento em Interlagos',
        neighborhood: 'Interlagos',
        likes: 7,
        price: 690000,
        contacts: [
            {
                id: 0,
                name: "Quem sera?",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Um ser humano",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 13,
        title: 'Casa da vó querida',
        neighborhood: 'Vila Madalena',
        likes: 30,
        price: 750000,
        contacts: [
            {
                id: 0,
                name: "Lindeza",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Lindinha",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 14,
        title: 'Apartamento antigo',
        neighborhood: 'Butantã',
        likes: 0,
        price: 390000,
        contacts: [
            {
                id: 0,
                name: "Neto",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Cinthia",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    },
    {
        id: 15,
        title: 'Apartamento bonitão',
        neighborhood: 'Consoloacão',
        likes: 0,
        price: 450000,
        contacts: [
            {
                id: 0,
                name: "Hilary",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
            {
                id: 1,
                name: "Que?",
                "message": "Oi, queria saber mais sobre o imóvel!"
            },
        ]
    }
];

const propertyList = {
    properties
}

module.exports.propertyList = propertyList