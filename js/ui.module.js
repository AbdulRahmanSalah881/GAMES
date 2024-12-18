export class Ui {
    desplayDataOfGames(data) {
        console.log(data)
        let gamesBox = ``
        for (let i = 0; i < data.length; i++) {
            const description = data[i].short_description; // Assume this is the description string
            const extractedWords = description.split(' ').slice(0, 15).join(' ') + '.';
            gamesBox += `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card" data-id="${data[i].id}"  >
            <div class="container box pt-2">
                <img src="${data[i].thumbnail}" class="card-img-top"
                    alt="...">

                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="card-title text-white">${data[i].title}</h5>
                        </div>
                        <div><button class="btn  btn-primary"><a href="${data[i].game_url}">Free</a></button></div>

                    </div>
                    <p class=" pt-2 card-text text-center text-secondary longtext ">${extractedWords
                } </p>

                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div class="text-white back d-flex justify-content-center align-items-center ">
                        <p>${data[i].genre}</p>
                    </div>
                    <div class="text-white back d-flex justify-content-center align-items-center ">
                        <p>${data[i].platform}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`


        }
        document.getElementById("dataofcard").innerHTML = gamesBox;
    }


    deplaydata(data) {
        const description = data.description; // Assume this is the description string
        const extractedWords = description.split(' ').slice(0, 200).join(' ') ;
        const datelsbox = `
                <div class="row">
                    <div class="col-4 name ">
                        <h2>Details Game</h2>
                        <div class="w-100"><img src="${data.thumbnail}" alt=""></div>
                    </div>
                    <div class="col-8 pt-5">
                        <h2 class="d-flex title">
                            <p>Title:</p>
                            <p class="ps-2">${data.title}</p>
                        </h2>
                        <div class="d-flex">
                            <p class="pe-2">Category:</p>
                            <p class="rounded-5 bg-primary ps-2 pe-2"> ${data.title}</p>
                        </div>
                        <div class="d-flex">
                            <p class="pe-2">Platform:</p>
                            <p class=" rounded-5 bg-primary ps-2 pe-2"> ${data.platform}</p>
                        </div>
                        <div class="d-flex">
                            <p class="pe-2">Status:</p>
                            <p class="rounded-5 bg-primary ps-2 pe-2">${data.
                status
            }</p>
                        </div>
                        <div>
                            <p>${extractedWords}</p>
                        </div>
                        <div>
                            <a href="${data.game_url}" class="btn_datielss">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn_datiels" type="button">Show Game</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            `
        document.getElementById("Daitels").innerHTML = datelsbox;


    }
}