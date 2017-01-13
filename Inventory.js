
var inventory = []


// funcao para adicionar itens ao inventario. recebe posicao do item dentro da db
function addItens ( item ){
  inventory.push(item)
}
// funcao para retirar itens do inventario. recebe posicao do item dentro do inventario
function rmvItens ( posicao ){
  inventory.splice(posicao,1)
}

// filtra itens recebendo um container e sua posicao dentro dele.
function findItens ( container, item ){
  return container.indexOf( item )
}

addItens( itens[1] )

// saberei onde esta o item "itens[1]" dentro do inventario
let indexOfItem =  findItens( inventory, itens[1] )

console.log( 'inventory.length ' + inventory.length )
console.log( 'inventory[0]' + inventory[0] )
console.log( 'IndexOfItem ' + indexOfItem )
rmvItens(0  )

console.log('inventory.length ' + inventory.length)

