const CarService = require('../Services/CarService.js')

module.exports = {

    SearchAll: async (req, res) => {

        let json = {error:'', result:[]}
        let cars = await CarService.SearchAll()

        for(let i in cars){
            json.result.push({
                ID: cars[i].ID,
                Modelo: cars[i].Modelo,
                Placa: cars[i].placa,
                Ano: cars[i].Ano,
                KmRodados: cars[i].kmRodados
            })
        }
        res.json(json)

    },
    
    SearchOne: async(req, res) => {

        let json = {error:'', result:{}};
        let id = req.params.id
        let car = await CarService.SearchOne(id)

        if(car){
            json.result = car
        }

        res.json(json)

    },

    InsertCar: async(req, res) => {

        let json = {error:'', result:{}};

        let modelo = req.body.modelo
        let placa = req.body.placa
        let ano = req.body.ano
        let km = req.body.kmRodados

        if(modelo && placa && ano && km){
            let carCode = await CarService.InsertCar(modelo, placa, ano, km)
            json.result = {
                Codigo: carCode,
                modelo,
                placa,
                ano,
                km
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json)
    },

    AlterCar: async(req, res) => {

        let json = {error:'', result:{}};

        let id = req.params.id
        let modelo = req.body.modelo
        let placa = req.body.placa
        let ano = req.body.ano
        let km = req.body.kmRodados

        if(id && modelo && placa && ano && km){
            await CarService.AlterCar(id, modelo, placa, ano, km);
            json.result = {
                id,
                modelo,
                placa,
                ano,
                km
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    DeleteCar: async(req, res) =>{

        let json = {error:'', result:{}};
        
        await CarService.DeleteCar(req.params.id);

        res.json(json);
    },
}