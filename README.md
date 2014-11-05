# Date Stylish [![NPM version](https://badge.fury.io/js/date-stylish.svg)](http://badge.fury.io/js/date-stylish) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fdate-stylish.svg)](http://badge.fury.io/gh/vitorbritto%2Fdate-stylish)

[![NPM](https://nodei.co/npm/date-stylish.png?downloads=true)](https://nodei.co/npm/date-stylish/)

Date and time with style.


## Install

```bash
$ npm install --save-dev
```


## Usage

```javascript
var ds = require('date-stylish');
```


## Example

```javascript
var ds = require('date-stylish'),
    nw = ds.now,
    in = ds.inow,
    Y  = ds.YYYY,
    M  = ds.MM,
    D  = ds.DD,
    h  = ds.hh,
    m  = ds.mm;

// Get the current time
console.log('Current date: %s', nw);            // => Current time: 19/06/2014 - 15:50:25

// Get the current time (with inverse date)
console.log('Current date: %s', in);            // => Current time: 2014/06/19 - 15:50:25

// Get custom date/time
console.log('%s/%s/%s - %s:%s', Y,M,D,h,m);     // => 2014/06/19 - 15:50
console.log('%s/%s/%s - %s:%s', D,M,Y,h,m);     // => 19/06/2014 - 15:50
console.log('%s/%s/%s', Y,M,D);                 // => 2014/06/19
console.log('%s/%s/%s', D,M,Y);                 // => 19/06/2014

// Set published date (great for blog posts)
var pubDate = ds.now;
console.log('Published at: %s' + pubDate);      // => Published at: 19/06/2014 - 15:50:25

// Pretty up dates other than the current one:
var oldDate = new Date(0);
ds.set( oldDate );
console.log('Remember back when we started the clock?  I believe it was ' + ds.YYYY);
```


## Options

| Options | Type | Return   | Output                |
|---------|------|----------|-----------------------|
| `now`   | date | _String_ | DD/MM/YYYY - hh:mm:ss |
| `inow`  | date | _String_ | YYYY/MM/DD - hh:mm:ss |
| `YYYY`  | date | _String_ | full year             |
| `MM`    | date | _String_ | month                 |
| `DD`    | date | _String_ | date                  |
| `hh`    | date | _String_ | hours                 |
| `mm`    | date | _String_ | minutes               |
| `ss`    | date | _String_ | seconds               |
| `set`   | func | _null  _ | sets internal time    |


## Contribute

Feel free to [contribute](https://github.com/vitorbritto/date-stylish/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/date-stylish/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
