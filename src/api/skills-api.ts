export default (function skillsApi() {
    const skillsData = [
        {
            section: 'Language',
            iconPath: '/assets/icons/javascript.svg',
            name: 'JavaScript',
            proficiency: 'Advanced',
            text: 'Language of choice: Lorem ipsum desu ka'
        },
        {
            section: 'Language',
            iconPath: '/assets/icons/typescript.svg',
            name: 'TypeScript',
            proficiency: 'Advanced',
            text: 'Statically typed language used in Angular'
        },
        {
            section: 'Language',
            iconPath: '/assets/icons/c-sharp.svg',
            name: 'C#',
            proficiency: 'Advanced',
            text: 'Object-oriented language used in .NET stack'
        },
        {
            section: 'Language',
            iconPath: '/assets/icons/python.svg',
            name: 'Python',
            proficiency: 'Intermediate',
            text: 'Scripting language used to automate certain processes'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/angular.svg',
            name: 'Angular',
            proficiency: 'Advanced',
            text: 'Front-end framework by Google utilizing typescript'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/vue.svg',
            name: 'VueJS',
            proficiency: 'Advanced',
            text: 'Popular front-end framework'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/react.svg',
            name: 'ReactJS',
            proficiency: 'Proficient',
            text: 'Leading front-end framework designed by Facebook'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/html5.svg',
            name: 'HTML 5',
            proficiency: 'Advanced',
            text: 'Mark-up language for rendering and displaying data'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/css3.svg',
            name: 'CSS 3',
            proficiency: 'Advanced',
            text: 'Styling language'
        },
        {
            section: 'Front End',
            iconPath: '/assets/icons/sass.svg',
            name: 'Sass',
            proficiency: 'Advanced',
            text: 'Pre-compiled CSS language to add logic and functions into CSS'
        },
        {
            section: 'Back End',
            iconPath: '/assets/icons/nodejs.svg',
            name: 'NodeJS',
            proficiency: 'Advanced',
            text: 'JavaScript framework for back-end servers'
        },
        {
            section: 'Back End',
            iconPath: '/assets/icons/dotnet.svg',
            name: 'Microsoft .NET',
            proficiency: 'Advanced',
            text: 'Enterprise framework for object-oriented back-end servers'
        },
        {
            section: 'Database',
            iconPath: '/assets/icons/postgresql.svg',
            name: 'PostgreSQL',
            proficiency: 'Advanced',
            text: 'Leading open-source database'
        },
        {
            section: 'Database',
            iconPath: '/assets/icons/oracle.svg',
            name: 'Oracle Database',
            proficiency: 'Advanced',
            text: 'Oracle database with specific syntax'
        },
        {
            section: 'Database',
            iconPath: '/assets/icons/mongodb.svg',
            name: 'MongoDB',
            proficiency: 'Proficient',
            text: 'Leading no-SQL, open-source database'
        },
        {
            section: 'DevOPs',
            iconPath: '/assets/icons/aws.svg',
            name: 'Amazon Web Services',
            proficiency: 'Proficient',
            text: 'Leading cloud-platform for all web services'
        },
        {
            section: 'DevOPs',
            iconPath: '/assets/icons/heroku.svg',
            name: 'Heroku',
            proficiency: 'Advanced',
            text: 'Easy-to-start dev ops platform built on AWS infrastructure'
        }
    ];

    function getSkillsData() {
        return skillsData;
    }

    return {
        getSkillsData: getSkillsData
    }
})();

