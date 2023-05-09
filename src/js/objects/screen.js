const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.classList.remove("hide")

    this.userProfile.innerHTML = `
    <div class="user-info">
        <img src="${user.avatarUrl}" alt="user-avatar"/>
        <div class="data">
            <h1>${user.name ?? "Don't have Registered name"}</h1>
            <p>${user.bio ?? "Don't have Registered Bio"}</p>
            <h3>Followers: ${user.followers}</h3>
            <h3>Following: ${user.following}</h3>
        </div>
    </div>
    `

    let eventsItems = ""

    function realQuantity(type, quantity) {
      if (type === "events") {
        return user.events.length < quantity ? user.events.length : quantity
      } else {
        return user.repositories.length < quantity
          ? user.repositories.length
          : quantity
      }
    }

    function showEvents(eventsQuantity) {
      const realEventsQuantity = realQuantity("events", eventsQuantity)

      for (let i = 0; i < realEventsQuantity; i++) {
        let eventType = user.events[i].type
        eventsItems += `
            <li>
              <a class="event" href="${user.events[i].repo.url}" target="_blank">
                <h4>${user.events[i].repo.name}</h4>
                <p>- ${eventType}</p>
              </a>
            </li>
            `
      }
    }
    showEvents(10)

    this.userProfile.innerHTML += `
        <div class="events">
            <h2>Events</h2>
            <ul>${
              user.events.length > 0
                ? eventsItems
                : "<li class='empty-data' >Don't have Registered events</li>"
            }
            </ul>
        </div>
        `

    let repositoriesItems = ""

    function showRepositories(repositoriesQuantity) {
      const realRepositoriesQuantitys = realQuantity(
        "repositories",
        repositoriesQuantity
      )
      for (let i = 0; i < realRepositoriesQuantitys; i++) {
        let repo = user.repositories[i]
        repositoriesItems += `
          <li>
            <a href="${repo.html_url}" target="_blank">
              <h4>${repo.name}</h4>
              <ul class="repository-info">
                <li>🍴${repo.forks}</li>
                <li>⭐${repo.stargazers_count}</li>
                <li>👀${repo.watchers}</li>
                ${repo.language ? `<li>🌅${repo.language}</li>` : ""}
              </ul>
            </a>
          </li>
            `
      }
    }
    showRepositories(10)

    this.userProfile.innerHTML += `
        <div class="repositories-container">
            <h2>Repositories</h2>
            <ul class="repositories">${
              user.repositories.length > 0
                ? repositoriesItems
                : "<li class='empty-data' >Don't have Registered repositories</li>"
            }</ul>
        </div>
        `
  },
  renderNotFound() {
    this.userProfile.classList.remove("hide")

    this.userProfile.innerHTML = "<h3>User not found</h3>"
  },
}

export { screen }
