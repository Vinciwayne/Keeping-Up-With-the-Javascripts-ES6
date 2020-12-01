



let signUpForm, logInForm, loginPage, dashboard, users = [], userLists = {}, formValid, loggedUser;

let container_html = `<div id="container" class="container"></div>
                      <script type="text/javascript" src="script.js"></script>
                      <title>To-do exercise list</title>
                      <meta charset="UTF-8">
    <link rel="stylesheet" href="to-do-list.css">`;
    // for my extra credit
let initial_html = `<div id="initial" style="display: none">
                        <div id="errorMsg"></div>
                        <div id="welcome">
                            <h1>To-do list</h1>
                            <p>Make your choice.</p>
                            <input type="button" value="Sign Up" onclick="showSignUp()">
                            <input type="button" value="Log In" onclick="showLogIn()">
            
                            <form id="signUpForm" name="signUpForm" onsubmit="return validateSignInForm(this)" style="display: none">
                                <label>First name:</label><input type="text" name="firstName">
                                <label>Last name:</label><input type="text" name="lastName">
                                <label>Email:</label><input type="text" name="email" >
                                <label>Password:</label><input type="password" name="password">
                                <input type="checkbox" value="I agree to the Terms of Use" name="termsOfUse"><div>I agree to the Terms of Use</div><br>
                                <input type="submit" value="Submit">
                            </form>
            
                            <form id="logInForm" name="logInForm" onsubmit="return validateLogInForm(this);" style="display: none">
                                <label>Email:</label><input type="text" name="email">
                                <label>Password:</label><input type="password" name="password">
                                <input type="submit" value="Submit">
                            </form>
                        </div>
                    </div>`;

let dashboard_html = `<div id="dashboard" style="display: none"></div>`;

let dashboardHeader_html = `<div id="dashboardHeader">
                                <div id="title">
                                    <h1>Dashboard</h1>
                                </div>
                                <div id="loggedUser">
                                    <div id="welcomeMsg">Welcome <span id="userName"></span>!</div>
                                    <button onclick="logOut()">Log out</button>
                                </div>
                            </div>`;

let toDoForm_html = `<form id="toDoForm" onsubmit="return createNewList(this)">
                        <input type="text" name="listName">
                        <input type="submit" value="New Todo List">
                    </form>`;

let toDoLists_html = `<div id="toDoLists"></div>`;



function init() {

    // create html structure;
    document.body.innerHTML = container_html;

    let container = document.getElementById('container');
    container.innerHTML = `${initial_html} ${dashboard_html}`;

    dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `${dashboardHeader_html} ${toDoForm_html} ${toDoLists_html}`;


    // initialize global values
    signUpForm = document.getElementById("signUpForm");
    logInForm = document.getElementById("logInForm");
    loginPage = document.getElementById("initial");
    dashboard = document.getElementById("dashboard");
    formValid = false;
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));    // get logged user

    // reset error messages from form validations
    document.getElementById("errorMsg").innerHTML = '';     // reset error messages


    // checking if user is logged in
    if (loggedUser) {
        let checkUserLists = JSON.parse(localStorage.getItem('userLists'));
        if (checkUserLists) userLists = checkUserLists;

        loginPage.style.display = 'none';   // hide login page
        showDashboard();
    } else {
        loginPage.style.display = 'block';  // show login page
        dashboard.style.display = 'none';   // hide dashboard
    }
}



//<editor-fold desc="Show login forms">

function showSignUp() {
    signUpForm.style.display = 'block';
    logInForm.style.display = 'none';
    document.getElementById("errorMsg").innerHTML = '';     // reset error messages
}

function showLogIn() {
    logInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    document.getElementById("errorMsg").innerHTML = '';     // reset error messages
}

//</editor-fold>


//<editor-fold desc="Validations">

function validateSignInForm(form) {
    formValid = true;
    document.getElementById("errorMsg").innerHTML = '';

    if(!form.firstName || form.firstName.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user first name.<br>';
        formValid = false;
    }

    if(!form.lastName || form.lastName.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user last name.<br>';
        formValid = false;
    }

    if(!form.email || form.email.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user email name.<br>';
        formValid = false;
    } else if(!validateEmail(form.email.value)) {
        document.getElementById("errorMsg").innerHTML += '* Email is in invalid format.<br>';
        formValid = false;
    }

    if(!form.password || form.password.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user password.<br>';
        formValid = false;
    }

    if(!form.termsOfUse.checked) {
        document.getElementById("errorMsg").innerHTML += '* Terms of use not accepted.<br>';
        formValid = false;
    }

    return formValid ? signUp(form) : false;
}

function validateLogInForm(form) {
    formValid = true;
    document.getElementById("errorMsg").innerHTML = '';

    if(!form.email || form.email.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user email name.<br>';
        formValid = false;
    } else if(!validateEmail(form.email.value)) {
        document.getElementById("errorMsg").innerHTML += '* Email is in invalid format.<br>';
        formValid = false;
    }

    if(!form.password || form.password.value === '') {
        document.getElementById("errorMsg").innerHTML += '* Missing user password.<br>';
        formValid = false;
    }

    return formValid ? logIn(form) : false;
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNewUser(user) {
    let storedUsers = localStorage.getItem('users');

    if (storedUsers) {
        let signedUsers = JSON.parse(storedUsers);
        let found = signedUsers.find(signed => signed.email === user.email);
        if (found) return false;
    }

    return true;
}

//</editor-fold>


//<editor-fold desc="Sign user to application">

function signUp(form) {
    let user = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
    };

    let validateUser = this.validateNewUser(user);
    if (!validateUser) {
        document.getElementById("errorMsg").innerHTML = 'User already exist!';
        formValid = false;
    }

    console.log('signUp');
    console.log('Is form valid? ', formValid);
    if (formValid) {
        console.log('Form valid.');
        document.getElementById('initial').style.display = 'none';  // hide login form
        document.getElementById('dashboard').style.display = 'block';  // show dashboard
        saveNewUser(user);
        console.log('user is saved....');
        console.log(localStorage.getItem('loggedUser'));

        return true;
    } else {
        console.log('Form not valid.');
        return false;
    }
}

function saveNewUser(user) {
    let storedUsers = localStorage.getItem('users');

    if (storedUsers) users.push(...JSON.parse(storedUsers));
    users.push(user);

    localStorage.setItem('loggedUser', JSON.stringify(user));
    localStorage.setItem('users', JSON.stringify(users));
}

function logIn(form) {
    let email = form.email.value;
    let password = form.password.value;

    let storedUsers = localStorage.getItem('users');
    if (!storedUsers || storedUsers === '') {
        formValid = false;
        document.getElementById("errorMsg").innerHTML = 'Unknown user!';
    }

    let signedUsers = JSON.parse(storedUsers);
    let found = signedUsers.find(signed => signed.email === email && signed.password === password);
    if (!found) {
        formValid = false;
        document.getElementById("errorMsg").innerHTML = 'Unknown user!';
    }


    if(formValid) {
        localStorage.setItem('loggedUser', JSON.stringify(found));

        return true;
    } else {
        return false;
    }
}

function logOut() {
    localStorage.removeItem('loggedUser');  // remove logged user from locale storage
    loggedUser = {};    // reset global logged user variable
    init();     // initialize page
}

//</editor-fold>


function createNewList(form) {

    let checkUserLists = localStorage.getItem('userLists');     // get user lists
    userLists = (checkUserLists && checkUserLists !== '') ? JSON.parse(checkUserLists) : {};  // parse list

    // validate user name
    if (form.listName.value === '') {
        alert('User list name is empty!');
        return false;
    }
    let list = {name: form.listName.value, items: []};


    if (userLists[loggedUser.email]) {
        let checklist = userLists[loggedUser.email].find(list => list.name === form.listName.value);

        if (!checklist) {
            userLists[loggedUser.email].push(list);

            let newList = generateNewList(form.listName.value);     // generate new HTML list
            document.getElementById('toDoLists').appendChild(newList);  // display list
        }
    } else {
        userLists[loggedUser.email] = [list];

        let newList = generateNewList(form.listName.value);     // generate new HTML list
        document.getElementById('toDoLists').appendChild(newList);  // display list
    }

    localStorage.setItem('userLists', JSON.stringify(userLists));   // save list in locale storage


    return false;
}

function toggleList(listHeader) {
    let listTitle = listHeader.innerHTML;
    let list = document.getElementById(listTitle.replace(' ', '_'));

    list.style.display = list.style.display === 'none' ? 'block' : 'none';
}

function addItem(addItemForm) {
    let newItem = addItemForm.newItem.value;    // get value for new to-do item
    let list = (document.getElementById(addItemForm.parentElement.id).getElementsByTagName('ul'))[0];   // get ul list
    let listName = (document.getElementById(addItemForm.parentElement.id)).id.replace('_', ' ');

    let item = document.createElement('li');     // initialize new list item
    item.innerHTML = `<input type="checkbox" value="${newItem}"><div>${newItem}</div><br>`;
    item.setAttribute('onchange', 'itemChecked(this)');
    list.appendChild(item);     // add new item to list

    let findList = userLists[loggedUser.email].find(list => list.name === listName);
    findList.items.push({ name: newItem, isChecked: false });
    localStorage.setItem('userLists', JSON.stringify(userLists));

    addItemForm.newItem.value = '';     // reset new item form

    return false;
}

function generateNewList(listName) {
    let listId = listName.replace(/\s+/g,"_");

    let container = document.createElement('div');
    container.className = 'list';
    container.id = listName;

    let listHeader = document.createElement('h2');
    listHeader.setAttribute('onclick', 'toggleList(this)');
    listHeader.innerHTML = listName;
    container.appendChild(listHeader);

    let listDiv = document.createElement('div');
    listDiv.id = listId;
    listDiv.style.display = 'block';

    let list = document.createElement('ul');
    list.className = listId;
    listDiv.appendChild(list);

    let newItemForm = document.createElement('form');
    newItemForm.name = 'newListItem';
    newItemForm.className = 'newListItem';
    newItemForm.setAttribute('onsubmit', 'return addItem(this)');

    let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.name = 'newItem';
    newItemForm.appendChild(inputText);

    let inputSubmit = document.createElement('input');
    inputSubmit.type = 'submit';
    inputSubmit.value = 'Add Item';
    newItemForm.appendChild(inputSubmit);

    listDiv.appendChild(newItemForm);
    container.appendChild(listDiv);

    return container;
}


function itemChecked(listItem) {
    let listName = ((listItem.parentElement).parentElement).getAttribute('class').replace('_', ' ');    // get list name from ul class name
    let userList = userLists[loggedUser.email].find(list => list.name === listName);    // find user list
    let item = userList.items.find(item => item.name === listItem.value);   // find list item
    item.isChecked = !item.isChecked;   // toggle isChecked value
    localStorage.setItem('userLists', JSON.stringify(userLists));   // save list in locale storage
}


function showDashboard() {

    document.getElementById('userName').innerHTML = loggedUser.firstName;   // show logged user name
    dashboard.style.display = 'block';  // show dashboard

    if (userLists) {
        if (userLists[loggedUser.email]) {
            userLists[loggedUser.email].forEach(list => {
                let newList = generateNewList(list.name);     // generate new HTML list
                console.log(newList);
                document.getElementById('toDoLists').appendChild(newList);  // display list

                if (list.items.length) {
                    let userList = (document.getElementById(list.name.replace(' ', '_')).getElementsByTagName('ul'))[0];   // get ul list
                    list.items.forEach(item => {
                        let itemHtml = document.createElement('li');     // initialize new list item
                        itemHtml.innerHTML = `<input type="checkbox" value="${item.name}" ${item.isChecked ? 'checked' : ''} onchange="itemChecked(this)"><div>${item.name}</div><br>`;
                        userList.appendChild(itemHtml);     // add new item to list
                    });
                }
            });
        }
    }


}





init();



// EZEBUIRO UCHECHUKWU VINCENT