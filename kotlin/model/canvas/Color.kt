package model.canvas

class Color {
    companion object {
        private fun fromRgb(r: Int, g: Int, b: Int): Int {
            return (((r.shl(8)) + g).shl(8)) + b
        }

        private fun toHexString(r: Int, g: Int, b: Int) =
            "#${r.toString(16)}${g.toString(16)}${b.toString(16)}"
    }

    var rgb: Int = 0
    var hex: String = ""

    constructor(inputHex: String) {
        if (!((inputHex.startsWith("#") && inputHex.length == 7) || (inputHex.length == 6))) {
            error("Provided inputHex needs to be on the format \\#[[0-9]|[A-F]]{6}")
        }
        val hexString = if (inputHex.startsWith("#")) inputHex.substring(1) else inputHex
        hex = "#$hexString"
        val r = hexString.substring(0, 2).toInt(16)
        val g = hexString.substring(2, 4).toInt(16)
        val b = hexString.substring(4, 6).toInt(16)
        rgb = fromRgb(r, g, b)
    }

    constructor(r: Int, g: Int, b: Int) {
        rgb = fromRgb(r, g, b)
        hex = toHexString(r, g, b)
    }
}