package bindings

@JsModule("firebase-functions")
@JsNonModule
external object Functions {
    fun config(): dynamic
    val https: dynamic
}