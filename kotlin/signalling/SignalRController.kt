package signalling

class SignalRController {
    //WELCOME TO THE REALLY HARD PART: JAVASCRIPT
    fun connectToCanvas(canvasToken: String){
        js("var establishConnectionAndThen = function(func){ $.getScript('SignalR.js', func)}")
        val establishConnectionAndThen = js("establishConnectionAndThen")

    }
}