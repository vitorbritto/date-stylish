'use strict';

var date = new Date();


/**
 * Return year in "YYYY" format
 *
 * @method:     setYear
 * @return:     {String}
 * @api:        private
 */

var setYear = function() {
    return date.getFullYear();
};


/**
 * Return month in "MM" format
 *
 * @method:     setMonth
 * @return:     {String}
 * @api:        private
 */

var setMonth = function() {
    return ('0' + (date.getMonth() + 1)).slice(-2);
};


/**
 * Return day in "DD" format
 *
 * @method:     setDay
 * @return:     {String}
 * @api:        private
 */

var setDay = function() {
    return ('0' + (date.getDate() + 1)).slice(-2);
};


/**
 * Return hours in "hh" format
 *
 * @method:     setHours
 * @return:     {String}
 * @api:        private
 */

var setHours = function() {
    return ('0' + date.getHours()).slice(-2);
};


/**
 * Return minutes in "mm" format
 *
 * @method:     setMinutes
 * @return:     {String}
 * @api:        private
 */

var setMinutes = function() {
    return ('0' + date.getMinutes()).slice(-2);
};


/**
 * Return seconds in "ss" format
 *
 * @method:     setSeconds
 * @return:     {String}
 * @api:        private
 */

var setSeconds = function() {
    return ('0' + date.getSeconds()).slice(-2);
};


/**
 * Return current date in "YYYY/MM/DD - hh:mm:ss" format
 *
 * @method:     setCurrentInverse
 * @return:     {String}
 * @api:        private
 */

var setCurrentInverse = function() {
    return setYear() + '/' + setMonth() + '/' + setDay() + ' - ' + setHours() + ':' + setMinutes() + ':' + setSeconds();
};


/**
 * Return current date in "DD/MM/YYYY - hh:mm:ss" format
 *
 * @method:     setCurrent
 * @return:     {String}
 * @api:        private
 */

var setCurrent = function() {
    return setDay() + '/' + setMonth() + '/' + setYear() + ' - ' + setHours() + ':' + setMinutes() + ':' + setSeconds();
};

var setDate = function (newDate) {
  date      = newDate;

  this.inow =  setCurrentInverse();
  this.YYYY =  setYear();
  this.MM   =  setMonth();
  this.DD   =  setDay();
  this.hh   =  setHours();
  this.mm   =  setMinutes();
  this.ss   =  setSeconds();
};

module.exports = {

    now:  setCurrent(),
    inow: setCurrentInverse(),
    YYYY: setYear(),
    MM:   setMonth(),
    DD:   setDay(),
    hh:   setHours(),
    mm:   setMinutes(),
    ss:   setSeconds(),
    set:  setDate,

};
