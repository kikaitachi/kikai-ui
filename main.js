const urlElement = document.getElementById("url")
urlElement.value = localStorage.getItem("url");
urlElement.onblur = () => {
	localStorage.setItem("url", urlElement.value);
}

const userElement = document.getElementById("user")
userElement.value = localStorage.getItem("user");
userElement.onblur = () => {
	localStorage.setItem("user", userElement.value);
}

const passwordElement = document.getElementById("password");

document.getElementById("connect").onclick = () => {
	const url = urlElement.value;
	const user = userElement.value;
	const password = passwordElement.value;
	const ws = new WebSocket(`ws://${user}:${password}@${url}`);
};
