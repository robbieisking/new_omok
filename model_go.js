( function() {
var model = {}

var _this = this

model.nosql_push = function(list,input_data) {
    _this[list].push(input_data) }

model.incr = function(data,incr) {
    if ( Number.isInteger(data) && Number.isInteger(incr))
        {_this[data] += incr }
    else
        {console.log("error:data or incr is not integer") }
}

model.pop = function(list) {
    _this[list].pop() }

model.init_list = function(list) {
    _this[list]  = [] }

model.backup_data = function (original,backup) {
    _this[backup] = _this[original] }

model.recover_data = function(original,backup) {
    _this[original] =_this[backup] }

model.call_data = function(called_data) {
    return _this[called_data]}


  if (typeof define === "function" && define.amd) this.model = model, define(model); else if (typeof module === "object" && module.exports) module.exports = model; else this.model = model;


}) ();
