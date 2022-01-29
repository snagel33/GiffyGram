import { getUsers } from "../data/provider.js"

export const messageForm = () => {
    const user = getUsers()

    return `
    <form class="directMessage">
    <h1>Direct Message</h1>

    <div class="directMessage__close">
        <button type="submit" id="directMessage__close">X</button>
    </div>
        <div class="message__section">
            <label for="recipient-names">Recipient</label>
            <select name="recipient-names" id="recipient-names">
                <option>${user.fullName}</option>

            </select>
        </div>

        <div class="message__section">
            <label class="label" for="message">Message:</label>
            <input type="text" name="message__input" placeholder="Message to user">
        </div>

        <button type="submit">Save</button>
        <button type="submit">Cancel</button>
    </form>
    `

} 