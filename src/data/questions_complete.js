const data = [
  {
    category: "Historia",
    questions: [
      {
        question: "Quem foi o primeiro imperador romano?",
        options: ["Augusto", "Nero", "César", "Calígula"],
        answer: "Augusto",
        tip: "Primeiro imperador do Império Romano"
      },
      {
        question: "Qual foi a data da queda do Império Romano do Ocidente?",
        options: ["476 d.C.", "395 d.C.", "500 d.C.", "410 d.C."],
        answer: "476 d.C.",
        tip: "Marcou o fim da Roma Antiga"
      },
      {
        question: "Quem foi o responsável pela Revolução Francesa?",
        options: ["Napoleão Bonaparte", "Maximilien Robespierre", "Rei Luís XVI", "Napoleão III"],
        answer: "Maximilien Robespierre",
        tip: "Principal líder da Revolução"
      },
      {
        question: "Quem descobriu o Brasil?",
        options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"],
        answer: "Pedro Álvares Cabral",
        tip: "Expedição portuguesa de 1500"
      },
      {
        question: "Qual foi o principal motivo da guerra de Troia?",
        options: ["A disputa pela liberdade", "O rapto de Helena", "A busca por ouro", "A revolução de Épico"],
        answer: "O rapto de Helena",
        tip: "Guerra entre gregos e troianos"
      },
      {
        question: "Quando aconteceu a Segunda Guerra Mundial?",
        options: ["1914-1918", "1939-1945", "1941-1945", "1929-1939"],
        answer: "1939-1945",
        tip: "Conflito global no século XX"
      },
      {
        question: "Qual foi o principal autor da independência dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "Thomas Jefferson",
        tip: "Autor da Declaração de Independência"
      },
      {
        question: "Quem foi o responsável pela unificação da Alemanha?",
        options: ["Otto von Bismarck", "Guillherme II", "Frederico Grande", "Ludwig van Beethoven"],
        answer: "Otto von Bismarck",
        tip: "Primeiro-ministro da Prússia"
      }
    ]
  },
  {
    category: "Geografia",
    questions: [
      {
        question: "Qual é o maior país do mundo em extensão territorial?",
        options: ["Brasil", "Rússia", "Canadá", "China"],
        answer: "Rússia",
        tip: "Maior em território e extensão"
      },
      {
        question: "Qual é o maior oceano do mundo?",
        options: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
        answer: "Oceano Pacífico",
        tip: "Maior em área e profundidade"
      },
      {
        question: "Qual é o continente mais populoso?",
        options: ["África", "América", "Ásia", "Europa"],
        answer: "Ásia",
        tip: "Contém mais de 60% da população mundial"
      },
      {
        question: "Qual é o ponto mais alto do planeta Terra?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte Fuji", "Monte McKinley"],
        answer: "Monte Everest",
        tip: "Fica na fronteira entre Nepal e China"
      },
      {
        question: "Onde está localizada a maior floresta tropical do mundo?",
        options: ["África", "Austrália", "América do Sul", "Sudeste Asiático"],
        answer: "América do Sul",
        tip: "Amazônia é a maior floresta tropical"
      },
      {
        question: "Qual é o maior rio do mundo em volume de água?",
        options: ["Nilo", "Mississippi", "Amazonas", "Yangtze"],
        answer: "Amazonas",
        tip: "Maior volume de água, localizado na América do Sul"
      },
      {
        question: "Em que país se localiza o deserto do Saara?",
        options: ["Arábia Saudita", "Egito", "Níger", "África do Sul"],
        answer: "Níger",
        tip: "Maior deserto quente do mundo"
      },
      {
        question: "Qual é o maior arquipélago do mundo?",
        options: ["Indonésia", "Filipinas", "Japão", "Maldivas"],
        answer: "Indonésia",
        tip: "É composto por mais de 17.000 ilhas"
      }
    ]
  },
  {
    category: "Matematica",
    questions: [
      {
        question: "Qual é o valor de pi?",
        options: ["3.14", "3.15", "3.1415", "3.14159"],
        answer: "3.14159",
        tip: "Número irracional"
      },
      {
        question: "Qual é a raiz quadrada de 64?",
        options: ["6", "7", "8", "9"],
        answer: "8",
        tip: "Raiz quadrada de um número"
      },
      {
        question: "Quanto é 7 x 9?",
        options: ["56", "63", "72", "64"],
        answer: "63",
        tip: "Multiplicação simples"
      },
      {
        question: "Qual é o valor de 15% de 200?",
        options: ["25", "30", "35", "40"],
        answer: "30",
        tip: "Calculando porcentagem"
      },
      {
        question: "Qual é a área de um quadrado de lado 5?",
        options: ["10", "20", "25", "30"],
        answer: "25",
        tip: "Fórmula da área do quadrado"
      },
      {
        question: "Quanto é 12 x 12?",
        options: ["144", "156", "132", "1440"],
        answer: "144",
        tip: "Multiplicação simples"
      },
      {
        question: "Quantos graus tem um ângulo reto?",
        options: ["45", "90", "120", "180"],
        answer: "90",
        tip: "Definição de ângulo reto"
      },
      {
        question: "Quanto é 36 dividido por 4?",
        options: ["6", "7", "8", "9"],
        answer: "9",
        tip: "Divisão simples"
      }
    ]
  },
  {
    category: "Conhecimentos Gerais",
    questions: [
      {
        question: "Qual é a capital do Japão?",
        options: ["Seul", "Tóquio", "Pequim", "Bangkok"],
        answer: "Tóquio",
        tip: "Cidade famosa por sua tecnologia"
      },
      {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Vênus", "Terra", "Mercúrio", "Marte"],
        answer: "Mercúrio",
        tip: "Planeta mais próximo do nosso sistema solar"
      },
      {
        question: "Qual é o elemento químico com símbolo Au?",
        options: ["Prata", "Ouro", "Cobre", "Ferro"],
        answer: "Ouro",
        tip: "Usado em joias e moedas"
      },
      {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong",
        tip: "Fazendo parte da missão Apollo 11"
      },
      {
        question: "Em que ano terminou a Primeira Guerra Mundial?",
        options: ["1917", "1918", "1920", "1919"],
        answer: "1918",
        tip: "Foi assinado o Tratado de Versalhes"
      },
      {
        question: "Qual é o maior estado brasileiro em área territorial?",
        options: ["Minas Gerais", "Amazonas", "Bahia", "São Paulo"],
        answer: "Amazonas",
        tip: "O estado com a maior parte da Amazônia"
      },
      {
        question: "Em qual continente o Egito está localizado?",
        options: ["África", "Ásia", "Europa", "América"],
        answer: "África",
        tip: "Localizado ao nordeste do continente africano"
      },
      {
        question: "Qual é o idioma oficial do Brasil?",
        options: ["Espanhol", "Inglês", "Português", "Francês"],
        answer: "Português",
        tip: "Idioma derivado do latim"
      }
    ]
  },
  {
    category: "Futebol",
    questions: [
      {
        question: "Quem marcou o gol que colocou a cabeça do Raposão no 6x1 do Cruzeiro sobre o Atlético em 2011?",
        options: ["Roger", "Fábio", "Henrique", "Wellington Paulista"],
        answer: "Roger",
        tip: "Meio-campista e camisa 10 do Cruzeiro"
      },
      {
        question: "Quantas vezes o Cruzeiro venceu a Libertadores?",
        options: ["2", "3", "4", "5"],
        answer: "2",
        tip: "Conquistas em 1976 e 1997"
      },
      {
        question: "Qual jogador foi o artilheiro da Libertadores de 1997 pelo Cruzeiro?",
        options: ["Palhinha", "Rogério", "Dunga", "Tostão"],
        answer: "Palhinha",
        tip: "Fez vários gols no torneio"
      },
      {
        question: "Em que ano o Cruzeiro foi campeão da Copa do Brasil pela primeira vez?",
        options: ["1993", "1996", "1997", "2000"],
        answer: "1993",
        tip: "Conquista contra o Flamengo"
      },
      {
        question: "Quem foi o técnico do Cruzeiro na conquista da Libertadores de 1997?",
        options: ["Luiz Felipe Scolari", "Carlos Alberto Parreira", "Paulo Autuori", "Técnico desconhecido"],
        answer: "Paulo Autuori",
        tip: "Dirigiu novamente o clube em 2023"
      },
      {
        question: "Qual foi o último título conquistado pelo Cruzeiro?",
        options: ["Campeonato Mineiro 2020", "Copa do Brasil 2018", "Supercopa 2021", "Campeonato Brasileiro 2014"],
        answer: "Campeonato Mineiro 2020",
        tip: "O último grande título da equipe"
      },
      {
        question: "Quem foi o jogador do Cruzeiro que mais vestiu a camisa do clube?",
        options: ["Rafael", "Fábio", "Alex", "Cássio"],
        answer: "Fábio",
        tip: "Fez história com a camisa 1"
      },
      {
        question: "Qual foi a maior vitória do Cruzeiro no clássico contra o Atlético?",
        options: ["6x1", "5x0", "4x0", "3x0"],
        answer: "6x1",
        tip: "Em 2011, marcando história"
      },
      {
        question: "Quem foi o artilheiro do Cruzeiro no Campeonato Brasileiro de 2013?",
        options: ["Ricardo Goulart", "Alex", "Walter", "Bruno"], 
        answer: "Ricardo Goulart",
        tip: "Fez gols importantes no torneio"
      },
      {
        question: "Quantos títulos brasileiros o Cruzeiro possui?",
        options: ["3", "4", "6", "2"],
        answer: "4",
        tip: "Conquistas em 1966, 2003, 2013 e 2014"
      },
      {
        question: "Em que ano o Cruzeiro conquistou o bicampeonato da Copa do Brasil?",
        options: ["2000", "2003", "2018", "2019"],
        answer: "2018",
        tip: "Fez história contra o Corinthians"
      },
      {
        question: "Quem foi o autor do gol de falta na vitória do Cruzeiro sobre o São Paulo, na final da Copa do Brasil de 2000?",
        options: ["Rogério", "Ricardo Goulart", "Alex", "Palhinha"],
        answer: "Alex",
        tip: "Famoso pelo talento com a bola"
      }
    ]
  },
  {
    category: "Literatura",
    questions: [
      {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["José de Alencar", "Machado de Assis", "Clarice Lispector", "Graciliano Ramos"],
        answer: "Machado de Assis",
        tip: "Autor do realismo brasileiro"
      },
      {
        question: "Qual obra é de F. Scott Fitzgerald?",
        options: ["Cem Anos de Solidão", "O Grande Gatsby", "O Sol Também Se Levanta", "A Moreninha"],
        answer: "O Grande Gatsby",
        tip: "Famoso romance da literatura americana"
      },
      {
        question: "Quem escreveu a trilogia 'Senhor dos Anéis'?",
        options: ["George R.R. Martin", "J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis"],
        answer: "J.R.R. Tolkien",
        tip: "Famoso por obras de fantasia épica"
      },
      {
        question: "Qual é o nome do protagonista de 'O Primo Basílio'?",
        options: ["Basílio", "Luís", "Rafael", "Jorge"],
        answer: "Luís",
        tip: "Famoso personagem de José de Alencar"
      },
      {
        question: "Quem escreveu 'O Alquimista'?",
        options: ["Paulo Coelho", "Jorge Amado", "Machado de Assis", "Monteiro Lobato"],
        answer: "Paulo Coelho",
        tip: "Obra mais vendida no Brasil"
      },
      {
        question: "Em 'O Pequeno Príncipe', quem escreveu a famosa frase 'Tu te tornas eternamente responsável por aquilo que cativas'?",
        options: ["Charles Dickens", "Antoine de Saint-Exupéry", "J.K. Rowling", "Hemingway"],
        answer: "Antoine de Saint-Exupéry",
        tip: "Famoso autor francês"
      },
      {
        question: "Quem escreveu 'O Cortiço'?",
        options: ["Machado de Assis", "José de Alencar", "Aluísio Azevedo", "Graciliano Ramos"],
        answer: "Aluísio Azevedo",
        tip: "Escritor realista brasileiro"
      },
      {
        question: "Quem é o autor de 'Harry Potter'?",
        options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "C.S. Lewis"],
        answer: "J.K. Rowling",
        tip: "Famosa saga de bruxos"
      }
    ]
  },
  {
    category: "Ciencias",
    questions: [
      {
        question: "Qual é o maior órgão do corpo humano?",
        options: ["Coração", "Cérebro", "Fígado", "Pele"],
        answer: "Pele",
        tip: "O maior órgão externo"
      },
      {
        question: "Quantos ossos tem o corpo humano?",
        options: ["206", "208", "210", "220"],
        answer: "206",
        tip: "Número de ossos em um adulto"
      },
      {
        question: "O que é fotossíntese?",
        options: ["Processo de digestão", "Produção de energia pelas plantas", "Formação de neve", "Processo de respiração das plantas"],
        answer: "Produção de energia pelas plantas",
        tip: "Fundamental para a vida vegetal"
      },
      {
        question: "Qual gás é essencial para a respiração humana?",
        options: ["Dióxido de carbono", "Oxigênio", "Nitrogênio", "Metano"],
        answer: "Oxigênio",
        tip: "Essencial para o corpo humano"
      },
      {
        question: "Qual é a função do sistema circulatório?",
        options: ["Transportar oxigênio e nutrientes", "Produzir hormônios", "Controlar o sistema nervoso", "Proteger o corpo"],
        answer: "Transportar oxigênio e nutrientes",
        tip: "Sistema essencial para a vida"
      },
      {
        question: "Qual é a célula responsável pela defesa do organismo?",
        options: ["Neurônio", "Glóbulo vermelho", "Glóbulo branco", "Plaquetas"],
        answer: "Glóbulo branco",
        tip: "Responsável pela defesa do corpo"
      },
      {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Júpiter", "Saturno", "Urano", "Netuno"],
        answer: "Júpiter",
        tip: "É o planeta mais massivo"
      },
      {
        question: "O que é a mitose?",
        options: ["Divisão celular", "Transporte de oxigênio", "Formação de hormônios", "Digestão dos alimentos"],
        answer: "Divisão celular",
        tip: "Processo fundamental para crescimento"
      }
    ]
  },
  {
    category: "Entretenimento",
    questions: [
      {
        question: "Qual é o nome do ator que interpreta Tony Stark no filme 'Vingadores'?",
        options: ["Chris Hemsworth", "Tom Holland", "Robert Downey Jr.", "Chris Evans"],
        answer: "Robert Downey Jr.",
        tip: "Interpretou o Homem de Ferro"
      },
      {
        question: "Qual foi o primeiro filme da saga 'Star Wars' lançado em 1977?",
        options: ["Star Wars: O Império Contra-Ataca", "Star Wars: Uma Nova Esperança", "Star Wars: O Retorno de Jedi", "Star Wars: A Ameaça Fantasma"],
        answer: "Star Wars: Uma Nova Esperança",
        tip: "O início da franquia épica"
      },
      {
        question: "Quem interpretou o personagem Jack Dawson em 'Titanic'?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Cruise"],
        answer: "Leonardo DiCaprio",
        tip: "Famoso ator de Hollywood"
      },
      {
        question: "Qual é o nome do filme onde Keanu Reeves interpreta um ex-assassino chamado John Wick?",
        options: ["John Wick", "Matrix", "O Vingador do Futuro", "Velocidade Máxima"],
        answer: "John Wick",
        tip: "A série famosa de ação"
      },
      {
        question: "Quem é o autor da saga 'Harry Potter'?",
        options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "C.S. Lewis"],
        answer: "J.K. Rowling",
        tip: "Criadora de Hogwarts e bruxos"
      },
      {
        question: "Qual série de TV foi a primeira a alcançar 1 bilhão de horas assistidas em seu primeiro mês?",
        options: ["Stranger Things", "The Crown", "Breaking Bad", "The Witcher"],
        answer: "Stranger Things",
        tip: "Famosa série da Netflix"
      },
      {
        question: "Quem ganhou o Oscar de Melhor Diretor em 2020?",
        options: ["Bong Joon Ho", "Quentin Tarantino", "Martin Scorsese", "Greta Gerwig"],
        answer: "Bong Joon Ho",
        tip: "Diretor de 'Parasita'"
      },
      {
        question: "Qual foi o primeiro filme de super-herói a alcançar 2 bilhões de dólares nas bilheteiras?",
        options: ["Vingadores: Ultimato", "Vingadores: Guerra Infinita", "O Cavaleiro das Trevas", "Spider-Man: Sem Volta Para Casa"],
        answer: "Vingadores: Ultimato",
        tip: "Um dos maiores sucessos da Marvel"
      }
    ]
  }
]


export default data;
