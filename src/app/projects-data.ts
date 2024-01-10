export interface Project{
    id: number;
    title: string;
    description: string;
    album: string;
    
}


export const projects: Project[] = [
    {
        id: 1,
        title: 'Cardápio Digital',
        description: `Aplicação front-end interativa, proporcionando uma experiência dinâmica ao exibir itens. O usuário terá a 
        capacidade de escolher entre diferentes categorias e interagir de forma intuitiva na seleção de produtos, 
        promovendo uma experiência envolvente e personalizada`,
        album: '../../../../../assets/images/cardapio-front-album.svg'
    },
        {
        id: 2,
        title: 'PhiloMatch',
        description: `Aplicação mobile que combina a familiar interface do Tinder com a profunda sabedoria dos filósofos para 
        criar uma plataforma de aprendizado única. O objetivo é tornar o aprendizado da filosofia mais acessível, 
        envolvente e divertido, conectando estudantes e entusiastas da filosofia com pensadores clássicos e suas 
        ideias`,
        album: '../../../../../assets/images/philomatch-album.svg'
    },
        {
        id: 3,
        title: 'Cardápio Digital',
        description: `Solução back-end robusta focada na gestão eficiente de dados, promovendo a integração e manipulação 
        dinâmica das informações. A implementação inclui a utilização de tecnologias como JPA para mapeamento 
        objeto-relacional, o gerenciador de projetos Maven para automação e o banco de dados PostgreSQL para 
        assegurar uma base sólida e escalável.
        `,
        album: '../../../../../assets/images/cardapio-back-album.svg'
    },
        {
        id: 4,
        title: 'ClimApp',
        description: `Aplicação mobile que mostra a temperatura, clima e vento atual do país solicitado utilizando a api da OpenWeatherMap
        `,
        album: '../../../../../assets/images/climApp-album.svg'
    },
        {
        id: 5,
        title: 'ByJampa',
        description: `site desenvolvido em grupo com o objetivo de fornecer informações detalhadas e relevantes sobre os pontos turísticos mais incríveis em João Pessoa, Brasil.
        `,
        album: '../../../../../assets/images/byjampa-album.svg'
    }

    
]

