package controller

import view.HomeView

class HomeController(view: HomeView) {
    fun createNewCanvas(){
        throw NotImplementedError("Should create a new canvas with the API and then display this canvas.")
    }

    fun connectToCanvas(canvasToken: String){
        throw NotImplementedError("Should connect to a canvas by setting up a new canvas page.")
    }
}