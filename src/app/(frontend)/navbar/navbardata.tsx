export const Navebardata = {
    logo: '/LilyCare.svg',
    navbaritem:[
        {
            item: "HOME",
            link: '/'
        },
        {
            item: "ABOUT",
            link: '/about'
        },
        
        {
            item: "SERVICES",
            link: "/services",
            dropdown: [
              {
                label: 'Support Coordination & In Home Support',
                link: "/services/support-coordination-in-home-support-ndis-services-idss"
              },
              {
                label: 'Community Participation & Skills Development',
                link: "/services/community-participation-skills-development"
              },
              {
                label: 'Respite, Accommodation & Supported Independent Living',
                link: "/services/respite-accommodationsil-invictus-disability-support-services"
              },
              {
                label: 'Aged Care',
                link: "/services/aged-care"
              }
            ]
          },
          
        {
            item: "CONTACT",
            link: "contact"
        }
    ]

}