import { getContent, getUsers } from "../data/provider.js"


export const contentPosts = () => {
    const contents = getContent()


    let html = `
        <ul>
            ${
                contents.map((content) => convertContentsToListElement(content)).join("")
            }
        </ul>
    `

    return html
}

const convertContentsToListElement = (content) => {
    const user = getUsers()
    const userName = user.find(user => user.id === content.userId)
    return`
    <div class="post">
        <h2 class="post__title">${content.title}</h2>
        <img class="post__image" src="${content.imageURL}"></img>
        <div class="post__tagline">${content.message}</div>
            <p>Posted by ${userName.fullName} on ${content.postDate}</p>
        <div class="post__actions">
            <button id="favBtn--${content.id}">🌟</button>
            <button id="delBtn--${content.id}">🗑️</button>
        </div>
    </div>
    `
}