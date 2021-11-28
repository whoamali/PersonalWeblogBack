exports.index = (req, res) => {
    res.render(
        "index",
        {
            pageTitle: "Ali's personal blog",
            pageIcon: "img/favicon.webp",
            preloaderEnable: true,
            personName: "Ali Soleimani",
            personAge: "18",
            personBirthday: "18 Esfand",
            personCity: "Tabriz",
            personMobile: "09221001614",
            personTellNumber: "041-32810158",
            personEmail: "alisoleimani199@gmail.com",
            personSocial: [
                {
                    title: "telegram",
                    icon: "fab fa-telegram-plane",
                    link: "https://t.me/alanton_co"
                },
                {
                    title: "instagram",
                    icon: "fab fa-instagram",
                    link: "/"
                },
                {
                    title: "twitter",
                    icon: "fab fa-twitter",
                    link: "/"
                },
                {
                    title: "github",
                    icon: "fab fa-github",
                    link: "https://github.com/ali-sl-code"
                }
            ],
            personJobTitle: "Developer",
            sectionAboutMeDesc: "I am interested in programming and teaching it. <br> I have been learning it for more than two year and i am still looking forward to learn new skills",
            personProjects: [
                {
                    name: "Rock Paper Scissors",
                    status: "Offline",
                    image: "img/Rock.webp",
                    link: "/",
                    github: "/"
                },
                {
                    name: "Countries",
                    status: "Offline",
                    image: "img/Countries.webp",
                    link: "/",
                    github: "/"
                },
                {
                    name: "Bugs",
                    status: "Offline",
                    image: "img/Bugs.webp",
                    link: "/",
                    github: "/"
                },
                {
                    name: "Claculator",
                    status: "Offline",
                    image: "img/Claculator.webp",
                    link: "http://ali-sl.gigfa.com/Calculator/",
                    github: "https://github.com/ali-sl-code/Calculator"
                }
            ],
            personSkills: [
                {
                    name: "HTML",
                    icon: "fab fa-html5",
                    range: "90%"
                },
                {
                    name: "CSS",
                    icon: "fab fa-css3-alt",
                    range: "90%"
                },
                {
                    name: "JAVASCRIPT",
                    icon: "fab fa-js",
                    range: "80%"
                },
                {
                    name: "BULMA",
                    icon: "far fa-file-code",
                    range: "80%"
                },
                {
                    name: "BOOTSTRAP",
                    icon: "fas fa-bold",
                    range: "80%"
                },
                {
                    name: "SCSS",
                    icon: "fab fa-sass",
                    range: "90%"
                },
                {
                    name: "JQUERY",
                    icon: "far fa-file-code",
                    range: "90%"
                },
                {
                    name: "NODE JS",
                    icon: "fab fa-node",
                    range: "50%"
                },
                {
                    name: "EXPRESS JS",
                    icon: "fab fa-node-js",
                    range: "30%"
                },
                {
                    name: "Python",
                    icon: "fab fa-python",
                    range: "50%"
                }
            ]
        }
    )
}