package view

import org.w3c.files.File
import org.w3c.files.FileReader

/**
 * An abstract construct responsible for binding a new view to html.
 * @param contentDestination a jquery element in the root view, where the html is to be inserted.
 * @param file
*/
abstract class AbstractView(contentDestination: dynamic, file: File) {
    init {
        val fl = FileReader()
        val html = fl.readAsText(file)
        contentDestination.html(html)
    }
}