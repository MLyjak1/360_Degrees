//This function handles login functionality.
async function loginHandler (event) {

    event.preventDefault();

    //Get the inputted username and password from the proper fields.
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    //Check that username and password were entered before passing signin information through POST request.
    if (username && password) {

        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }

    }

}

document.getElementById("login-submit-button").addEventListener("click", loginHandler);