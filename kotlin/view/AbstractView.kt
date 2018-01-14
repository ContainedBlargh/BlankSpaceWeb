package view

import org.w3c.dom.HTMLDivElement
import util.PageContext

abstract class AbstractView(protected val div: HTMLDivElement){
    protected abstract fun initialMarkup() : String
    protected abstract fun init(pageContext: PageContext)
    private fun initialize(){
        println("Inserting html by calling abstract method!")
        div.innerHTML = initialMarkup()
        println("Binding markup with abstract method!")
        PageContext.onLoad {
            pageContext: PageContext -> init(pageContext)
        }
    }
    init {
        initialize()
    }
}