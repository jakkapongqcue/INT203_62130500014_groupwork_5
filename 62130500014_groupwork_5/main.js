const app = Vue.createApp({
    data() {
        return {
            tasks: [{
                    no: 0,
                    profile: 'images/profile.jpg',
                    userName: 'Jakkapong Praditthanachot',
                    description: 'preview',
                    img: 'images/preview.jpg',
                    heart: false,
                },
                {
                    no: 1,
                    profile: 'https://images.unsplash.com/profile-1599498849251-35d2045d15d5image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Daniele Colucci',
                    description: 'Wadi Rum Village, Giordania',
                    img: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    no: 2,
                    profile: 'https://images.unsplash.com/profile-1568157934859-378fb07773c8image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Giancarlo Corti',
                    description: 'Building, Office Building, Architecture ',
                    img: 'https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    heart: false,
                },
                {
                    no: 3,
                    profile: 'https://images.unsplash.com/profile-1536187323066-07c679d77285?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Cristina Anne Costello',
                    description: 'Building, Office Building, Architecture ',
                    img: 'https://images.unsplash.com/photo-1606240639706-dbd343433c32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                    heart: false,
                },
                {
                    no: 4,
                    profile: 'https://images.unsplash.com/profile-1610926087590-3403d9b90281image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'CURTIS HYSTAD',
                    description: 'BCA-1, Santa Cruz, United States',
                    img: 'https://images.unsplash.com/photo-1610925699730-6ee9612c557c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    no: 5,
                    profile: 'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Surface',
                    description: '',
                    img: 'https://images.unsplash.com/photo-1612832164065-fc35ded2a291?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    no: 6,
                    profile: 'https://images.unsplash.com/profile-1604553045904-1d88269d4dafimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Joshua Hoehne',
                    description: 'Tulip Rain',
                    img: 'https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    no: 7,
                    profile: 'https://images.unsplash.com/profile-1474495609232-c2cc56a491e9?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Davide Cantelli',
                    description: 'Iceland',
                    img: 'https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
            ],

            text: "",
            search: false,
            hasView: false,
            viewImg: '',
            bigIMG: []
        }
    },
    methods: {
        liked(task) {
            this.tasks[task.no].heart = !this.tasks[task.no].heart;
            console.log('Like no :' + task.no)
            console.log('Like :' + task.img)
        },
        toggleView(task) {
            this.viewImg = this.tasks[task.no].img;
            this.hasView = true;
        },
        searching() {
            this.search = !this.search;
        },
        close() {
            this.hasView = false;
        },
        cancel() {
            this.text = "";
        },
        inputText(text) {
            this.text = text;
        },
        forward() {
            this.bigIMG = this.searchlist;
            for (let i = 0; i < this.bigIMG.length; i++) {
                if (this.viewImg == this.bigIMG[i].img) {
                    if (i == this.searchlist.length - 1) {
                        i = 0 - 1;
                    }
                    this.viewImg = this.bigIMG[i + 1].img;
                    break;
                }
            }
        },
        backward() {
            this.bigIMG = this.searchlist;
            for (let i = this.bigIMG.length - 1; i >= 0; i--) {
                console.log(this.bigIMG[i].img)
                if (this.viewImg == this.bigIMG[i].img) {
                    if (i == 0) {
                        i = this.bigIMG.length;
                    }
                    this.viewImg = this.bigIMG[i - 1].img;
                    break;
                }
            }
        },
    },
    computed: {
        countLike() {
            return this.tasks.filter(t => t.heart).length;
        },
        searchlist() {
            return this.tasks.filter((member) => {
                return member.description.toLowerCase().includes(this.text.toLowerCase()) +
                    member.userName.toLowerCase().includes(this.text.toLowerCase())
            });
        },
        countSearch() {
            return this.searchlist.length;
        }
    }
})