fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.any);
    title.textContent = "Joke of The Day";
    if (data.type === "single") {
        joke.textContent = data.joke;
    } else if (data.type === "twopart") {
        joke.textContent = data.setup + " ... " + data.delivery;
    }
})

programming.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log("programming");
        console.log(data);
        console.log(data.programming);
        title.textContent = "A Random Programming Joke";
        if (data.type === "single") {
            joke.textContent = data.joke; 
        } else if (data.type === "twopart") {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
})

misc.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/misc?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log("misc");
        console.log(data);
        console.log(data.misc);
        title.textContent = "A Random Misc Joke";
        if (data.type === "single") {
            joke.textContent = data.joke; 
        } else if (data.type === "twopart") {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
})

pun.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log("pun");
        console.log(data);
        console.log(data.pun);
        title.textContent = "A Random Pun";
        if (data.type === "single") {
            joke.textContent = data.joke; 
        } else if (data.type === "twopart") {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
})

spooky.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log("spooky");
        console.log(data);
        console.log(data.spooky);
        title.textContent = "A Random Spooky Joke";
        if (data.type === "single") {
            joke.textContent = data.joke; 
        } else if (data.type === "twopart") {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
})

christmas.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log("christmas");
        console.log(data);
        console.log(data.christmas);
        title.textContent = "A Random Christmas Joke";
        if (data.type === "single") {
            joke.textContent = data.joke; 
        } else if (data.type === "twopart") {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
})





