var minKeysRangeInput = document.querySelector('[name="minKeys"]');
var maxKeysRangeInput = document.querySelector('[name="maxKeys"]');

var minKeysNum = document.getElementById('minKeysNum');
var maxKeysNum = document.getElementById('maxKeysNum');

/**
 * Reads the values from our two native range inputs, returning an object
 * with `min` and `max` numeric values.
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
 * Ensures that the mixer is re-filtered whenever the value of the inputs changes.
 */
function handleFilterChange() {
    var traditional = document.getElementById('traditional').checked;
    var ortho = document.getElementById('ortho').checked;
    var ergo = document.getElementById('ergo').checked;
    var dish = document.getElementById('dish').checked;

    var range = getRange();
    minKeysNum.innerHTML = range.min;
    maxKeysNum.innerHTML = range.max;

    var massproduced = document.getElementById('massproduced').checked;
    var assembled = document.getElementById('assembled').checked;
    var kit = document.getElementById('kit').checked;
    var source = document.getElementById('source').checked;
    var unavailable = document.getElementById('unavailable').checked;

    document.querySelectorAll('.mix').forEach(function (e) {
        var layout = e.getAttribute('data-layout').split(' ');
        var keys = Number(e.getAttribute('data-keys'));
        var availability = e.getAttribute('data-availability').split(' ');

        if ((traditional && layout.includes('traditional') ||
             ortho && layout.includes('ortho') ||
             ergo && layout.includes('ergo') ||
             dish && layout.includes('dish')) &&
            (keys >= range.min && keys <= range.max) &&
            (massproduced && availability.includes('massproduced') ||
             assembled && availability.includes('assembled') ||
             kit && availability.includes('kit') ||
             source && availability.includes('source') ||
             unavailable && availability.includes('unavailable')
            )) {
            removeClass(e, 'hidden');
        } else {
            addClass(e, 'hidden');
        }
    });
}

// Listen for change events from the two range inputs
minKeysRangeInput.addEventListener('input', handleFilterChange);
maxKeysRangeInput.addEventListener('input', handleFilterChange);

var styleEl = document.createElement('style');
document.head.appendChild(styleEl);
var stylesheet = styleEl.sheet;
stylesheet.insertRule("#Container > .hidden { display: none; }", 0);

var filters = ['traditional', 'ortho', 'ergo', 'dish', 'massproduced', 'assembled', 'kit', 'source', 'unavailable'];
filters.forEach(function (l) {
    lEl = document.getElementById(l);
    lEl.addEventListener('click', handleFilterChange);
});

var fcc = new Map();
var features = ['split', 'encoder', 'track', 'display', 'wireless'];
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
    var elClass = ' ' + el.className + ' ';
    if (elClass.indexOf(' ' + className + ' ') == -1) {
        elClass = elClass += ' ' + className;
    }
    el.className = elClass;
}

function removeClass(el, className) {
    var elClass = ' ' + el.className + ' ';
    while (elClass.indexOf(' ' + className + ' ') !== -1) {
        elClass = elClass.replace(' ' + className + ' ', '');
    }
    el.className = elClass;
}

handleFilterChange();
