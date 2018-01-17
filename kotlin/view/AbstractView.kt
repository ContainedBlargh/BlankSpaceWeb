package view

import org.w3c.dom.HTMLDivElement
import util.PageContext

abstract class AbstractView(val rootDiv: HTMLDivElement){
    protected abstract fun markup() : String
    protected abstract fun init(pageContext: PageContext)
    private fun initialize(){
        println("Inserting html by calling abstract method!")
        rootDiv.innerHTML = markup()
        println("Binding markup with abstract method!")
        PageContext.onLoad {
            pageContext: PageContext -> init(pageContext)
        }
    }
    init {
        initialize()
    }
}