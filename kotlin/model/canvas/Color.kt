package model.canvas

class Color{
    companion object {
        private fun fromRgb(a:Int, r: Int, g: Int, b: Int): Int {
            return (((r.shl(8)) + g).shl(8)) + b
        }
        private fun toHexString(a:Int, r: Int, g: Int, b: Int): String{
            TODO("Implement some conversion to hex string")
        }
    }
    val rgb: Int
    val hex: String
    constructor(hex: String){
        if (!((hex.startsWith("#") && hex.length == 7) || (hex.length == 6))){
            error("Provided hex needs to be on the format \\#[[0-9]|[A-F]]{6}")
        }
        val hexString = if(hex.startsWith("#")) hex.substring(1) else hex
        this.hex = "#"+hexString
        val r = hexString.substring(0, 2).toInt(16)
        val g = hexString.substring(2, 4).toInt(16)
        val b = hexString.substring(4, 6).toInt(16)
        rgb = TODO("Shift above 8 to the left and get me that ALPHA VALUE!")
    }
    constructor(a: Int, r: Int, g: Int, b:Int){
        rgb = fromRgb(a, r, g, b)
        hex = toHexString(a, r, g, b)
    }
}