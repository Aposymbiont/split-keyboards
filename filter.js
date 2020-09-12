var minKeysRangeInput = document.querySelector('[name="minKeys"]');
var maxKeysRangeInput = document.querySelector('[name="maxKeys"]');

var minKeysNum = document.getElementById('minKeysNum');
var maxKeysNum = document.getElementById('maxKeysNum');

/**
 * Reads the values from our two native range inputs, returning an object
 * with `min` and `max` numeric values.
 *
 * @return {object}
 */
function getRange() {
    var min = Number(minKeysRangeInput.value);
    var max = Number(maxKeysRangeInput.value);

    return {
        min: min,
        max: max
    };
}

/**
 * Ensures that the mixer is re-filtered whenever the value of a range
 * input changes.
 *
 * @return {void}
 */
function handleRangeInputChange() {
    var range = getRange();

    minKeysNum.innerHTML = range.min;
    maxKeysNum.innerHTML = range.max;

    document.querySelectorAll('.mix').forEach(function (e) {
        var keys = Number(e.getAttribute('data-keys'));

        if (keys < range.min || keys > range.max) {
            addClass(e, 'hidden');
        } else {
            removeClass(e, 'hidden');
        }
    });
}

// Listen for change events from the two range inputs
minKeysRangeInput.addEventListener('input', handleRangeInputChange);
maxKeysRangeInput.addEventListener('input', handleRangeInputChange);

var styleEl = document.createElement('style');
document.head.appendChild(styleEl);
var stylesheet = styleEl.sheet;
stylesheet.insertRule("#Container > .hidden { display: none; }", 0);

var layouts = ['traditional', 'ortho', 'ergo', 'dish', 'massproduced', 'assembled', 'kit', 'source', 'unavailable'];
layouts.forEach(function (l) {
    lEl = document.getElementById(l);
    //console.log(lEl);
    if (!lEl.checked) {
        stylesheet.insertRule("#Container > ."+l+" { display: none; }", 0);
    }
    lEl.onclick = (function(e) {
        if (e.target.checked) {
            removeRule(stylesheet, "#Container > ."+l);
        } else {
            stylesheet.insertRule("#Container > ."+l+" { display: none; }", 0);
        }
    });
});

var fcc = new Map();
var features = ['split', 'encoder', 'trackp', 'display', 'wireless'];
features.forEach(function (l) {
    lEl = document.getElementById(l);
    //console.log(lEl);
    lEl.indeterminate = true;
    lEl.checked = false;
    fcc[l] = 1;
    //console.log(fcc[l], lEl.checked, lEl.indeterminate);
    lEl.onclick = (function(e) {
        //console.log(fcc[l], e.target.checked, e.target.indeterminate);
        if (e.target.checked && fcc[l] % 3 == 0) {
            e.target.indeterminate = true;
            e.target.checked = false;
        }

        fcc[l]++;
        if (e.target.indeterminate) {
            removeRule(stylesheet, "#Container > ."+l);
            removeRule(stylesheet, "#Container > :not(."+l+")");
        } else if (e.target.checked) {
            removeRule(stylesheet, "#Container > ."+l);
            stylesheet.insertRule("#Container > :not(."+l+") { display: none; }", 0);
        } else {
            stylesheet.insertRule("#Container > ."+l+" { display: none; }", 0);
            removeRule(stylesheet, "#Container > :not(."+l+")");
        }
    });
});

function removeRule(stylesheet, rule) {
    for (let i=0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText == rule) {
            stylesheet.deleteRule(i);
            break;
        }
    }
}

function printRules(stylesheet) {
    console.log("CSS Rules")
    for (let i=0; i < stylesheet.cssRules.length; i++) {
        console.log(stylesheet.cssRules[i].cssText);
    }
}

function addClass(el, className) {
    el.className += ' ' + className;
}

function removeClass(el, className) {
    var elClass = ' ' + el.className + ' ';
    while (elClass.indexOf(' ' + className + ' ') !== -1) {
        elClass = elClass.replace(' ' + className + ' ', '');
    }
    el.className = elClass;
}
