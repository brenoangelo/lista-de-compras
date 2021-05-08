/* LEMBRETE! */
/* CRIAR FILTROS PARA EVITAR REPETIÇÃO DE PRODUTOS E CRIAR A SOMA DE TUDO */
const listaProdutos = []

exibir()


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
         total = total + parseFloat(value.valor)

       
        table.innerHTML+= `<td class="nome-estilo">${value.nome} 
        <span class="btn-remover"><i class="far fa-trash-alt"></i></span></td>
                            <td class="valor-estilo">R$ ${value.valor}</td>`
        
    })

    body_total.innerHTML = `R$ ${total}`

    removerProduto()
    
}



function adicionar(){
    
    /* VARIAVEIS */
    var nome_produto = document.querySelector('#nome').value
    var valor_produto = document.querySelector('#valor').value

    

    listaProdutos.forEach((value)=>{
       
        if(value.nome.toLowerCase() == nome_produto.toLowerCase()){    
            alert('Produto já está na lista.')
            nome_produto = ""
            return false
        }
    })


        /*Valida se foi preenchido */
    if(nome_produto == "" || valor_produto == ""){
        
        return false
    }
    
        /*Valida se o valor é igual ou menor que 0 */
    if(valor_produto <= 0){
        alert('Valor inválido')
        return false
    }

    

    const item = new Object()
    item.nome = nome_produto
    item.valor = valor_produto
    listaProdutos.push(item)

    limparCampos(nome_produto, valor_produto)
    alert(nome_produto)
    exibir()
}



function removerProduto(){
    var btn_remover = document.querySelectorAll('.btn-remover')
    btn_remover.forEach((value, index)=>{
        
        btn_remover[index].addEventListener('click', ()=>{
            listaProdutos.splice(index, 1)
            exibir()
            console.log(listaProdutos)
        })
        
        
    })
    
}

function limparCampos(nome, valor){
    nome = ""
    valor = ""
    
}




    

    
