let funcionarios = {
    nome: 'Patricia, Rafael, Carol, Daniel, Rodrigo',
    sexo: 'F, M, F, M, M', 
    setor: 'RH' ,
    tempo: '14 meses'
}

// ou //

let Patricia = {
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

console.log(Algumacoisaaquidentroprapesquisar)

function selecionar() {
    let funcionarios = document.getElementById('patricia')
    if (funcionarios != null) {
        funcionarios.innerHTML = '<img class="#" src="imagens/'+ id +'.jpg" alt=""/>'
      }
}