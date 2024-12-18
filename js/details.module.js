import { Ui } from "./ui.module.js";

export class datilsInformayion {
    constructor(id) {
        this.Ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".Daitels").classList.add("d-none")
            document.querySelector(".games").classList.remove("d-none")

        });
        this.getdetailes(id)
    }

    async getdetailes(idname) {
        const loading = document.querySelector(".Spinner");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '08ca83f98cmsh97dadf38b7ee59ap1d4888jsne489a27b1ce7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idname}`, options)
        if (api.ok) {
            const data = await api.json();
            let allData = data
            console.log(allData)
            this.Ui.deplaydata(allData)
            setTimeout(()=>{
                loading.classList.add("d-none");


            },2000)

        }



    }
}


// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '08ca83f98cmsh97dadf38b7ee59ap1d4888jsne489a27b1ce7',
// 		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }