import { fetchContent, fetchUser, saveFav, deleteContent } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("delBtn--")) {
        const contentDel = click.target.id.split("--")[1]
        deleteContent(parseInt(contentDel)).then(
            () => {
                fetchContent().then(
                    () => {
                        applicationElement.innerHTML = GiffyGram()
                    }
                )
            }
        )
    }
})


applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("favBtn--")) {
        const user = parseInt(localStorage.getItem("gg_user"))
        const [,contentId] = click.target.id.split("--")

        const userFav = {
            userId: user,
            contentId: parseInt(contentId)
    }
        saveFav(userFav)
    }
})


const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    
        fetchContent().then(
            () => {
            if (user) {
                fetchUser().then(
                    () => {
                        applicationElement.innerHTML = GiffyGram()
                    }
                )
            } else {
                fetchUser().then(
                    () => {
                        applicationElement.innerHTML = LoginForm()
                    }
                )
            }
        }
        )
    }  

renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customElement => {
        renderApp()
    }
)