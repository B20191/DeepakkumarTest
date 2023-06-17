# DeepakkumarTest
1) Front-end: 
The area of a website that users directly interact with is referred to as the front-end. Everything a person views and does in a web browser is included in it. This covers the website's appearance, structure, and features.
Consider the front-end as the website's user interface. It is in charge of showing the material and giving the user an interactive experience. HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript are used to do this.
For instance, the buttons, forms, images, and text that you view when you visit a website are all a component of the front-end. The front-end code also takes care of any animations or pop-up messages you could see when you click a button.
Back-end:
The back-end of a website is the portion that operates in the background and is not visible to the user. Data processing, server-side logic, and connectivity with databases or other services are all handled by it.
The back-end is in charge of carrying out activities depending on user input, handling user authentication, storing and retrieving data, and doing computations. It also manages the website's business logic and regulations.
Let's use the scenario of using an online store as an example. When you do a product search, the front-end requests your search query from the back-end, which then delivers the necessary information to a database and displays it. The back-end manages the data processing and changes when you add an item to your basket or continue to checkout.
Backend is generally made using Nodejs and its various frameworks.

In essence, the back-end handles the server-side logic, data processing, and connectivity with databases or outside services, whereas the front-end concentrates on the user interface and the visual elements of a website. In order to give users a comprehensive and engaging online experience, the front end and back end collaborate.



2) The building blocks of HTML are tags, which are used to organise and specify the content of a web page. An opening tag and a closing tag are included in pairs, separated by angle brackets ( >). A web page's many features, including headers, paragraphs, links, photos, and more, are marked up using tags. Each group of tags has a distinct function and aids in defining the content's structure and layout.

The root element of an HTML page is represented by the tag html>.
The document's title and any scripts or stylesheets that are linked are included in the section called the "head" of the document.
The viewable content of the web page is included in the body> tag.
The headings h1, h2, h3, h4, h5, and h6 represent the various levels of headings, with h1 being the highest and most essential.
It stands for a paragraph of text.
Creates a link to another website or resource using the character "a".
embeds a picture into the webpage with img>.
Unordered (bullet) list is represented by the ul> tag.
OOL: An ordered (numbered) list representation.
A list item is represented by a li tag within an ul or ol.


3) Web development frameworks like React employ the Virtual DOM (VDOM) method to streamline the process of updating the user interface. It operates by first executing modifications on a virtual version of the real DOM (Document Object Model) before implementing the changes on the actual DOM.
A virtual version of a React component's user interface, known as the Virtual DOM tree, is created whenever it is rendered or changed. This tree represents the component's current state and is a compressed version of the original DOM tree. A new Virtual DOM tree is built and a re-render is triggered when a component's state or properties change.
Following that, "diffing" or "reconciliation" is used to compare the virtual DOM tree to the previous virtual DOM tree. By comparing the two trees, we can see where the differences lie and what has changed. The framework determines the bare minimum set of modifications required to update the actual DOM based on these differences.

Only the relevant portions of the UI are updated by applying the estimated modifications to the real DOM, minimising the amount of direct DOM operations. By reducing the amount of costly DOM changes and optimising rendering, this strategy boosts performance.

In conclusion, the Virtual DOM approach increases the effectiveness of UI updates by making a lightweight replica of the DOM, comparing it to the prior copy, and making the appropriate adjustments to the real DOM. It is a crucial component of frameworks like React that help create web apps that are quicker and more responsive.


4) While NoSQL refers to non-relational databases, MySQL is a relational database management system.While NoSQL databases allow freedom in data models, MySQL adopts a structured approach with established schemas.While NoSQL databases have their own query languages or APIs, MySQL utilises SQL for querying.In contrast to NoSQL databases, which prioritise scalability and fast data retrieval, MySQL offers robust data integrity and support for complex relationships.While NoSQL databases are superior at managing unstructured or semi-structured data at scale, MySQL is suited for applications with structured data and complicated connections.


5) The NoSQL database management system MongoDB offers a scalable and adaptable method for storing data. Data is stored in JSON-like documents with changeable schemas using a document-oriented approach. Because MongoDB is built to manage massive amounts of unstructured or semi-structured data, it is a good fit for applications with demanding scalability requirements and quickly changing data requirements. Automatic sharding for horizontal scaling, flexible querying using its own query language, and support for distributed database clusters are some of the capabilities it offers. Modern online and mobile apps that need agility and scalability in data storage frequently use MongoDB due to its schema-less nature and scalability.
   
