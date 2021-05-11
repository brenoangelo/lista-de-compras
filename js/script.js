/* LEMBRETE! */
/**/
/* */

 /*const listaProdutos = [] */
 var listaProdutos = localStorage.getItem('listaProdutos')
 listaProdutos = JSON.parse(listaProdutos)

 var olho_aberto = document.querySelector('#olho-aberto')
 var olho_fechado = document.querySelector('#olho-fechado')
 var valor_total = document.querySelector('.valor-total > h3:nth-of-type(2) > strong')

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
    // Variáveis
    var total = 0
    var table = document.querySelector('table')
    var body_total = document.querySelector('.valor-total > h3:nth-of-type(2) > strong')

    table.innerHTML = `<tr>
                            <th>Produto</th>
                            <th>Valor</th>
                        </tr>
                        
                        `
                        
    listaProdutos.forEach((value,index)=>{
        
         var prod = JSON.parse(listaProdutos[index])
         total = total + parseFloat(prod.total)

       
        table.innerHTML+= `<td class="nome-estilo"><strong>${prod.quant}x</strong> ${prod.nome} - <small>R$ ${prod.valor}</small>
        <span class="btn-remover"><i class="far fa-trash-alt"></i></span> </td>
                            <td class="valor-estilo">R$ ${prod.total}</td>`
        
        if(prod.quant < 2){
            var strong = document.querySelectorAll('strong')
            var small = document.querySelectorAll('small')
            strong[index].style.display = "none"
            small[index].style.display = "none"
        }

        
    })
    
    total = (parseFloat(total)).toFixed(2)
    body_total.innerHTML = `R$ ${total}`

    

    removerProduto()
    
}




function testar(){
    
    /* VARIAVEIS */
    var nome_produto = document.querySelector('#nome').value
    var valor_produto = document.querySelector('#valor').value
    var quant_produto = document.querySelector('#quant').value
    
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

    
    adicionar(nome_produto, valor_produto, quant_produto)
    exibir()
}


function adicionar(nome, valor, quant){
    valor = (parseFloat(valor)).toFixed(2)
    quant = parseInt(quant)
    
    const item = JSON.stringify({
        nome: nome,
        valor: valor,
        quant: quant,
        total : (valor * quant).toFixed(2)
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


olho_fechado.addEventListener('click', ()=>{
    valor_total.classList.add('blur')
    olho_fechado.style.display = 'none'
    olho_aberto.style.display = 'initial'
})

olho_aberto.addEventListener('click', ()=>{
    valor_total.classList.remove('blur')
    olho_fechado.style.display = 'initial'
    olho_aberto.style.display = 'none'
})


