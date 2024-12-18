import { Ui } from "./ui.module.js";
import { datilsInformayion } from "./details.module.js";

let allData = []






export class GamesInformation {
    constructor() {
        this.getdata("mmorpg");
        let ali = document.querySelectorAll(".nav-item a")
        ali.forEach((link) => {
            link.addEventListener("click", (e) => {
                // console.log(e.target.dataset)
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getdata(e.target.dataset.category)
                console.log(e.target.dataset)
            });

        });
        this.Ui = new Ui();

        // document.getElementById("card").addEventListener("click", () => {
        //     document.querySelector(".Daitels").classList.remove("d-none")
        //     document.querySelector(".games").classList.add("d-none")


        // })

    }        


    async getdata(category) {
        const loading = document.querySelector(".Spinner");
        loading.classList.remove("d-none");


        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '08ca83f98cmsh97dadf38b7ee59ap1d4888jsne489a27b1ce7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        if (api.ok) {
            const data = await api.json();
            allData = data
            // console.log(allData)
            this.Ui.desplayDataOfGames(allData)
            this.startEvent();
            setTimeout(()=>{
                loading.classList.add("d-none");


            },2000)

        }
     }

        startEvent() {
            document.querySelectorAll(".card").forEach((item) => {
                item.addEventListener("click", () => {
                    const id = item.dataset.id;
                    this.showDetiels(id);
                    console.log(id)
                });
            });

        }

        showDetiels(idname){
            let iddetaiels = new datilsInformayion(idname);
            console.log(iddetaiels)
           
            document.querySelector(".Daitels").classList.remove("d-none")
            document.querySelector(".games").classList.add("d-none")

        }

   



}


// }
// async function getdata() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '08ca83f98cmsh97dadf38b7ee59ap1d4888jsne489a27b1ce7',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };


//     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`,options)
//    if(api.ok){
//     const data = await api.json();
//     allData=data
//     console.log(allData)
//    }
// }

















