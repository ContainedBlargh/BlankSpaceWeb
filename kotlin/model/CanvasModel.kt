package model

import model.canvas.PolyLine
import kotlin.jvm.Synchronized

class CanvasModel {
    private val polyLines = mutableListOf<PolyLine>()

    @Synchronized
    fun AccessPolyLines(action: (MutableList<PolyLine>) -> Unit){
        action.invoke(polyLines)
    }
}