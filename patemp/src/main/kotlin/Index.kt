import bindings.Admin
import bindings.Functions

external val exports: dynamic

fun main(args: Array<String>) {


    data class Conversions(
            val eur: Float,
            val usd: Float? = null,
            val czk: Float? = null,
            val pln: Float? = null,
            val rub: Float? = null,
            val timestamp: Long? = null
    )

    exports.testPush = Functions.https.onRequest { req, res ->
        Admin.database().ref("/conversions")
                .push(Conversions(req.query.eur.toString().toFloat()))
                .then {
                    res.status(200).send("done")
                }
    }

    exports.testPush2 = Functions.https.onRequest { req, res ->
        Admin.database().ref("/conversions")
                .push(Conversions(req.query.eur.toString().toFloat()))
                .then {
                    res.status(200).send("done " + req.query.eur.toString().toFloat())
                }
    }
}