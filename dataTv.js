const search = document.querySelector("#search-form");

search.addEventListener("submit", async (e) => {
    e.preventDefault()
    document.querySelectorAll("img").forEach((img) => img.remove())

    const keyword = search.elements.query.value;
    const config = {
        // params: { q: keyword }
        params: {
            q: keyword,
            embed: "episode",
            imdb: "ttq235727623"
        }
    }
    const dataTv = await axios.get(" https://api.tvmaze.com/search/shows", config);
    getMovie(dataTv.data)
    console.log(dataTv.data);
    search.elements.query.value = "";
})

const getMovie = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            img.style.marginRight = "5px";
            img.style.marginLeft = "10px";
            img.style.marginTop = "10px";
            document.body.append(img);
        }
    }
}