const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = ` <div class="info">
                            <img src="${user.avatarUrl}" alt="user-avatar"/>
                            <div class="data">
                                <h1>${user.name ?? "Don't have Registered name"}</h1>
                                <p>${user.bio ?? "Don't have Registered bio"}</p>
                                <h3>Followers: ${user.followers}</h3>
                                <h3>Following: ${user.following}</h3>
                            </div>
                         </div>`

        let repositoriesItems = ""

        user.repositories.forEach(repo => {
            repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
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