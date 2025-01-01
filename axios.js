const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addJoke = async () => {
    const jokeText = await getJokes();
    const li = document.createElement("LI");
    li.append(jokeText);
    jokes.append(li);
}

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json",
            },
        };

        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke);
        return res.data.joke;

    } catch (error) {
        return "data tidak dapat dimuat";
    }
};

button.addEventListener("click", addJoke);