// const pwd = document.querySelector("#pwd");
// const cpwd = document.querySelector("#cpwd");
// const message = document.querySelector("formmessage");

// cpwd.addEventListener("focusout", checkSame);

// function checkSame() {
// 	if (pwd.value !== cpwd.value) {
// 		message.textContent = "❗Key Phrases DO NOT MATCH!";
// 		message.style.visibility = "show";
// 		cpwd.style.backgroundColor = "#fff0f3";
// 		cpwd.value = "";
// 		cpwd.focus();
// 	} else {
// 		message.style.display = "none";
// 		cpwd.style.backgroundColor = "#fff";
// 		cpwd.style.color = "#000";
// 	}
// }
const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "PASSWORDS DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
        kp1.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
