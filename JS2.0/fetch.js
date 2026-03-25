//fetch status checking and response checking:
let p = fetch("https://api.github.com/users/rangerSlider");
p.then((response) => {
    console.log(response.status); // HTTP status (200, 404 etc)
    console.log(response.ok);     // true/false (success kina)
    console.log(response.headers);// headers info
    //   return (response.text()); 
    return response.json();       // JSON e convert
}).then((nuri) => {
    console.log(nuri);            //final data
});



//post methods die fetching:
let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: 'joy',
        body: 'cse',
        userid: 62,
    }),
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json))




//fetch async anawit function use kore :

const todo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: 'joy adhikary',
            body: 'nuri',
            userid: 62,
        }),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json()
    return response;
}

const work =async() =>{
    let todo1 = await todo()
    console.log(todo1);
    
}
work();


