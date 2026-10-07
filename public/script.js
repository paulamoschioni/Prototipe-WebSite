const { createElement } = require("react");

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


  // B.3:
  function formatPrice(preco){
    return "R$ " + preco.toFixed(2);
  }

  function createProductCard(produto){
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);

    //criando elementos do card
    const titulo = document.createElement("h3");
    titulo.classList.add("card-title");
    titulo.textContent = produto.nome;
    const preco = document.createElement("p");
    preco.textContent = formatPrice(produto.preco);
    const botao = document.createElement("button");
    botao.textContent = "Ver detalhes";
    botao.classList.add("btn-detalhes");

    botao.addEventListener("click", () => {
    showProductDetails(produto);
    });
    card.appendChild(titulo);
    card.appendChild(preco);
    card.appendChild(botao);
    
    
    return card;
  }

  function renderProducts(produtos){
    productList.innerHTML = "";  //limpa lista
  
    produtos.forEach(produto => {
      const card = createProductCard(produto);
      productList.appendChild(card);
    });

    // B.5
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      console.log("Card renderizado, id:"), card.data.id;
      card.computedStyleMap.transmition = "transform 0.2s";
    });
  }
  
  function renderCategories(){
    categorySelect.innerHTML = ""; //esvazia e evita duplicar
    //criar opcao todas
    const todas = document.createElement("option");  
    todas.value = "Todas";
todas.textContent = "Todas";
    categorySelect.appendChild(todas);

    //descobrir categorias sem repetir
    const categorias = [];
    data.produtos.forEach(produto => {
      if(!categorias.includes(produto.categoria))
      {
          categorias.push(produto.categoria);
      }

    })
    categorias.forEach(categoria => {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria;
      categorySelect.appendChild(option);
    })

  }
  renderCategories();

  function showProductDetails(produto){
    const status = produto.emEstoque ? "Em estoque" : "Esgotado";

    productDetails.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Estoque:</strong> ${status}</p>
    <p>${produto.descricao}</p>
  `;
  }

  function filterProducts(){
    const texto = searchInput.value.toLowerCase().trim(); //pega na caxa de pesquisa, passa para letra min e tira espacos
    const categoria = categorySelect.value;
    return data.produtos.filter(produto => {
      const nomeBate = produto.nome.toLowerCase().includes(texto);
      const categoriaBate = categoria === "Todas" || produto.categoria === categoria;
      return nomeBate && categoriaBate;
    });


  }
  
  // B.4:
  function createProductCard(produto){
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);

    //criando elementos do card
    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;

    const titulo = document.createElement("h2");
    titulo.classList.add("card-title");
    titulo.alt = produto.nome;

    const preco = document.createElement("p");
    preco.textContent = formatPrice(produto.preco);

    const categoria = document.createElement("p");
    categoria.textContent = produto.categoria;

    const botao = document.createElement("button");
    botao.textContent = "Ver detalhes";
    botao.classList.add("btn-detalhes");

    const botaoDestacar = document.createElement("button");
    botaoDestacar.textContent = "Destacar";

    botao.addEventListener("click", () => {    //quando alguem clicar, executa isso
      showProductDetails(produto);
    });

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(preco);
    card.appendChild(categoria);
    card.appendChild(botao);
    card.appendChild(botaoDestacar);

    return card;
  }

  const rendBtn = document.querySelectorAll("#render-btn");

 searchInput.addEventListener("input", () =>{
  renderProducts(filterProducts());
 });

 categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts());
 });

 categorySelect.addEventListener("click", () => {
  renderProducts(filterProducts());
 });

 renderProducts(data.produtos);  //mostra todos ao abrir a pagina


 // B.5
