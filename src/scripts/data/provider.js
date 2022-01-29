const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: [],
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const fetchUser = () => {
    return fetch(`${apiURL}/user`)
        .then(response => response.json())
        .then(
            (users) => {
                // Store the external state in application state
                applicationState.currentUser = users
            }
        )
}

export const getUsers = () => {
    return applicationState.currentUser.map(user => ({...user}))
}

export const fetchContent = () => {
    return fetch(`${apiURL}/content`)
        .then(response => response.json())
        .then((contentAPI) => {
            applicationState.currentContent = contentAPI
        })
}

export const getContent = () => {
    return applicationState.currentContent.map(content => ({...content}))
}

export const sendFav = (userFav) => {
    const fetchFavs = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFav)
    }

    return fetch(`${apiURL}/userFavorite`, fetchFavs)
        .then(response => response.json())
        .then(() => {

        })
}

export const saveFav = (userFav) => {
    const postFav = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFav)
    }
    return fetch(`${apiURL}/userFavorite`, postFav)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("userFavoriteAdded"))
        })
}

export const deleteContent = (id) => {
    // const delFav = {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userFav)
    // }
    // return fetch(`${apiURL}/content/${id}`, {method: "DELETE"})
    return fetch(`${apiURL}/content/${id}`, {method: "DELETE"})
        // .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("contentDeleted"))
        })
}

// export const deleteUserFavorite = (id) => {
//     return fetch(`${apiURL}/userFavorite/${id}`, { method: "DELETE" })
//         .then(
//             () => {
//                 applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )
// }