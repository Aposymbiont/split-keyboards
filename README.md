# Split Keyboards

This is an interactive gallery of split keyboards, visible at [Split Keyboards](https://aposymbiont.github.io/split-keyboards/).

See [about](https://aposymbiont.github.io/split-keyboards/about.html) for more details.

## Contributions

Issues and pull requests to correct mistakes or add missing keyboards are welcome.

General guidelines for inclusion:
* The keyboard should use mechanical switches,
* Keyboards should be in two halves, or have a "wedge" in the middle to allow the wrists to lie in a more natural position,
* The keyboard should be available for purchase, or a kit should be available for purchase,
* Or, the source files for the PCB and case should be available for download, and *more than one person* should have made it.
* When a keyboard is no longer available, it should be marked "unavailable" and therefore hidden by default.

If you think a keyboard that doesn't fit these guidelines should be included, it's a good idea to think *why*.

### Classification

Keyboards are classified with filter tags, shown `like this` below:

### Physical layout
`traditional`
: A traditional ergonomic keyboard; the normal layout with a wedge in the middle, or in two parts.  These are in `traditional.csv`.

`ortho` (ortholinear)
: keys positioned in a grid or near-grid. (`ortho.csv`)

`ergo` (ergonomic)
: keys usually staggered by column rather than row, and almost always including thumb keys. (`ergo.csv`)

`dish` (dished)
: a shaped keyboard with thumbkeys and dishes or wells for the fingers. (`dish.csv`)

### Number of keys
The minimum and maximum number of keys supported by the keyboard.  For example, many traditional layouts support an additional key for ISO layout (next to Z), and the [ErgoDash](https://github.com/omkbd/ErgoDash) can be configured with 66-70 keys.

At present, only the maximum number is used for the filter.

*TODO: Number of rows*

### Features
This is a list of features, which the user can either require, forbid, or not care about.

`split` or two halves
: two independent parts to the keyboard, rather than a `single` board.

Rotary `encoder`
: one or more knobs which can press keys, useful for volume up/down, page-up/page-down, etc.

`trackp` trackpoint/trackpad
: an integrated laptop-style mouse

`display`
: a display on the keyboard, which can show status (Caps Lock, current layer, macros etc)

`wireless`
: no wires!

### Availability
`massproduced`
: Reliably in-stock for immediate delivery
: Probably includes a GUI or other professional tool for configuring keyboard layout, macros etc

`assembled`
: Available for purchase pre-assembled and programmed
: To distinguish this from the following categories, it omits keyboards where individuals are willing to assemble a kit for others — otherwise there's little point to the filter.  A company should be willing to buy an `assembled` keyboard for an employee, but less likely to ask someone on Reddit to solder a `kit` for them.

`kit`
: A kit (circuit boards, cases, components etc) is available to purchase.

`source`
: Open source keyboards, where files defining the PCB and case are available.  May be available occasionally as part of a group buy.

`unavailable`
: The keyboard is no longer available, and was not open source, or the source files are no longer online.

### Website
Typically the place to purchase it (if mass-produced or not open source), or the source/information site otherwise.  I've avoided linking to particular shops selling kits, as some boards have many suppliers.

### Image
In the `img/source` directory are some larger images.  They've been resized to a width of 640px for display on the web, in the `img/` directory.  I used `convert source/XXX.jpg -resize 640x XXX.jpg`.

A functional, well-lit, top-down image with a neutral background is preferred if possible.  An artistic, angled photo with weird keycaps makes it more difficult to compare between boards.

Choose an image like [Arch 36](img/Arch36.jpg), [Atreis](img/Atreis.jpg) and [UHK](img/Ultimatehackingkeyboard.jpg).
