package controller

import org.w3c.xhr.JSON
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import signalling.SignalRController
import util.Config
import view.CanvasView
import view.HomeView

class HomeController(val view: HomeView) {
    fun createNewCanvas(){
//        throw NotImplementedError("Should create a new canvas with the API and then display this canvas.")
        val req = XMLHttpRequest()
        req.responseType = XMLHttpRequestResponseType.JSON
        req.open("POST", "${Config.SERVER_ADDRESS}/api/v1/canvas", true)
        req.onreadystatechange = fun(_){
            val token = req.response.asDynamic().token
            connectToCanvas(token as String)
        }
        req.send()
    }

    fun connectToCanvas(canvasToken: String){
        //CHECK IF THE TOKEN EXISTS
        val req = XMLHttpRequest()
        req.responseType = XMLHttpRequestResponseType.JSON
        req.open("GET", "${Config.SERVER_ADDRESS}/api/v1/canvas/$canvasToken")
        req.onreadystatechange = fun(_){
            if (req.status >= 300){
                displayError("No canvas with token: $canvasToken could be found...")
            } else {
                CanvasView(view.rootDiv, canvasToken, SignalRController())
            }
        }
        req.send()
    }

    fun displayError(message: String){
        //TODO: Actually display an error in the view.
    }
}