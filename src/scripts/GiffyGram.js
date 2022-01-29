import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { contentPosts } from "./feed/Post.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
        <main class="giffygram">
            ${NavBar()}
        <section class="contentPosts">
            ${contentPosts()}
            ${Footer()}
        </section>
        </main>`
}