package view

import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLDivElement
import signalling.SignalRController
import util.PageContext

class CanvasView(div: HTMLDivElement, val signalRController: SignalRController) : AbstractView(div) {

    private lateinit var canvas: HTMLCanvasElement

    override fun initialMarkup(): String {
        return """
            <div id="CanvasContent">
                <canvas id="Canvas"></canvas>
            </div>
            """
    }
    override fun init(pageContext: PageContext) {
        canvas = pageContext.bind("Canvas")
    }
}