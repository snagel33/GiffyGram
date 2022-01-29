import { getUsers } from "../data/provider.js"

export const Footer = () => {
    const users = getUsers()
    console.log(getUsers())

    let html = `
        <footer class="footer">
            <div class="footer__item">
                Posts since
                <select id="yearSelection">
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
                <span id="postCount">25</span>
            </div>
            <div class="footer__item">
                Posts by user
                <select id="userSelection">
                ${
                    users.map(
                        user => {
                            return `<option name="user" value="user--${user.id}">${user.fullName}</option>`
                }
                ).join("")}
                </select>
            </div>
            <div class="footer__item">
                Show only favorites
                <input id="showOnlyFavorites" type="checkbox">
            </div>
        </footer>
            `

    return html
}