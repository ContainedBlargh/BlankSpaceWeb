package model.canvas

import org.w3c.dom.CanvasLineCap
import org.w3c.dom.CanvasLineJoin
import org.w3c.dom.CanvasPathDrawingStyles

class Stroke(
        val color: Color,
        val strokeCap: CanvasLineCap,
        val strokeJoin: CanvasLineJoin,
        val strokeWidth: Int = 14
)