# 2.1 What kind of front end projects do you enjoy working on? Why?

I enjoy working on front end projects that include something I haven't worked with before with a team of really nice and smart people. I enjoy collaborating with people with diverse knowledge where everyone can contribute. I'm not stuck in any specific technology as long as it's relatively modern. Projects with an interesting problem where the solution is not straight forward which allows me to research and learn and use my creativity to find - ideally - simple solutions. I would say the most satisfying projects I've been part of was because of the people I worked with.

# 2.2 Which are your favorite features of HTML5? How have you used them before?

Web Workers and Web Sockets.

I enjoy working features that work with real-time data. The most interesting project where I used Web Sockets was a real-time vehicle tracker where I implemented a connection with Socket.io to the server and handled UI updates on GoogleMaps with markers based on the location data returned.

A project where I used Web Workers was when we had to make certain features of the mobile app (transport ticket wallet) be usable when offline. Here I implemented logic that stores the travel ticket payload and used Web Workers to intercept the network requests when offline to provide navigable UI and usable travel tickets when the rider was underground with no access to the internet.

# 2.3 Explain the difference between creating a DOM element setting innerHTML and using createElement.

Creating a DOM with "innerHTML" is setting a string which is then parsed and inserted as the HTML code of the element. It might seem very simple and convenient but it's usually not advisable because the sting parsing can be dangerous. If the string is not sanitized it can contain malicious code that can be executed.

The "createElement" method creates a new instance of a DOM element that we can then manipulate (e.g., set attributes, append children) and insert into the document. Using document.createElement is preferred when programmatically creating and manipulating elements because it's more secure as it doesn't require parsing HTML strings and allows more controlled attribute assignment, event listener attachment, and appending child elements.

# 2.4 Compare two-way data binding vs one-way data flow.

Two-way data binding and one-way data flow are two different approaches to managing data and synchronising with the UI.

In two-way data binding, UI fields are connected with the model data. Any changes to the UI input updates the model data and vice versa. This directly links the model data and the view UI. It's most useful for small and simple situations which reduces boilerplate logic but can become harder to manage and debug when the logic becomes more complex because of two different sources of data changes (model and UI).

In one-way data flow, the data has a single direction of flow, from the parent component to child components (downwards) via props and usually from child to parent via callback functions. This approach makes it easier to manage and debug the data flow and state changes since they go in a single direction.
The downside it that it might require more boilerplate code to handle data updates and pass data down the component tree.

# 2.5 Why is asynchronous programming important in JavaScript?

Since JavaScript is single-threaded (it can do only one thing at a time) we don't want I/O operations like network requests blocking and freezing the UI. So when we start a network request, the operation is started asynchronously via the browser API and JavaScript continues to execute the next parts of the code. This is where terms like execution stack, event-loop and queue come into play. When the network request is returned, a callback is put into a queue where the event loop regularly checks if the execution stack is empty (JavaScript doesn't have anything to do) then it sends the async operations for execution. JavaScript offers many features to asynchrounously run operations like callbacks, promises, Fetch API, setTimeout, Web Workers, etc
