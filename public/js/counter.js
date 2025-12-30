
const apiUrl = "https://msmcwfb857.execute-api.us-east-1.amazonaws.com/produccio/Visitas";

async function updateCounter() {
    try {

        let response = await fetch(apiUrl);
        let data = await response.json();
        

        let visites = JSON.parse(data.body);


        document.getElementById("counter").innerText = visites;
    } catch (error) {
        console.error("Error al carregar el comptador:", error);
        document.getElementById("counter").innerText = "...";
    }
}


updateCounter();