import { baseUrl } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos`)

    // console.log(await responseRepositories.json())
    // const response = await fetch(`https://api.github.com/repos/${userName}/product-preview-card-component-main/languages`)

    return await response.json()
}

// async function getRepositoriesLanguages(userName) {
//     // console.log
//     const response = await fetch(`https://api.github.com/repos/${userName}/product-preview-card-component-main/languages`)
//     return await response.json()
// }


export { getRepositories }