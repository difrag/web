
// function toggleTheme() {
//     var body = document.body;
//     var themeButton = document.getElementById('theme-button');
//     var inputFields = document.querySelectorAll('#signup-form input');
    
//     // if (body.classList.contains('dark-theme')) {
//     //     themeButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
//     //     document.cookie = "theme=dark; path=/";
//     // } else {
//     //     themeButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
//     //     document.cookie = "theme=light; path=/";
//     // }
//     /* Apply the dark theme on: body, theme button , input field boxes [more to come]*/
//     body.classList.toggle('dark-theme');
//     // themeButton.classList.toggle('dark-theme');
//     inputFields.forEach(function(input){
//         input.classList.toggle('dark-theme');
//     });
// }

// document.getElementById('theme-button').addEventListener('click', toggleTheme);

// window.onload = function(){
//     var theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//     var body = document.body;
//     var themeButton = document.getElementById('theme-button');
//     var inputFields = document.querySelectorAll('#signup-form input');
//     if (theme === 'dark'){
//         body.classList.add('dark-theme');
//         themeButton.classList.add('dark-theme');
//         themeButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; /* Change text according to mode selected */
//         inputFields.forEach(function(input) {
//             input.classList.add('dark-theme');
//         });
//     } else {
//         body.classList.remove('dark-theme');
//         themeButton.classList.remove('dark-theme');
//         themeButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; /* Change text according to mode selected */
//         inputFields.forEach(function(input) {
//             input.classList.remove('dark-theme');
//         });
//     }


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded"); //LOGLOGLOGLOLG
  

  // Profile Sub-menu dropdown functionality
  let subMenu = document.getElementById("subMenu");
  
  window.toggleMenu = function(){
      subMenu.classList.toggle("open-menu");
  };

  // Accordion functionality
  var accordions = document.getElementsByClassName("accordion");

  for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  // Edit profile functionality
//   window.editField = function(fieldId) {
//       const spanElement = document.getElementById(fieldId);
//       const currentValue = spanElement.innerHTML;

//       if (spanElement.tagName === 'SPAN') {
//           const inputElement = document.createElement("input");
//           inputElement.type = "text";
//           inputElement.value = currentValue;
//           inputElement.id = fieldId;

//           const buttonElement = spanElement.nextElementSibling;
//           buttonElement.innerText = "Save";

//           spanElement.replaceWith(inputElement);
//       } else if (spanElement.tagName === 'INPUT') {
//           const newValue = spanElement.value;

//           const spanElementNew = document.createElement("span");
//           spanElementNew.id = fieldId;
//           spanElementNew.innerHTML = newValue;

//           const buttonElement = spanElement.nextElementSibling;
//           buttonElement.innerText = "Edit";

//           spanElement.replaceWith(spanElementNew);
//       }
//   };

// Edit profile functionality (with password hidden)
window.editField = function(fieldId) {
    if (fieldId === 'password') {
        const spanElement = document.getElementById('password-display');
        const inputElement = document.getElementById('password-edit');
        const buttonElement = spanElement.nextElementSibling.nextElementSibling;

        if (spanElement.style.display !== 'none') {
            spanElement.style.display = 'none';
            inputElement.style.display = 'inline';
            inputElement.focus();
            buttonElement.innerText = 'Save';
        } else {
            const newValue = inputElement.value;
            spanElement.style.display = 'inline';
            inputElement.style.display = 'none';
            spanElement.innerHTML = '••••••••';  // Optionally mask again after saving
            buttonElement.innerText = 'Edit';
            // Save the new password value somewhere if necessary
            console.log('New password value:', newValue);
        }
    } else {
        const spanElement = document.getElementById(fieldId);
        const buttonElement = spanElement.nextElementSibling;

        if (spanElement.tagName === 'SPAN') {
            const currentValue = spanElement.innerHTML;
            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.value = currentValue;
            inputElement.id = fieldId;
            spanElement.replaceWith(inputElement);
            buttonElement.innerText = "Save";
        } else if (spanElement.tagName === 'INPUT') {
            const newValue = spanElement.value;
            const spanElementNew = document.createElement("span");
            spanElementNew.id = fieldId;
            spanElementNew.innerHTML = newValue;
            spanElement.replaceWith(spanElementNew);
            buttonElement.innerText = "Edit";
            // Save the new value somewhere if necessary
            console.log('New value:', newValue);
        }
    }
};


try{
  const userData = { // Replace this with data fetched from the server after login!!!!!!!! (sofia)
    username: "johndoe123",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
  };

  // Debugging: Check if elements are accessible
  console.log(document.getElementById("username"));
  console.log(document.getElementById("name"));
  console.log(document.getElementById("email"));
  console.log(document.getElementById("password"));
 
  // Inserting the user data into the HTML
  document.getElementById("username").innerHTML = userData.username;
  document.getElementById("name").innerHTML = userData.name;
  document.getElementById("email").innerHTML = userData.email;
  document.getElementById("password").innerHTML = userData.password;
} catch (error){
  console.error("An error occurred:", error.message);
}

  // Function to set a cookie
  function setCookie(name, value, days) {
      let expires = "";
      if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }

  // Function to erase a cookie
  function eraseCookie(name) {   
      document.cookie = name + '=; Max-Age=-99999999;';  
  }

  const toggleButton = document.getElementById('theme-toggle');

  function updateTheme() {
      const currentTheme = getCookie('theme') || 'light';
      document.body.classList.remove('light-theme', 'dark-theme'); // Remove both classes
      document.body.classList.add(`${currentTheme}-theme`); 
  }

  // Initial theme setup
  updateTheme();
  toggleButton.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
      setCookie('theme', newTheme, 7); 
      updateTheme(); // Update the theme and class after setting the cookie
  });
});


//FETCH TASK INFO FROM DATABASE AND BRING INTO SITE functionality
// document.addEventListener('DOMContentLoaded', function() {
//     fetch('fetch_tasks.php') // Fetch tasks from the server
//         .then(response => response.json()) // Parse the response as JSON
//         .then(data => {
//             const tasksContainer = document.getElementById('tasks');
            
//             // Iterate over each task in the fetched data
//             data.forEach(task => {
//                 // Create a container for each unique task
//                 const uniqueTaskContainer = document.createElement('div');
//                 uniqueTaskContainer.classList.add('task-container');

//                 // Create a div for the task
//                 const taskDiv = document.createElement('div');
//                 taskDiv.classList.add('task');
//                 taskDiv.innerHTML = `
//                     <div class="task-header">${task.title}</div>
//                     <div class="task-description">${task.description}</div>
//                     <div class="task-status">Status: ${task.status}</div>
//                 `;

//                 // Append the task div to the unique task container
//                 uniqueTaskContainer.appendChild(taskDiv);
                
//                 // Append the unique task container to the main tasks container
//                 tasksContainer.appendChild(uniqueTaskContainer);
//             });
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('fetch_tasks.php')// <---- Το όνομα του php αρχειου που κανει το fetch !
//         .then(response => response.json())
//         .then(data => {
//             const tasksContainer = document.getElementById('tasks');
//             data.forEach(task => {
//                 const taskDiv = document.createElement('div');
//                 taskDiv.classList.add('task');
//                 taskDiv.innerHTML = `
//                     <div class="task-header">${task.title}</div>
//                     <div class="task-description">${task.description}</div>
//                     <div class="task-status">Status: ${task.status}</div>
//                 `;
//                 tasksContainer.appendChild(taskDiv);
//             });
//         });
// });


//This code sends a POST request to check_username.php with the username as a parameter when the "Check" button is
//clicked. It then sets the response text as the content of the usernameMessage span and changes the text color to green if the username is valid or red if it's already in use.
//
// document.getElementById('checkUsername').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submission για να μη κλεινει το ακορντεον 
//     var username = document.getElementById('username').value;
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'check.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send('username=' + encodeURIComponent(username));
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var usernameMessage = document.getElementById('usernameMessage');
//             usernameMessage.textContent = xhr.responseText;
//             if (xhr.responseText.trim() === 'Valid') {
//                 usernameMessage.style.color = 'green';
//             } else {
//                 usernameMessage.style.color = 'red';
//             }
//         }
//     };
// });

// function Usernamechecker() {
//     var username = document.getElementById('username').value;
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'check.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send('username=' + encodeURIComponent(username));
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var usernameMessage = document.getElementById('usernameMessage');
//             usernameMessage.textContent = xhr.responseText;
//             if (xhr.responseText.trim() === 'Valid') {
//                 usernameMessage.style.color = 'green';
//             } else {
//                 usernameMessage.style.color = 'red';
//             }
//         }
//     };
// }
// function validateForm() {
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var email = document.getElementById('email').value;

//     if (firstName === '' || lastName === '' || username === '' || password === '' || email === '') {
//         alert('Please fill in all required fields!');
//         return false;
//     }

//     if (password.length < 8) {
//         alert('Password must be at least 8 characters long!');
//         return false;
//     }

//     var emailPattern = /^[^@]+@[^@]+\.[^@]+$/; // Simple pattern for email validation
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address!');
//         return false;
//     }

//     return true;
// }