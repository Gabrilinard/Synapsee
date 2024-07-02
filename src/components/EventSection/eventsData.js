const eventsData = [
    {
        title: 'O brasileiro de 8 anos que dá palestras em Londres sobre autismo e TDAH',
        description: 'Conheça a história inspiradora de um jovem brasileiro que compartilha seu conhecimento sobre autismo e TDAH em palestras internacionais.',
        imageUrl: 'src/assets/meninoPalestra.jpg',
        link: 'https://www.bbc.com/portuguese/articles/c6peezjelm5o?xtor=AL-73-%5Bpartner%5D-%5Bflipboard%5D-%5Bheadline%5D-%5Bbrazil%5D-%5Bbizdev%5D-%5Bisapi%5D&utm_source=flipboard&utm_content=OscarKonno%2Fmagazine%2FAutismo'
    },
    {
        title: 'Existe uma cura para o TDAH?',
        description: 'Descubra mais sobre as investigações e iniciativas relacionadas à cura ou gestão do TDAH.',
        imageUrl: 'src/assets/tdah.jpg',
        link: 'https://www.verywellmind.com/is-there-a-cure-for-adhd-5525858?utm_source=flipboard&utm_content=OscarKonno%2Fmagazine%2FAutismo'
    },
    {
        title: 'Encontrada ‘pista’ que pode tratar fundamentalmente o transtorno do espectro do autismo',
        description: 'Leia sobre os avanços na pesquisa que podem potencialmente revolucionar o tratamento do transtorno do espectro do autismo.',
        imageUrl: 'src/assets/espectro.jpg',
        link: 'https://neurosciencenews.com/asd-molecular-network-22082/?utm_source=flipboard&utm_content=OscarKonno%2Fmagazine%2FAutismo'
    },
    {
        title: 'Autismo: o que é camuflagem social, que dificulta diagnóstico em meninas?',
        description: 'Entenda o conceito de camuflagem social no contexto do autismo, especialmente como isso pode afetar o diagnóstico em meninas.',
        imageUrl: 'src/assets/meninaAut.jpg',
        link: 'https://www.bbc.com/portuguese/brasil-60949652?utm_source=flipboard&utm_content=OscarKonno%2Fmagazine%2FAutismo'
    },
    {
        title: 'Como implementar estratégias de terapia sensorial para o autismo?',
        description: 'Explore estratégias práticas para implementar terapia sensorial e seu impacto positivo no tratamento do autismo.',
        imageUrl: 'src/assets/terapia.jpg',
        link: 'https://www.autismoemdia.com.br/blog/como-implementar-estrategias-de-terapia-sensorial-para-o-autismo/'
    },
    {
        title: 'Pessoas autistas superam os neurotípicos em uma versão cartoon de uma tarefa de reconhecimento de emoções',
        description: 'Saiba mais sobre um estudo que revela como pessoas autistas se destacam em uma tarefa de reconhecimento de emoções, mesmo em uma versão cartoon.',
        imageUrl: 'src/assets/educar.jpg',
        link: 'https://www.psypost.org/autistic-people-outperform-neurotypicals-in-a-cartoon-version-of-an-emotion-recognition-task/'
    },
    {
        title: 'Crianças com autismo "vêem" essa ilusão de ótica de uma maneira única, descobriu experimento',
        description: 'Saiba mais sobre um estudo que revela como pessoas autistas se destacam em uma tarefa de reconhecimento de emoções, mesmo em uma versão cartoon.',
        imageUrl: 'src/assets/crianca.jpg',
        link: 'https://www.psypost.org/autistic-people-outperform-neurotypicals-in-a-cartoon-version-of-an-emotion-recognition-task/'
    },
    {
        title: 'O que são “mascaramento” e “camuflagem” no contexto do autismo e do TDAH?',
        description: 'Saiba mais sobre um estudo que revela como pessoas autistas se destacam em uma tarefa de reconhecimento de emoções, mesmo em uma versão cartoon.',
        imageUrl: 'src/assets/camu.jpg',
        link: 'https://www.sciencealert.com/children-with-autism-see-this-optical-illusion-in-a-unique-way-experiment-finds?utm_source=flipboard&utm_content=OscarKonno%2Fmagazine%2FAutismo'
    },
    {
        title: 'Em um ano, 200 mil alunos com autismo foram matriculados em escolas comuns; falta de apoio a professores ainda é obstáculo',
        description: 'Descubra como o aumento nas matrículas de alunos com autismo em escolas comuns está trazendo novos desafios e oportunidades para o sistema educacional.',
        imageUrl: 'https://i.pinimg.com/564x/c4/d9/00/c4d900a1967abc940b4b5d06e1ffa2a8.jpg',
        link: 'https://g1.globo.com/educacao/noticia/2024/04/02/em-um-ano-200-mil-alunos-com-autismo-foram-matriculados-em-escolas-comuns-falta-de-apoio-a-professores-ainda-e-obstaculo.ghtml'
    },
    {
        title: '1 a cada 36 crianças tem autismo, diz CDC; entenda por que número de casos aumentou tanto nas últimas décadas',
        description: 'Saiba mais sobre os fatores que contribuíram para o aumento significativo no diagnóstico de autismo nas últimas décadas.',
        imageUrl: 'https://s2-g1.glbimg.com/Dq3vUobDI4m0RVABcDL8m-A0ciI=/0x0:4242x2828/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/2/x/3Vh9MyQ06HUTgASe6Fpg/caleb-woods-ecruhwpiw7c-unsplash.jpg',
        link: 'https://g1.globo.com/educacao/noticia/2023/04/02/1-a-cada-36-criancas-tem-autismo-diz-cdc-entenda-por-que-numero-de-casos-aumentou-tanto-nas-ultimas-decadas.ghtml'
    },
    {
        title: 'Diagnóstico de autismo: a alteração cerebral que pode ajudar a detectar o transtorno',
        description: 'Explore como uma descoberta sobre alterações cerebrais pode melhorar a detecção precoce do autismo.',
        imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/105FA/production/_121966076_gettyimages-1299926764.jpg.webp',
        link: 'https://www.bbc.com/portuguese/geral-59529950'
    },
    {
        title: 'Neurodiversidade: o que é e como redes sociais têm ajudado em diagnósticos',
        description: 'Entenda o conceito de neurodiversidade e como as redes sociais estão auxiliando no diagnóstico de transtornos neurodivergentes.',
        imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/92E3/production/_125530673_gettyimages-862457080.jpg.webp',
        link: 'https://www.bbc.com/portuguese/internacional-61854016'
    },
    {
        title: 'Autismo: as descobertas recentes que ajudam a derrubar mitos sobre o transtorno',
        description: 'Conheça as descobertas científicas recentes que estão ajudando a desmistificar o autismo.',
        imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/7479/production/_110771892_gettyimages-473634494.jpg.webp',
        link: 'https://www.bbc.com/portuguese/geral-51377691'
    },
    {
        title: 'O professor que usa robótica para incluir crianças com autismo em escola na periferia de SP',
        description: 'Veja como um professor está utilizando robótica para promover a inclusão de crianças autistas em uma escola na periferia de São Paulo.',
        imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/10122/production/_109362856_todossaladerecursos_emefharoldoveloso-25.jpg.webp',
        link: 'https://www.bbc.com/portuguese/brasil-50174617'
    },
    {
        title: 'Meu filho tinha dificuldade para falar, mas aos 7 anos já aprendeu nove idiomas, diz mãe de garoto com autismo',
        description: 'Conheça a história inspiradora de um garoto autista que superou dificuldades de fala e aprendeu nove idiomas.',
        imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/B96D/production/_107796474_17801e94-171d-4527-bec9-afcf8a2f2b47.jpg.webp',
        link: 'https://www.bbc.com/portuguese/geral-48907229'
    },
    {
        title: 'Ministério da Saúde divulga documento com conteúdo e publicações sobre o Espectro Autista',
        description: 'Confira o novo documento do Ministério da Saúde que compila conteúdo e publicações relevantes sobre o espectro autista.',
        imageUrl: 'https://i.pinimg.com/564x/fe/6d/df/fe6ddfbb12053132b6a1433b9098cec7.jpg',
        link: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2022/abril/ministerio-da-saude-divulga-documento-com-conteudo-e-publicacoes-sobre-o-espectro-autista'
    },
    {
        title: 'Retrospectiva 2022: 10 fatos do autismo no Brasil que marcaram o ano',
        description: 'Revise os dez acontecimentos mais marcantes relacionados ao autismo no Brasil em 2022.',
        imageUrl: 'https://www.canalautismo.com.br/wp-content/uploads/2022/08/rol-senado-PL-705x470.jpg',
        link: 'https://www.canalautismo.com.br/noticia/retrospectiva-2022-10-fatos-do-autismo-no-brasil-que-marcaram-o-ano/'
    },
    {
        title: 'Estudo aponta aumento da prevalência de autismo nos EUA para 1 em 30',
        description: 'Saiba mais sobre o estudo que revelou um aumento significativo na prevalência do autismo nos Estados Unidos.',
        imageUrl: 'https://tismoo.us/wp-content/uploads/2022/07/portal-1x30-v.01.png',
        link: 'https://tismoo.us/ciencia/estudo-aponta-aumento-da-prevalencia-de-autismo-nos-eua-para-1-em-30/'
    },
    {
        title: 'Livros sobre neurodiversidade e gênero',
        description: 'Descubra uma seleção de livros que exploram a relação entre neurodiversidade e gênero.',
        imageUrl: 'https://omundoautista.uai.com.br/wp-content/uploads/sites/34/2024/02/metamorof-950x950.jpg',
        link: 'https://www.canalautismo.com.br/artigos/livros-sobre-neurodiversidade-e-genero/'
    },
    {
        title: 'Aumento de diagnósticos de autismo e TDAH no Reino Unido: Entenda os motivos e o impacto na sociedade',
        description: 'Entenda as razões por trás do aumento nos diagnósticos de autismo e TDAH no Reino Unido e seus impactos sociais.',
        imageUrl: 'https://i.pinimg.com/564x/da/68/9e/da689e817d2bd184c9099a25542f4671.jpg',
        link: 'https://www.canalautismo.com.br/noticia/aumento-de-diagnosticos-de-autismo-e-tdah-no-reino-unido-entenda-os-motivos-e-o-impacto-na-sociedade/'
    }    
];
export default eventsData;
