export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jonathan Vacaresse',
    subtitle: 'Réalisateur - Artiste visuel',
    description: 'Portfolio et projets de Jonathan Vacaresse, réalisateur et artiste diplômé de l’ENSAPC, étudiant à La Ciné Fabrique.',
    image: {
        src: '/jonathan-portfolio-preview.jpg',
        alt: 'Jonathan Vacaresse - Réalisateur et artiste visuel'
    },
    headerNavLinks: [
        {
            text: 'Accueil',
            href: '/'
        },
        {
            text: 'Projets',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'À propos',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Mentions légales',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/jonathan_vcrs'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jonathan-vacaresse'
        }
    ],
    hero: {
        title: 'Bienvenue sur mon Portfolio',
        text: "Je suis **Jonathan Vacaresse**, réalisateur et artiste visuel. Actuellement étudiant à La Ciné Fabrique, je suis diplômé de l'ENSAPC (Beaux-Arts de Paris-Cergy). Mon univers artistique est **coloré, halluciné et somnambule**. Découvrez mes projets, notamment mon premier film, actuellement en cours de montage.",
        image: {
            src: '/hero-jo.jpg',
            alt: 'Jonathan Vacaresse sur un plateau de tournage'
        },
        actions: [
            {
                text: 'Voir mes Projets',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        title: 'Restez informé de mes projets',
        text: 'Recevez les dernières mises à jour sur mes films et créations directement dans votre boîte mail.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
