package controller

import org.w3c.xhr.JSON
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import util.Config
import view.HomeView

class HomeController(view: HomeView) {
    fun createNewCanvas(){
//        throw NotImplementedError("Should create a new canvas with the API and then display this canvas.")
        val req = XMLHttpRequest()
        req.responseType = XMLHttpRequestResponseType.JSON
        req.open("POST", "${Config.SERVER_ADDRESS}/api/v1/canvas", true)
        req.onreadystatechange = fun(_){
            val token = req.response.asDynamic().token
            connectToCanvas(token as String)
        }
        req.onerror = fun(_){
            handleNetworkError()
        }
        req.send()
    }

    fun handleNetworkError(){
        TODO("Handle network errors by displaying something on the main page.\nThis is PageContext territory imo.")
    }

    fun connectToCanvas(canvasToken: String){
        //CHECK IF THE TOKEN EXISTS
        val req = XMLHttpRequest()
        req.responseType = XMLHttpRequestResponseType.JSON
        req.open("GET", "${Config.SERVER_ADDRESS}/api/v1/canvas/$canvasToken")

        //DISPLAY THE CANVAS
        TODO("Navigate to this canvas")

        req.send()
    }
}