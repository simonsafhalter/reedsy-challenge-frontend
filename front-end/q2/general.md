# What kind of front end projects do you enjoy working on? Why?

My ideal front end project is working on something I haven't worked with before with a team of really nice and smart people. I'm not stuck in any specific technologies as long as it's fairly modern. I enjoy working on projects with an interesting problem where the solution is not straight forward which allows me to research and learn and use my creativity to find - ideally - simple solutions. I would say the most satisfying projects I've been part of was because of the people I worked with.

# Which are your favorite features of HTML5? How have you used them before?

Web Workers and Web Sockets.

I enjoy working features that work with real-time data. The most interesting project where I used Web Sockets was a real-time wehicle tracker where I implemented a connection with Socket.io to the server and handled UI updates on GoogleMaps with markers based on the location data returned.

A project where I used Web Workers was when we had to make certain features of the mobile app (transport ticket wallet) be usable when offline. Here I implemented logic that stores the travel ticket payload and used Web Workers to intercept the network requests when offline to provide navigable UI and usable travel tickets when the rider was underground with no access to the internet.

# Explain the difference between creating a DOM element setting innerHTML and using createElement.

Creating a DOM with "innerHTML" is setting a string which is then parsed and inserted as the HTML code of the element. It might seem very simple and convenient but it's usually not advisable because of security implications. The string content if not sanitized can contain malicious code that is executed.

The "createElement method creates a new instance of a DOM element that we can then manipulate (e.g., set attributes, append children) and insert into the document. Using document.createElement is preferred when programmatically creating and manipulating elements because it's more secure as it doesn't require parsing HTML strings and allows more controlled attribute assignment, event listener attachment, and appending child elements.

# Compare two-way data binding vs one-way data flow.

Two-way data binding and one-way data flow are two different approaches to managing data and synchronising with the UI.

In two-way data binding, UI fields are connected with the model data. Any changes to the UI input automatically updates the model data and vice versa. This creates a direct link between the model data and the view UI.

Advantages:

- It simplifies the development by reducing the need for additional code to synchronize the model and view.
- Enables faster prototyping and development by automatically handling UI updates without explicit intervention.

Disadvantages:

- Can lead to performance issues in large applications due to the overhead of watching changes on both sides (model and view).
- Makes it harder to track data changes and debug applications, as changes can come from both the model and the view, leading to potential unexpected behaviors.

One-way Data Flow:
In one-way data flow, data has a single direction of flow, from the parent component to child components (downwards) via props. Changes are communicated back up through callbacks or events.

Advantages:

- Easier to track and understand data flow and state changes since they go in a single direction.
- Can offer better performance, as updates are more controlled and less automatic than in two-way data binding.

Disadvantages:

- Might require more boilerplate code to handle data updates and pass data down the component tree.

# Why is asynchronous programming important in JavaScript?

Since JavaScript is single-threaded we don't want I/O operations like network requests blocking and freezing the UI. So when we start a network request, the operation is started asynchronously and JavaScript continues to execute the next parts of the code. This is where terms like execution stack, event-loop and queue comes into play. When the network request is returned, a callback is put into a queue where the event loop regularly checks if the execution stack is empty (JavaScript doesn't have anything to do) then it sends the async operations for execution. JavaScirpt offers many features to asynchrounously run operations like Promises, fetch, setTimeout, etc
