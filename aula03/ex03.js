const produtos = [
 { id: 1, nome: "Camiseta", preco: 45.00 },
 { id: 2, nome: "Tênis", preco: 150.00 },
 { id: 3, nome: "Mochila", preco: 80.00 },
 { id: 4, nome: "Meia", preco: 15.00 }
];

 


const produtoEncontrado = produtos.find(p => p.id === 3);
console.log("Produto com id 3:", produtoEncontrado ? produtoEncontrado.nome : "Não encontrado");




const produtosCaros = produtos.filter(p => p.preco > 50.00);
console.log("Produtos acima de R$ 50,00:", produtosCaros);


