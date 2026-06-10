function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done");
            }, 2000);
    });
}

simulateAsyncOperation()
    .then((result) => console.log(result));



async function fetchCatBreeds() {
	try{
        const reply = await fetch ("https://catfact.ninja/breeds")

        if (!reply.ok) {throw new Error(`HTTP error! status: ${reply.status}`); }

        const data = await reply.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error("Error fetching breeds:", error.message);
    }
}


fetchCatBreeds().then((data) => console.log(data));

function getSelectedValue() {
    const value = document.getElementById("factCount").value;
    console.log("Selected value:", value);
}


async function displayCatFacts() {

    const count = document.getElementById("factCount").value;
    const box = document.getElementById("factsContainer");

    try{
        const rep = await fetch(`https://catfact.ninja/facts?limit=${count}`);
        const data = await rep.json();
        box.innerHTML = "";


        data.data.forEach(item => {
            box.innerHTML += `<p>${item.fact}</p>`;
        }) 
    }catch (error) {

        box.innerHTML = "API error";

    }
}


const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};

const { leader, base: { location: baseLocation } } = samuraiPizzaCats;

console.log(leader);
console.log(baseLocation);

