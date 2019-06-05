package model.canvas

import org.w3c.dom.CanvasLineCap
import org.w3c.dom.CanvasLineJoin
import org.w3c.dom.Path2D
import org.w3c.dom.ROUND

class PolyLine(
        points: FloatArray,
        color: Color,
        private val connectionId: String
) {
    companion object {
        private var _nextId = 0
        private fun standardStroke(color: Color) = Stroke(color, CanvasLineCap.ROUND, CanvasLineJoin.ROUND)
        private fun pointsToHitBoxes(wrappedPoints: List<Pair<Double, Double>>): List<Hitbox> =
                wrappedPoints.zipWithNext().map { dp ->
                    Hitbox(dp.first.first, dp.first.second, dp.second.first, dp.second.second)
                }
    }

    private val stroke: Stroke
    private val lineId: Int
    private val wrappedPoints: MutableList<Pair<Double, Double>>
    val path: Path2D
    private val hitBoxes: MutableList<Hitbox>

    init {
        lineId = _nextId++
        stroke = standardStroke(color)
        wrappedPoints = points.map { p -> p.toDouble() }
                .zipWithNext()
                .filterIndexed { i, _ -> i % 2 == 0 }
                .toMutableList()
        path = Path2D()
        path.moveTo(wrappedPoints.first().first, wrappedPoints.first().second)
        wrappedPoints.drop(1)
                .forEach { p -> path.lineTo(p.first, p.second) }
        hitBoxes = pointsToHitBoxes(wrappedPoints.toList()).toMutableList()
    }

    fun lineTo(point: Pair<Double, Double>) {
        path.lineTo(point.first, point.second)
        hitBoxes.add(Hitbox(wrappedPoints.last().first, wrappedPoints.last().second, point.first, point.second))
        wrappedPoints.add(point)
    }
}