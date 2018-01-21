package model

import model.canvas.PolyLine

class CanvasModel {
    private val polyLines = mutableListOf<PolyLine>()
    @Synchronized fun AccessPolyLines(action: (MutableList<PolyLine>) -> Unit){
        action.invoke(polyLines)
    }
}