package util

import org.w3c.dom.HTMLElement
import org.w3c.dom.events.EventListener
import kotlin.browser.document
import kotlin.browser.window

class PageContext private constructor() {
    companion object {
        fun onReady(action: () -> Unit){
            document.addEventListener("DOMContentLoaded", EventListener { _ ->
                println("DOMContentLoaded!")
                action.invoke()
            })
        }

        fun onLoad(action: (PageContext) -> Unit){
            window.addEventListener("load", EventListener { _ ->
                action.invoke(PageContext())
            })
        }
    }
    class BindException(message: String): IllegalArgumentException(message)

    /**
     * Should be called within a call to Page::onLoad
     * @param T destination type.
     * @param id id of the element to bind to.
     */
    inline fun <reified T: HTMLElement> bind(id: String): T{
        val element = document.getElementById(id)
        return if(element != null && element is T){
            element
        } else throw BindException("No element with id: $id bindable to type ${T::class.simpleName!!}!")
    }
}