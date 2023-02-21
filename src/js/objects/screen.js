const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="user-avatar"/>
                                            <div class="data">
                                                <h1>${user.name ?? "Don't have Registered name"}</h1>
                                                <p>${user.bio ?? "Don't have Registered bio"}</p>
                                                <h3>Followers: ${user.followers}</h3>
                                                <h3>Following: ${user.following}</h3>
                                            </div>
                                        </div>`

        let eventsItems = ""
        let eventsQuantity = 20

        function showEventsQuantity() {
            for (let i = 0; i < user.events.length; i++) {
                if (eventsQuantity === 0) {
                    return
                }
                if (user.events[i].type === "PushEvent") {
                    eventsItems += `<li class="event">
                                    <h4><a href="${user.events[i].repo.url}" target="_blank">${user.events[i].repo.name}</a></h4>
                                    <p>- ${user.events[i].payload.commits[0].message} </p>
                                </li>`
                    eventsQuantity--
                } else if (user.events[i].type === "CreateEvent") {
                    eventsItems += `<li class="event">
                                    <h4><a href="${user.events[i].repo.url}" target="_blank">${user.events[i].repo.name}</a></h4>
                                    <p> - Repository created</p>
                                </li>`
                    eventsQuantity--
                }
            }
        }

        showEventsQuantity()

        if (user.events.length > 0) {
            this.userProfile.innerHTML += ` <div class="events">
                                                <h3>Events</h3>
                                                <ul>${eventsItems}</ul>
                                            </div>`
        }

        let repositoriesItems = ""

        user.repositories.forEach(repo => {
            // let carro = "aa"

            async function getRepositoriesLanguages(repo) {
                const response = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`)

                // carro = "aaa"

                return await response.json()

            }
            // console.log(getRepositoriesLanguages(repo))
            const teste = getRepositoriesLanguages(repo)

            

            console.log(teste)
            console.log(teste.css)

            // console.log(carro)

            // async function test(repo) {
            //     var repositoriesLanguagesResponse = await getRepositoriesLanguages(repo)
            // }

            // console.log(test(repo))



            // console.log(grepositoriesLanguagesResponse)

            // console.log(repo)
            // console.log(repo.languages_url)
            repositoriesItems += `  <li>
                                        <a href="${repo.html_url}" target="_blank">
                                        ${repo.name}
                                        
                                            <ul class="repository-info">
                                                <li>
                                                    🍴${repo.forks}            
                                                </li>
                                                <li>
                                                    ⭐${repo.stargazers_count}          
                                                </li>
                                                <li>
                                                    👀${repo.watchers}             
                                                </li>
                                                <li>
                                                    🌅${repo.language ?? ""}           
                                                </li>
                                            </ul>
                                        </a>
                                    </li>`

        })


        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>User not found</h3>"
    }
}

export { screen }