
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder dúvidas e gerar imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar a IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Uma professora de tecnologia decide fazer uma sequência de aulas sobre Inteligência Artificial. No fim de uma aula, ela pede um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca com IA para encontrar informações e facilitar o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada."
                ]
            },
            {
                texto: "Escrever o trabalho com base em pesquisas tradicionais, conversas com colegas e conhecimentos próprios.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever trabalhos.",
                    "Achou mais fácil procurar respostas pelos meios tradicionais, mesmo que isso levasse mais tempo.",
                    "Sentiu um pouco de receio sobre o uso de dados pessoais pela IA e preferiu limitar o uso dessa tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora promove um debate sobre como a IA pode impactar o trabalho no futuro. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defender que a IA pode criar novas oportunidades de emprego e melhorar as habilidades humanas.",
                afirmacao: [
                    "Vem acompanhando a inovação na área de IA e acredita na criação de novos caminhos profissionais.",
                    "Participa ativamente da busca por soluções criativas e pela melhoria de processos com IA."
                ]
            },
            {
                texto: "Demonstrar preocupação com as pessoas que podem perder seus empregos para máquinas.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criação de um grupo de estudos para discutir formas éticas de utilizar a IA.",
                    "Passou a discutir maneiras de utilizar a IA de forma responsável e de reduzir as desigualdades causadas pela automação."
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem no computador que represente o que pensa sobre IA. O que você faz?",
        alternativas: [
            {
                texto: "Criar uma imagem usando uma ferramenta tradicional de desenho, como o Paint.",
                afirmacao: [
                    "Percebeu que muitas pessoas ainda não sabem utilizar ferramentas tradicionais e começou a compartilhar conhecimentos de pintura digital.",
                    "Acredita que os métodos tradicionais podem estimular a criatividade e passou a incentivar outras pessoas a experimentar técnicas de desenho e pintura."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens com IA.",
                afirmacao: [
                    "Acelerou o processo de criação utilizando geradores de imagens e agora consegue ensinar outras pessoas a utilizá-los.",
                    "Compartilhou artes nas redes sociais para mostrar como a tecnologia pode ajudar na comunicação por meio da arte.",
                    "Percebeu que a IA pode ajudar pessoas com dificuldade de desenhar a transformar suas ideias em imagens."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de Biologia para entregar na semana seguinte. O grupo está atrasado e uma pessoa decide fazer o trabalho com ajuda de IA. O problema é que o texto ficou totalmente igual ao gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Revisar o texto da IA, conferir as informações e reescrever com as próprias palavras.",
                afirmacao: [
                    "Aprendeu a utilizar a IA como apoio, verificando as informações e desenvolvendo suas próprias ideias.",
                    "Percebeu que a IA pode ajudar nos estudos, mas que é importante compreender e produzir o próprio trabalho."
                ]
            },
            {
                texto: "Conversar com o grupo e refazer o trabalho sem copiar diretamente a resposta da IA.",
                afirmacao: [
                    "Valorizou a honestidade acadêmica e incentivou os colegas a desenvolverem suas próprias ideias.",
                    "Entendeu que o trabalho em grupo exige colaboração, responsabilidade e uso consciente da tecnologia."
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    const afirmacaoEscolhida =
        afirmacoes[Math.floor(Math.random() * afirmacoes.length)];

    historiaFinal += afirmacaoEscolhida + " ";

    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
