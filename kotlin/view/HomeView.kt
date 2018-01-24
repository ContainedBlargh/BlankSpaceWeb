package view

import controller.HomeController
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.EventListener
import util.PageContext

class HomeView(div: HTMLDivElement): AbstractView(div) {

    override fun markup() =
        """
        <div id="HomeContent">
            <div>
                <label id="TokenLabel">Token:</label>
                <input type="text" id="TokenField" maxLength="4"></input>
            </div>
            <div>
                <button id="CreateButton">Create new Canvas</button>
                <button id="ConnectButton">Connect to Canvas</button>
            </div>
        </div>
        """

    private val controller = HomeController(this)
    private lateinit var tokenField: HTMLInputElement
    private lateinit var createButton: HTMLButtonElement
    private lateinit var connectButton: HTMLButtonElement

    override fun init(pageContext: PageContext) {
        println("Binding HomeView!")
        tokenField = pageContext.bind("TokenField")
        createButton = pageContext.bind("CreateButton")
        connectButton = pageContext.bind("ConnectButton")
        tokenField.addEventListener("input",
                EventListener {
                    tokenField.value = tokenField.value.toUpperCase()
                }
        )
        createButton.onclick = { _ -> println("CreateButton fired!"); controller.createNewCanvas() }
        connectButton.onclick = { _ -> println("ConnectButton fired!"); handleConnectButtonClick() }
    }

    private fun handleConnectButtonClick(){
        val token = tokenField.value.toUpperCase()
        println("Attempting to connect to $token...")
        controller.connectToCanvas(token)
        println("Connected!")
    }
}