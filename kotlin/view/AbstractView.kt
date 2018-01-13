package view

import org.w3c.files.File
import org.w3c.files.FileReader

/**
 * An abstract construct responsible for binding a new view to html.
 * @param contentDestination a jquery element in the root view, where the html is to be inserted.
 * @param file the html file to bind to.
*/
abstract class AbstractView(contentDestination: dynamic, file: File) {
    init {
        val fl = FileReader()
        val html = fl.readAsText(file)
        contentDestination.html(html)
        /*
            TODO:
                My idea is to have each view class bind to a given html file, just like in XAML or angular.
                But I'm having a hard time getting access to files from javascript.
                I'm starting to think URL's might be better suited as references to HTML...
                Otherwise, maybe I could just have a function for setting up the content of the web page when a class
                is instantiated... but this doesn't give that XAML-like flexibility.
         */
    }
}