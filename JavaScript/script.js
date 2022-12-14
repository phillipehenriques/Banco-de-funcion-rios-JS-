
let Patricia = {
    id: 1,
    imagem: 'imagens/patricia.png',
    nome: 'Patricia',
    sexo: 'Feminino', 
    cargo: 'Analista de recursos humanos',
    setor: 'RH',
    contratacao: '06.08.2022',
    desligamento: 'x',
    tempo: '01 dia(s)',
}

let Rafael = {
    id: 2,
    imagem: 'imagens/rafael.png',
    nome: 'Rafael',
    sexo: 'Masculino',
    cargo: 'Analista de rede', 
    setor: 'Help Desk',
    contratacao: '06.08.2022',
    desligamento: 'x',
    tempo: '01 dia(s)',
}

let Carol = {
    id: 3,
    imagem: 'imagens/carol.png',
    nome: 'Carol',
    sexo: 'Feminino',
    cargo: 'Designer', 
    setor: 'UI/UX Designer',
    contratacao: '06.08.2022',
    desligamento: 'x',
    tempo: '01 dia(s)',
}

let Rodrigo = {
    id: 4,
    imagem: 'imagens/rodrigo.png',
    nome: 'Rodrigo',
    sexo: 'Masculino',
    cargo: 'Vendedor', 
    setor: 'Vendas',
    contratacao: '06.08.2022',
    desligamento: 'x',
    tempo: '01 dia(s)',
}

let Daniel = {
    id: 5,
    imagem: 'imagens/daniel.png',
    nome: 'Daniel',
    sexo: 'Masculino',
    cargo: 'SEO',
    setor: 'Gerencia',
    contratacao: '06.08.2022',
    desligamento: 'x',
    tempo: '01 dia(s)',
}

let funcionarios = [Patricia, Rafael, Carol, Rodrigo, Daniel]

let select = document.querySelector('select')
funcionarios.forEach((element) => {
    select.options.add(new Option(element.nome, element.id))
})

function changeEmployee(changeValue) {
    
    let employee = funcionarios.find(x => x.id == changeValue)
    
    // alert(typeof(changeValue)) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // let employee = null
    // for (var index=0; index <= funcionarios.length; index++) {
    //     if (funcionarios[index].id === changeValue) {
    //         employee = funcionarios[index]
    //     } 
    // }

    // --------------------- TENTATIVA 1

     let perfil = document.getElementById('imagem') 

    perfil.src = employee.imagem

    // --------------------- TENTATIVA 2

    // let perfil = document.getElementById('imagem')

    // function searchImage(changeValue) {
    //     let employee = funcionarios.find(x => x.imagem == changeValue) <--------- quase cheguei la eu acho

    // ---------------------- CONTINUA????O

    // let foto = document.getElementById('imagem').innerHTML = foto.src = '/imagens/daniel.png'// <img src="imagens/ + funcionarios.imagem" alt="" srcset="">
    let nome = document.getElementById('name').innerHTML = employee.nome
    let sexo = document.getElementById('sex').innerHTML = employee.sexo
    let cargo = document.getElementById('position').innerHTML = employee.cargo
    let setor = document.getElementById('sector').innerHTML = employee.setor
    let contratacao = document.getElementById('hiring-date').innerHTML = employee.contratacao
    let desligamento = document.getElementById('risignation-date').innerHTML = employee.desligamento
    let tempo = document.getElementById('total-time').innerHTML = employee.tempo

 // selecionar na lista funcionarios qual ?? o funcion??rio cujo Id ?? igual ao id que estou recebendo no changeValue.
 // pegar todas as informa????es desse funcionario selecionado e adicionar ao innerHTML de cada um dos campos na tela.
}
