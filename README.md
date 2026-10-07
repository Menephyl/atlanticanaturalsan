# Atlântica Natural - Landing Page Corporativa (Consultor Sanderson)

Uma landing page moderna, responsiva e de alta conversão desenvolvida para captação de novos consultores, revendedores e clientes para a **Atlântica Natural**.

O projeto foi construído focando em performance, acessibilidade e facilidade de manutenção, utilizando tecnologias web puras sem a necessidade de processos de build complexos.

## 🚀 Funcionalidades

- **Design Premium e Responsivo**: Layout otimizado perfeitamente para dispositivos móveis (smartphones) e desktops.
- **Botões Dinâmicos do WhatsApp**: Integração via JavaScript que gera links automáticos de WhatsApp com mensagem pré-configurada, facilitando a edição do número em um único lugar.
- **Downloads Diretos**: Botão estratégico para download imediato do catálogo em PDF.
- **Vídeos Embutidos (Wistia)**: Player de vídeo de alta performance perfeitamente ajustado na seção principal (Hero).
- **Estilização Moderna**: Uso de propriedades modernas de CSS (Grid, Flexbox, Variáveis nativas, `aspect-ratio`, efeitos de pulso e micro-animações).

## 🛠️ Tecnologias Utilizadas

- **HTML5** Semântico
- **CSS3** (Variáveis, Flexbox, Grid, Animações customizadas)
- **JavaScript (Vanilla)** (Manipulação leve de DOM, atualização dinâmica de ano e links)
- **Fontes Google**: Montserrat (Títulos) e Muli/Lato (Textos)

## 📁 Estrutura do Projeto

```text
├── assets/                  # Imagens, logotipos e catálogo PDF
│   ├── catalogo.pdf
│   ├── logo.png
│   ├── sanprofile.png
│   └── ...
├── index.html               # Estrutura principal da Landing Page
├── style.css                # Todo o design system e responsividade
├── script.js                # Lógica dinâmica (WhatsApp, Rodapé)
└── README.md                # Documentação do projeto
```

## ⚙️ Como Rodar o Projeto

Como o projeto foi construído utilizando **Vanilla HTML/CSS/JS**, não há necessidade de Node.js, NPM ou servidores de desenvolvimento pesados.

1. Clone o repositório ou faça o download da pasta.
2. Navegue até a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador padrão.
4. *(Opcional)* Se preferir testar em um servidor local com live-reload, você pode utilizar a extensão **Live Server** do VS Code.

## 📝 Como Editar as Informações

### Alterar o Número de WhatsApp

Abra o arquivo `script.js` e altere a variável `whatsappNumber`. Note que o número deve conter o código do país e DDD (ex: `553588579827`). Você também pode alterar a variável `whatsappText` para mudar a mensagem padrão.

### Atualizar o Catálogo

Substitua o arquivo `catalogo.pdf` dentro da pasta `assets/` por sua versão mais nova, mantendo exatamente o mesmo nome.

### Modificar Imagens

Troque os arquivos dentro da pasta `assets/` certificando-se de manter os mesmos nomes, ou atualize os caminhos (caminhos no `src`) diretamente no `index.html`.

---

Desenvolvido em parceria com **Yan Mworks** (Yan Digital).
