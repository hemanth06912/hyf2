
function fetchJSON(user){
    const URL = "https://api.github.com/search/repositories?q=user:"+`${user}`;
    return fetch(URL).then(response => response.json());
}
Promise.all([fetchJSON('Sreelatha-Vallabhaneni'),fetchJSON('Ekamba'),fetchJSON('mahieakhtar')])
.then(list => {
    console.log(renderRepos(list))
})
.catch(error => console.log(error)
);

function renderRepos(users){
    users.forEach(user => {
        console.log(user)
        const Ul = document.createElement("ul");
        document.body.appendChild(userUl);
        Ul.innerHTML = `<h1>${user.items[0].owner.login}</h1>`; 
        user.items.forEach(item => {
            const Li = document.createElement('li')
            userUl.appendChild(Li).innerHTML = 
            `<h3>${item.name}: ${item.git_url}</h3>`;
         })
    });
}