function login(){window.alert("this button is under development!")}function loginemailinputStyle(){var t=document.getElementById("login_email_input").value,e=document.getElementById("login_email_input"),i=document.getElementById("login_email_icon_triangle"),n=document.getElementById("login_email_icon_check"),l=document.getElementById("login_email_help");validateEmail(t)?(e.classList.add("is-success"),e.classList.remove("is-danger"),i.setAttribute("style","display:none;"),n.setAttribute("style",""),l.setAttribute("style","display:none;")):(e.classList.remove("is-success"),e.classList.add("is-danger"),n.setAttribute("style","display:none;"),i.setAttribute("style",""),l.setAttribute("style",""))}function validateEmail(t){return/\S+@\S+\.\S+/.test(t)}