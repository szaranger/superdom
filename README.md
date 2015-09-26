## Installation

sudo npm install grunt -g grunt-cli

npm install

---

## Run

npm run

## Browse

http://localhost:9001

## Run Tests

npm test

---

## API Documentation

###Manipulation

####Copying

#####.clone()

Create a deep copy of the set of matched elements.

The `.clone()` method performs a deep copy of the set of matched elements, meaning that it copies the matched elements as well as all of their descendant elements and text nodes.

###Effects

####Sliding

#####.slideDown()

Display the matched elements with a sliding motion.

#####.slideToggle()

Display or hide the matched elements with a sliding motion.

#####.slideUp()

Hide the matched elements with a sliding motion.

####Events

#####.click()

Bind an event handler to the `click` JavaScript event, or trigger that event on an element.

#####.dblclick()

Bind an event handler to the `dblclick` JavaScript event, or trigger that event on an element.

#####.hover()

Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.

#####.mousedown()

Bind an event handler to the “mousedown” JavaScript event, or trigger that event on an element.

#####.mouseenter()

Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.

#####.mouseleave()

Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.

#####.mousemove()
Bind an event handler to the “mousemove” JavaScript event, or trigger that event on an element.

#####.on()
Bind an event handler function for one or more events to the selected elements.

####Removal

#####.unwrap()

Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.

####Replacement

Replace each target element with the set of matched elements.

####Platform

###Traversing

####Tree Traversal

#####.next()

Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
