package model.canvas

import org.w3c.dom.Path2D

class PolyLine {
    companion object {
        private var _nextId = 0
    }
    private val lastPoint: Int

    private val connectionId: Int

    private val lineId: Int

    val path: Path2D

    private val hitboxes: List<Hitbox>

    val paint: Color

    init {

    }
}