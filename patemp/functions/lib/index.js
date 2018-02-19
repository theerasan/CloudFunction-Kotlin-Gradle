(function (_, Kotlin, $module$firebase_functions, $module$firebase_admin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.toString;
  function main$Conversions(eur, usd, czk, pln, rub, timestamp) {
    if (usd === void 0)
      usd = null;
    if (czk === void 0)
      czk = null;
    if (pln === void 0)
      pln = null;
    if (rub === void 0)
      rub = null;
    if (timestamp === void 0)
      timestamp = null;
    this.eur = eur;
    this.usd = usd;
    this.czk = czk;
    this.pln = pln;
    this.rub = rub;
    this.timestamp = timestamp;
  }
  main$Conversions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Conversions',
    interfaces: []
  };
  main$Conversions.prototype.component1 = function () {
    return this.eur;
  };
  main$Conversions.prototype.component2 = function () {
    return this.usd;
  };
  main$Conversions.prototype.component3 = function () {
    return this.czk;
  };
  main$Conversions.prototype.component4 = function () {
    return this.pln;
  };
  main$Conversions.prototype.component5 = function () {
    return this.rub;
  };
  main$Conversions.prototype.component6 = function () {
    return this.timestamp;
  };
  main$Conversions.prototype.copy_isqg9v$ = function (eur, usd, czk, pln, rub, timestamp) {
    return new main$Conversions(eur === void 0 ? this.eur : eur, usd === void 0 ? this.usd : usd, czk === void 0 ? this.czk : czk, pln === void 0 ? this.pln : pln, rub === void 0 ? this.rub : rub, timestamp === void 0 ? this.timestamp : timestamp);
  };
  main$Conversions.prototype.toString = function () {
    return 'Conversions(eur=' + Kotlin.toString(this.eur) + (', usd=' + Kotlin.toString(this.usd)) + (', czk=' + Kotlin.toString(this.czk)) + (', pln=' + Kotlin.toString(this.pln)) + (', rub=' + Kotlin.toString(this.rub)) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  main$Conversions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eur) | 0;
    result = result * 31 + Kotlin.hashCode(this.usd) | 0;
    result = result * 31 + Kotlin.hashCode(this.czk) | 0;
    result = result * 31 + Kotlin.hashCode(this.pln) | 0;
    result = result * 31 + Kotlin.hashCode(this.rub) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  main$Conversions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.eur, other.eur) && Kotlin.equals(this.usd, other.usd) && Kotlin.equals(this.czk, other.czk) && Kotlin.equals(this.pln, other.pln) && Kotlin.equals(this.rub, other.rub) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  function main$lambda$lambda(closure$res) {
    return function () {
      return closure$res.status(200).send('done');
    };
  }
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  function main$lambda(req, res) {
    return $module$firebase_admin.database().ref('/conversions').push(new main$Conversions(toDouble(req.query.eur.toString()))).then(main$lambda$lambda(res));
  }
  function main$lambda$lambda_0(closure$res, closure$req) {
    return function () {
      return closure$res.status(200).send('done ' + toString(toDouble(closure$req.query.eur.toString())));
    };
  }
  function main$lambda_0(req, res) {
    return $module$firebase_admin.database().ref('/conversions').push(new main$Conversions(toDouble(req.query.eur.toString()))).then(main$lambda$lambda_0(res, req));
  }
  function main(args) {
    exports.testPush = $module$firebase_functions.https.onRequest(main$lambda);
    exports.testPush2 = $module$firebase_functions.https.onRequest(main$lambda_0);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin'), require('firebase-functions'), require('firebase-admin')));
