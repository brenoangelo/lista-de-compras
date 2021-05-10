/* LEMBRETE! */
/* FINALIZAR PERSISTENCIA DE DADOS NO NAVEGADOR */
/* */

 /*const listaProdutos = [] */
 var listaProdutos = localStorage.getItem('listaProdutos')
 listaProdutos = JSON.parse(listaProdutos)

 if(listaProdutos == null){
    listaProdutos = []
 }

exibir()

function prodIgual(produto){
    var nome = document.querySelector('#nome').value
    produto = JSON.parse(produto)
    
    return produto.nome.toLowerCase() === nome

}


function exibir(){
    var total = 0
    var table = document.querySelector('table')
    var body_total = document.querySelector('.valor-total h3:nth-of-type(2)')

    table.innerHTML = `<tr>
                            <th>Produto</th>
                            <th>Valor</th>
                        </tr>
                        
                        `
    
    listaProdutos.forEach((value,index)=>{
         var prod = JSON.parse(listaProdutos[index])
         
         total = total + parseFloat(prod.valor)

       
        table.innerHTML+= `<td class="nome-estilo">${prod.nome} 
        <span class="btn-remover"><i class="far fa-trash-alt"></i></span></td>
                            <td class="valor-estilo">R$ ${prod.valor}</td>`
        
    })

    body_total.innerHTML = `R$ ${total}`

    removerProduto()
    
}




function testar(){
    
    /* VARIAVEIS */
    var nome_produto = document.querySelector('#nome').value
    var valor_produto = document.querySelector('#valor').value
    
    
    if(listaProdutos.find(prodIgual) !== undefined){
        alert('Produto já está na lista')
        return false
    } 

        /*Valida se foi preenchido */
    if(nome_produto == "" || valor_produto == ""){
        
        return false
    }
    
        /*Valida se o valor é igual ou menor que 0 */
    if(valor_produto <= 0){
        alert('Valor inválido')
        return false
    }

    
    adicionar(nome_produto, valor_produto)
    exibir()
}


function adicionar(nome, valor){
    /*const item = new Object()
    item.nome = nome
    item.valor = valor
    */

    const item = JSON.stringify({
        nome: nome,
        valor: valor
    })
    listaProdutos.push(item)
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos))
    
    return true
}



function removerProduto(){
    var btn_remover = document.querySelectorAll('.btn-remover')
    btn_remover.forEach((value, index)=>{
        
        btn_remover[index].addEventListener('click', ()=>{
            
            listaProdutos.splice(index, 1)
            localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos))
            exibir()
            
        })
        
        
    })
    
}

function limparCampos(){
    var input = document.querySelectorAll('input')

    input.forEach((value)=>{
        value.addEventListener('click', ()=>{
            value.value = ""
        })
    })
    
}




    

    
