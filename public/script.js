const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Smartphone Galaxy S23",
        "preco": 3499.90,
        "categoria": "Celulares",
        "imagem": "https://example.com/imagens/galaxy-s23.jpg",
        "descricao": "Smartphone com 128GB de armazenamento, câmera de alta resolução e excelente desempenho.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Notebook Dell Inspiron 15",
        "preco": 4599.00,
        "categoria": "Notebooks",
        "imagem": "https://example.com/imagens/dell-inspiron-15.jpg",
        "descricao": "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e estudos.",
        "emEstoque": false
      },
      {
      id: 3,
      nome: "iPhone 17",
      preco: 7999.00,
      categoria: "Celulares",
      imagem: "https://placehold.co/300x200?text=iPhone+17",
      descricao: "Smartphone da Apple com tela de 6,3 polegadas, câmera dupla de 48 MP e 256 GB de armazenamento.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Câmera Canon EOS R50",
      preco: 5499.90,
      categoria: "Câmeras",
      imagem: "https://placehold.co/300x200?text=Canon+EOS+R50",
      descricao: "Câmera mirrorless de 24 MP com gravação em 4K, ideal para fotografia e criação de conteúdo.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "Impressora Epson EcoTank L3250",
      preco: 1099.00,
      categoria: "Impressoras",
      imagem: "https://placehold.co/300x200?text=Epson+EcoTank",
      descricao: "Impressora multifuncional com tanque de tinta, Wi-Fi e impressão colorida de baixo custo.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Xbox Series X",
      preco: 4299.00,
      categoria: "Games",
      imagem: "https://placehold.co/300x200?text=Xbox+Series+X",
      descricao: "Console da Microsoft com 1 TB de armazenamento",
      emEstoque: true
    },
    {
      id: 7,
      nome: "MacBook Air M4",
      preco: 9499.00,
      categoria: "Notebooks",
      imagem: "https://placehold.co/300x200?text=MacBook+Air",
      descricao: "Notebook da Apple com chip M4, 16 GB de memória e bateria para o dia todo.",
      emEstoque: false
    },
    {
      id: 8,
      nome: "Fone Gamer HyperX Cloud III",
      preco: 599.90,
      categoria: "Acessórios",
      imagem: "https://placehold.co/300x200?text=HyperX+Cloud+III",
      descricao: "Headset gamer com som surround, microfone removível e almofadas confortáveis.",
      emEstoque: true
    }
    ]
  }

  // B.2:
  const productList = document.getElementById("product-list");
  const productDetails = document.getElementById("product-details");

  const searchInput = document.querySelector("#search");
  const categorySelect = document.querySelector("#category");

  const botoes = document.querySelectorAll(".btn-detalhes");

  // B.3:
  formatPrice(produtos){
    return "R$ " + preco.toFixed(2);
  }

  function createProductCard(produto){
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);

    //criando elementos do card
    card.style.border = document.createElement("h3");
    titulo.classList.add("card-title");
    titulo.textContent = produto.nome;
    const preco = document.createElement("p");
    preco.textContent = formatPrice(produto.preco);
    const botao = document.createElement("button");
    botao.textContent = "Ver detalhes";
    botao.classList.add("btn-detalhes");

    card.appendChild(titulo);
    card.appendChild(preco);
    card.appendChild(botao);
  
    return card;
  }

  function renderProducts(produtos){
    productLisT.innerHTML = "";  //limpa lista
  
    produtos.forEach(produto => {
      const card = createProductCard(produto);
      productList.appendChild(card);
    });
  }
  
  function renderCategories(){
    categorySelect.innerHTML = ""; //esvazia e evita duplicar
    //criar opcao todas
    const todas = document.createElement("option");  
    todas.value = "Todas";

    categorySelect.appendChild(todas);

    //descobrir categorias sem repetir
    const categoria = [];
    data.produtos.forEach(produto => {
      if(!categorias.includes(produto.categoria))
      {
          categorias.push(produto.categoria);
      }

    })

  }