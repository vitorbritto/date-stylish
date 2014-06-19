# Date Stylish [![NPM version](https://badge.fury.io/js/date-stylish.svg)](http://badge.fury.io/js/date-stylish) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fdate-stylish.svg)](http://badge.fury.io/gh/vitorbritto%2Fdate-stylish)

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

# Get the current time
console.log('Current date: %s', nw);            // => Current time: 19/06/2014 - 15:50:25

# Get the current time (with inverse date)
console.log('Current date: %s', in);            // => Current time: 2014/06/19 - 15:50:25

# Get custom date/time
console.log('%s/%s/%s - %s:%s', Y,M,D,h,m);     // => 2014/06/19 - 15:50
console.log('%s/%s/%s - %s:%s', D,M,Y,h,m);     // => 19/06/2014 - 15:50
console.log('%s/%s/%s', Y,M,D);                 // => 2014/06/19
console.log('%s/%s/%s', D,M,Y);                 // => 19/06/2014

# Set published date (great for blog posts)
var pubDate = ds.now;
console.log('Published at: %s' + pubDate);      // => Published at: 19/06/2014 - 15:50:25
```


## Options

### `now`

**Type:** date
**Return:** _String_
**Output:** current date/time in "DD/MM/YYYY - hh:mm:ss" format

### `inow`

**Type:** date
**Return:** _String_
**Output:** current date/time in "YYYY/MM/DD - hh:mm:ss" format

### `YYYY`

**Type:** date
**Return:** _String_
**Output:** full year

### `MM`

**Type:** date
**Return:** _String_
**Output:** month

### `DD`

**Type:** date
**Return:** _String_
**Output:** day

### `hh`

**Type:** date
**Return:** _String_
**Output:** hours

### `mm`

**Type:** date
**Return:** _String_
**Output:** minutes

### `ss`

**Type:** date
**Return:** _String_
**Output:** seconds


## Contribute

Feel free to [contribute](https://github.com/vitorbritto/date-stylish/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/date-stylish/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
