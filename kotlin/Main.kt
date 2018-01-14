import org.w3c.dom.HTMLDivElement
import util.PageContext
import view.HomeView
import kotlin.browser.document

/**
 * This file is the root of the Kotlin code running in the app.
 * It should only contain the main method.
 **/
fun main(args: Array<String>) {
    println("Main function running...!")
    PageContext.onReady {
        val contentDiv = document.getElementById("Content")
        if (contentDiv != null && contentDiv is HTMLDivElement){
            //SHOULD PROBABLY STORE THE VIEWS IN A CONTAINER OF SORTS.
            //GIVEN THAT WE MIGHT WANNA CHANGE VIEWS.
            val homeView = HomeView(contentDiv)
        } else {
            error("No contentDiv found!")
        }
    }
}