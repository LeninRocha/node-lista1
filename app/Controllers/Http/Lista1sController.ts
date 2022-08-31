// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista1sController {
    ex1({request}){
        let req = request.body()
        let min = parseInt(req.min)
        let max = parseInt(req.max)
        let media = (min + max) / 2
        return {media}
    }
    ex2({request}){
        let req = request.body()
        let funcionario = req.funcionario
        let hrsTrabalho = parseInt(req.hrsTrabalho)
        let valorHrs = parseInt(req.valorHrs)
        let numeroFilhos = parseInt(req.numeroFilhos)

        let salarioHrs = hrsTrabalho * valorHrs
        let bonusFilho = (salarioHrs  * 0.03) * numeroFilhos
        let salarioTotal =  salarioHrs +  bonusFilho

        let resultado = {
            funcionario: funcionario,
            salario: salarioHrs,
            bonus: bonusFilho,
            total: salarioTotal
        }
        return resultado

    }
    ex3({request}){
        let req = request.body()
        let ano = parseInt(req.ano)
        let meses = parseInt(req.meses)
        let dias = parseInt(req.dias)

        let resultado = (ano * 365) + (meses *30) + dias
        return {resultado}

    }
    ex4({request}){
        let req = request.body()
        let dias = parseInt(req.dias)
        let anosResto = (dias % 365)
        let anos = (dias - anosResto) / 365
        let mesesResto = anosResto % 30
        let meses = (anosResto - mesesResto) / 30
        
        let resultado = {
            anos : anos,
            meses: meses,
            dias : mesesResto
        }
        return resultado
    }
    ex5({request}){
        let req = request.body()
        let n1 = parseInt(req.n1)
        let n2 = parseInt(req.n2)
        let n3 = parseInt(req.n3)

        let resultado = ((n1 * 2) + (n2 * 3) + (n3 *5)) / ( 2 + 3 + 5)

        return {resultado}

    }
    ex6({request}){
        let req = request.body()
        let seg = parseInt(req.seg)
        let segundos = (seg % 60)
        let minutos = (seg - segundos) % 60
        let minRest = (minutos % 60)
        
        let resultado = {
            segundos: segundos,
            minutos: minutos,
            horas: minRest

        }
        return resultado

    }
}
