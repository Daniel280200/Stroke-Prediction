function login(){var e=document.getElementById("login_email_input").value,t=document.getElementById("login_password_input").value;firebase.auth().signInWithEmailAndPassword(e,t).catch(n=>{window.alert("Error : "+n.message)}),firebase.auth().onAuthStateChanged(function(n){n&&document.getElementById("go-home").click()})}function register(){window.alert("this button is under development!")}function logout(){firebase.auth().signOut().catch(e=>{window.alert("Error : "+e.message)})}function loginEmailInputStyle(){var e=document.getElementById("login_email_input").value,t=document.getElementById("login_email_input"),n=document.getElementById("login_email_icon_triangle"),i=document.getElementById("login_email_icon_check"),s=document.getElementById("login_email_help");validateEmail(e)?(t.classList.add("is-success"),t.classList.remove("is-danger"),n.setAttribute("style","display:none;"),i.setAttribute("style",""),s.setAttribute("style","display:none;")):(t.classList.remove("is-success"),t.classList.add("is-danger"),i.setAttribute("style","display:none;"),n.setAttribute("style",""),s.setAttribute("style",""))}function validateEmail(e){return/\S+@\S+\.\S+/.test(e)}function temp(){var e=location.pathname;console.log(e)}firebase.auth().onAuthStateChanged(function(e){var t=document.getElementById("nav-for-logged-users"),n=document.getElementById("nav-for-unlogged-users");e&&["/login","/register"].includes(location.pathname)&&document.getElementById("go-home").click(),null!=t&&null!=n&&(e?(t.setAttribute("style",""),n.setAttribute("style","display:none;")):(t.setAttribute("style","display:none;"),n.setAttribute("style","")))});