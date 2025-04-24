function toggleModal(isSignUp = false) {
    const modal = document.getElementById("authModal");
    modal.classList.toggle("active");
    if (isSignUp) showForm('signup');
    else showForm('signin');
}

function showForm(type) {
    const tabSignIn = document.getElementById("tabSignIn");
    const tabSignUp = document.getElementById("tabSignUp");
    const formSignIn = document.getElementById("formSignIn");
    const formSignUp = document.getElementById("formSignUp");

    if (type === "signin") {
        tabSignIn.classList.add("active");
        tabSignUp.classList.remove("active");
        formSignIn.classList.remove("hidden");
        formSignUp.classList.add("hidden");
    } else {
        tabSignUp.classList.add("active");
        tabSignIn.classList.remove("active");
        formSignUp.classList.remove("hidden");
        formSignIn.classList.add("hidden");
    }
}