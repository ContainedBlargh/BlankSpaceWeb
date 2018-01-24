package view

import model.CanvasModel
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLDivElement
import signalling.SignalRController
import util.PageContext

class CanvasView(div: HTMLDivElement, val token: String, val signalRController: SignalRController) : AbstractView(div) {

    private lateinit var canvas: HTMLCanvasElement
    private lateinit var model: CanvasModel

    override fun markup() =
        """
        <div id="CanvasContent">
            <canvas id="Canvas"></canvas>
        </div>
        """

    override fun init(pageContext: PageContext) {
        canvas = pageContext.bind("Canvas")
        model = CanvasModel()
    }
}
