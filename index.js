let peso = 15
let quantidadeDePeças = 10
let nomeDePeças = ('ad', 'abcd', 'abcdf', 'abcdfg', 'abc')

if (peso < 100) {
  console.log('Não pode cadrastrar pois possui PESO inferior a 100 grama')
} else if (quantidadeDePeças > 10) {
  console.log('Capacidade maxíma da CAIXA atingida')
} else if (nomeDePeças.length < 3) {
  console.log(
    'quantidades de CARACTERES insulficiente, Por favor cadrastre um nome com mais de 3 CARACTERES'
  )
} else console.log('Cadrastro realizado com Sucesso')
