//when an event occurs like a click that element becomes the event target.(e.target)
//when this happens javascript will look to see if we have any event listeners attached to this element.
//if have listener ,it will fire that callback function for that element
//javacript 之后还会去检查，e.target的父节点是否拥有event listener。这里可以看到li 的父节点是ul。如果有就会触发listener里面的callback function

//然后 javascript 又会去检查 ul的父节点是否有 event listener，这样一级一级的往上找。

