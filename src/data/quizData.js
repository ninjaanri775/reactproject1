const quizData = {
  HTML: [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", isCorrect: true },
        { text: "Home Tool Markup Language", isCorrect: false },
        { text: "Hyperlinks and Text Markup Language", isCorrect: false },
        { text: "Hyper Transfer Markup Language", isCorrect: false }
      ]
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      answers: [
        { text: "<ol>", isCorrect: false },
        { text: "<ul>", isCorrect: true },
        { text: "<li>", isCorrect: false },
        { text: "<list>", isCorrect: false }
      ]
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: [
        { text: "<break>", isCorrect: false },
        { text: "<br>", isCorrect: true },
        { text: "<lb>", isCorrect: false },
        { text: "<line>", isCorrect: false }
      ]
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      answers: [
        { text: "title", isCorrect: false },
        { text: "alt", isCorrect: true },
        { text: "src", isCorrect: false },
        { text: "href", isCorrect: false }
      ]
    },
    {
      question: "Which HTML tag is used to define the largest heading?",
      answers: [
        { text: "<h6>", isCorrect: false },
        { text: "<h1>", isCorrect: true },
        { text: "<header>", isCorrect: false },
        { text: "<head>", isCorrect: false }
      ]
    },
    {
      question: "What is the correct HTML element for playing video files?",
      answers: [
        { text: "<video>", isCorrect: true },
        { text: "<movie>", isCorrect: false },
        { text: "<media>", isCorrect: false },
        { text: "<play>", isCorrect: false }
      ]
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answers: [
        { text: "<a>", isCorrect: true },
        { text: "<link>", isCorrect: false },
        { text: "<href>", isCorrect: false },
        { text: "<url>", isCorrect: false }
      ]
    },
    {
      question: "Which HTML attribute is used to specify a unique ID for an element?",
      answers: [
        { text: "class", isCorrect: false },
        { text: "id", isCorrect: true },
        { text: "name", isCorrect: false },
        { text: "style", isCorrect: false }
      ]
    },
    {
      question: "Which doctype declaration is correct for HTML5?",
      answers: [
        { text: "<!DOCTYPE html>", isCorrect: true },
        { text: "<!DOCTYPE HTML5>", isCorrect: false },
        { text: "<!DOCTYPE html public>", isCorrect: false },
        { text: "<!DOCTYPE document>", isCorrect: false }
      ]
    },
    {
      question: "Which HTML tag is used to define a table?",
      answers: [
        { text: "<table>", isCorrect: true },
        { text: "<tab>", isCorrect: false },
        { text: "<tbl>", isCorrect: false },
        { text: "<td>", isCorrect: false }
      ]
    }
  ],
  CSS: [
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Computer Style Sheets", isCorrect: false },
        { text: "Creative Style Sheets", isCorrect: false },
        { text: "Colorful Style Sheets", isCorrect: false }
      ]
    },
    {
      question: "Which property is used to change text color in CSS?",
      answers: [
        { text: "color", isCorrect: true },
        { text: "font-color", isCorrect: false },
        { text: "text-color", isCorrect: false },
        { text: "background-color", isCorrect: false }
      ]
    },
    {
      question: "Which CSS property controls the text size?",
      answers: [
        { text: "font-size", isCorrect: true },
        { text: "text-size", isCorrect: false },
        { text: "size", isCorrect: false },
        { text: "font-style", isCorrect: false }
      ]
    },
    {
      question: "Which property is used to set the background color of an element?",
      answers: [
        { text: "background-color", isCorrect: true },
        { text: "bg-color", isCorrect: false },
        { text: "color-background", isCorrect: false },
        { text: "background", isCorrect: false }
      ]
    },
    {
      question: "What is the default value of the position property in CSS?",
      answers: [
        { text: "absolute", isCorrect: false },
        { text: "relative", isCorrect: false },
        { text: "static", isCorrect: true },
        { text: "fixed", isCorrect: false }
      ]
    },
    {
      question: "Which property is used to control the spacing between lines of text?",
      answers: [
        { text: "line-height", isCorrect: true },
        { text: "letter-spacing", isCorrect: false },
        { text: "word-spacing", isCorrect: false },
        { text: "text-spacing", isCorrect: false }
      ]
    },
    {
      question: "Which CSS selector is used to target elements with a specific class?",
      answers: [
        { text: ".", isCorrect: true },
        { text: "#", isCorrect: false },
        { text: ">", isCorrect: false },
        { text: ":", isCorrect: false }
      ]
    },
    {
      question: "Which CSS property controls the visibility of an element?",
      answers: [
        { text: "visibility", isCorrect: true },
        { text: "display", isCorrect: false },
        { text: "opacity", isCorrect: false },
        { text: "hidden", isCorrect: false }
      ]
    },
    {
      question: "What is the correct syntax to add a comment in CSS?",
      answers: [
        { text: "/* comment */", isCorrect: true },
        { text: "// comment", isCorrect: false },
        { text: "<!-- comment -->", isCorrect: false },
        { text: "# comment", isCorrect: false }
      ]
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      answers: [
        { text: "font-family", isCorrect: true },
        { text: "text-font", isCorrect: false },
        { text: "font-style", isCorrect: false },
        { text: "font-type", isCorrect: false }
      ]
    }
  ],
  JavaScript: [
    {
      question: "Which company developed JavaScript?",
      answers: [
        { text: "Netscape", isCorrect: true },
        { text: "Microsoft", isCorrect: false },
        { text: "Google", isCorrect: false },
        { text: "Apple", isCorrect: false }
      ]
    },
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      answers: [
        { text: "var", isCorrect: true },
        { text: "int", isCorrect: false },
        { text: "string", isCorrect: false },
        { text: "const", isCorrect: true }
      ]
    },
    {
      question: "What function is used to output data to the console in JavaScript?",
      answers: [
        { text: "console.log()", isCorrect: true },
        { text: "log.console()", isCorrect: false },
        { text: "output.log()", isCorrect: false },
        { text: "console.print()", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is a JavaScript data type?",
      answers: [
        { text: "string", isCorrect: true },
        { text: "stringing", isCorrect: false },
        { text: "word", isCorrect: false },
        { text: "text", isCorrect: false }
      ]
    },
    {
      question: "Which method is used to add a new element at the end of an array?",
      answers: [
        { text: "push()", isCorrect: true },
        { text: "pop()", isCorrect: false },
        { text: "unshift()", isCorrect: false },
        { text: "shift()", isCorrect: false }
      ]
    },
    {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      answers: [
        { text: "=", isCorrect: true },
        { text: "==", isCorrect: false },
        { text: "===", isCorrect: false },
        { text: ":=", isCorrect: false }
      ]
    },
    {
      question: "How do you create a function in JavaScript?",
      answers: [
        { text: "function myFunction()", isCorrect: true },
        { text: "function: myFunction()", isCorrect: false },
        { text: "myFunction()", isCorrect: false },
        { text: "function = myFunction()", isCorrect: false }
      ]
    },
    {
      question: "Which JavaScript statement is used to stop a loop?",
      answers: [
        { text: "break", isCorrect: true },
        { text: "stop", isCorrect: false },
        { text: "exit", isCorrect: false },
        { text: "halt", isCorrect: false }
      ]
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      answers: [
        { text: "//", isCorrect: true },
        { text: "/*", isCorrect: false },
        { text: "#", isCorrect: false },
        { text: "<!--", isCorrect: false }
      ]
    },
    {
      question: "Which event is triggered when the user clicks on an HTML element?",
      answers: [
        { text: "onclick", isCorrect: true },
        { text: "onclick-event", isCorrect: false },
        { text: "onhover", isCorrect: false },
        { text: "onfocus", isCorrect: false }
      ]
    }
  ],
  Accessibility: [
    {
      question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
      answers: [
        { text: "4.5 : 1", isCorrect: true },
        { text: "3 : 1", isCorrect: false },
        { text: "2.5 : 1", isCorrect: false },
        { text: "5 : 1", isCorrect: false }
      ]
    },
    {
      question: "Which HTML attribute improves accessibility for screen readers?",
      answers: [
        { text: "aria-label", isCorrect: true },
        { text: "tooltip", isCorrect: false },
        { text: "description", isCorrect: false },
        { text: "title", isCorrect: false }
      ]
    },
    {
      question: "What is the purpose of the alt attribute in an image tag?",
      answers: [
        { text: "To provide alternate text for accessibility", isCorrect: true },
        { text: "To set the background color", isCorrect: false },
        { text: "To add a caption", isCorrect: false },
        { text: "To make the image responsive", isCorrect: false }
      ]
    },
    {
      question: "Which tag should be used for headings in HTML to enhance accessibility?",
      answers: [
        { text: "<h1>", isCorrect: true },
        { text: "<header>", isCorrect: false },
        { text: "<section>", isCorrect: false },
        { text: "<div>", isCorrect: false }
      ]
    },
    {
      question: "What is the role of the aria-hidden attribute?",
      answers: [
        { text: "It hides an element from screen readers", isCorrect: true },
        { text: "It hides an element visually", isCorrect: false },
        { text: "It makes an element interactive", isCorrect: false },
        { text: "It removes an element from the DOM", isCorrect: false }
      ]
    },
    {
      question: "Which is the correct ARIA role for a navigation element?",
      answers: [
        { text: "navigation", isCorrect: true },
        { text: "menu", isCorrect: false },
        { text: "header", isCorrect: false },
        { text: "link", isCorrect: false }
      ]
    },
    {
      question: "What does WCAG stand for?",
      answers: [
        { text: "Web Content Accessibility Guidelines", isCorrect: true },
        { text: "World Content Accessibility Guidelines", isCorrect: false },
        { text: "Web Code Accessibility Guidelines", isCorrect: false },
        { text: "Web Compatibility Accessibility Guidelines", isCorrect: false }
      ]
    },
    {
      question: "Which feature enhances keyboard accessibility on a website?",
      answers: [
        { text: "Using tabindex", isCorrect: true },
        { text: "Using hover effects", isCorrect: false },
        { text: "Using images", isCorrect: false },
        { text: "Using background colors", isCorrect: false }
      ]
    },
    {
      question: "What is the importance of semantic HTML for accessibility?",
      answers: [
        { text: "It helps screen readers interpret content", isCorrect: true },
        { text: "It improves SEO", isCorrect: false },
        { text: "It adds animations", isCorrect: false },
        { text: "It makes the website faster", isCorrect: false }
      ]
    },
    {
      question: "Which attribute is used to associate a form label with its input element for better accessibility?",
      answers: [
        { text: "for", isCorrect: true },
        { text: "label", isCorrect: false },
        { text: "id", isCorrect: false },
        { text: "associated", isCorrect: false }
      ]
    }
  ]
};

export default quizData;
