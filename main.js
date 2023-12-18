const urlElement = document.getElementById("url")
urlElement.value = localStorage.getItem("url");
urlElement.onblur = () => {
	localStorage.setItem("url", urlElement.value);
};

const userElement = document.getElementById("user")
userElement.value = localStorage.getItem("user");
userElement.onblur = () => {
	localStorage.setItem("user", userElement.value);
};

const passwordElement = document.getElementById("password");

const connect = () => {
	const url = urlElement.value;
	const user = userElement.value;
	const password = passwordElement.value;
	const protocol = localtion.protocol == "http:" ? "ws" : "wss";
	const ws = new WebSocket(`${protocol}://${user}:${password}@${url}`);
	ws.onclose = () => {
		setTimeout(connect, 2000);
	}
};

document.getElementById("connect").onclick = connect;
