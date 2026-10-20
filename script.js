const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["no inicio ficou com medo do que essa tecnologia pode fazer. ",
                    "achou assustaddor pensar na velocidade ma a tecnologia está avançando."
                ] 
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["quis saber como usar IA no seu dia a dia.",
                    "foi atrás de videos, artigos e mais informaçõe sobre como utilizar essa tecnologia."
                ]
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: ["conseguiu utilizar a IA para buscar informações uteis.",
                    "percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rapida e direcionada.",
                    "percebeu que a Ia consegue explicar termos complicaos de forma simplificada e isso ajudou muito suas pesquisa sobre assunto complexos."
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ["sentiu mais facilidade de ultilizar seus proprios recursos para escrever seus trabalhos.",
                    "achou que era muito mais facil procurar por respostas ultilizandos alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "sentiu um poouco de medo de quais dados pessoais seus a IA poderia ultilizar e por isso prefere fazer suas coisas com pouca intromissao da tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
         {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: ["vem impusionando a inovação ma area de IA e luta para abrir novos caminhos porfissionais com Ia.",
                    "participa atovamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ]
            }  
            {

                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: ["sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para descutir meios de utilizações de IA forma etica.",
                    "criou grupos de eticas volatdos para a IA e busca produtiva aumentam as desigualdades geradas pela automação,"
                ]
            },
           
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: ["notou tambem que muitas pessoas ainda não sabem utilizar as ferramentas traducionais seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "ainda acha que os meios de desenhos tradicioanais são mais eficientes para a creatividade, por isso vem estimulando pessoas em sua rede sociais a fazer pintura em aquarela."
                ]
            },
            
            
        ]
    },
    {
        enunciado: ".",
        alternativa: [".",
                        {
                texto: "criar uma imagem utilizando um gerador de IA"
                afirmacao: ["acelerou o processo de criação de trabalho utilizando geradores de imagens e agora consegue ensinar pessoas que sentem dificuldade em desenhar manualmente como utilizar tambem.",
            "compartilhou artes em redes sociais como forma de ensinar como se comunicar atravez da arte.",
            "percebeu que muitas pessoas tem dificuldade em expressar suas ideias desenha do e acha que a IA é capaz de empoderar essa pessoas e tirarem ideias do papel.",]
            }
        ]
    }
    {
        enunciado: "voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho esta um pouco atrasado e uma pessoa do seu grupo decide fazer com ajuda de IA. O problema e que o trabalho esta totalmente igual ao do chat. O que vc faz?.",
        alternativa:{""}
    }
];
    
let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();