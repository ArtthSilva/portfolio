export interface Project{
    id: number;
    title: string;
    description: string;
    
}


export const projects: Project[] = [
    {
        id: 1,
        title: 'Cardápio Digital',
        description: `Aplicação front-end interativa, proporcionando uma experiência dinâmica ao exibir itens. O usuário terá a 
        capacidade de escolher entre diferentes categorias e interagir de forma intuitiva na seleção de produtos, 
        promovendo uma experiência envolvente e personalizada`
    },
        {
        id: 2,
        title: 'PhiloMatch',
        description: `Aplicação mobile que combina a familiar interface do Tinder com a profunda sabedoria dos filósofos para 
        criar uma plataforma de aprendizado única. O objetivo é tornar o aprendizado da filosofia mais acessível, 
        envolvente e divertido, conectando estudantes e entusiastas da filosofia com pensadores clássicos e suas 
        ideias`
    }

    
]

