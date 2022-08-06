
let Patricia = {
    foto: 'imagens/patricia.png',
    nome: 'Patricia',
    sexo: 'F', 
    setor: 'RH' ,
    tempo: '3 anos e 4 meses'
}

let Rafael = {
    nome: 'Rafael',
    sexo: 'M', 
    setor: 'Help Desk' ,
    tempo: '9 meses'
}

let Carol = {
    nome: 'Carol',
    sexo: 'F', 
    setor: 'UI/UX Designer' ,
    tempo: '1 ano e 5 meses'
}

let funcionarios = [Patricia, Rafael, Carol]

let select = document.querySelector('select')
funcionarios.forEach((element) => {
    select.options.add(new Option(element.nome, element.name))
})

console.log(funcionarios[4].nome)

function selecionar() {
    let funcionarios = document.getElementById('patricia')
    if (funcionarios != null) {
        funcionarios.innerHTML = '<img class="#" src="imagens/'+ id +'.jpg" alt=""/>'
      }
}