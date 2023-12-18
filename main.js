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

const itemConnect = document.getElementById("itemConnect");
const itemDisconnect = document.getElementById("itemDisconnect");
const connectionInfo = document.getElementById("connectionInfo");

const connect = () => {
	const url = urlElement.value;
	const user = userElement.value;
	const password = passwordElement.value;
	const protocol = location.protocol == "http:" ? "ws" : "wss";
	const ws = new WebSocket(`${protocol}://${user}:${password}@${url}`);
	ws.onopen = () => {
		connectionInfo.innerHTML = `Connected to ${protocol}://${user}@${url}`;
		itemConnect.classList.add("hidden");
		itemDisconnect.classList.remove("hidden");
	}
	ws.onclose = (event) => {
		itemConnect.classList.remove("hidden");
		itemDisconnect.classList.add("hidden");
		if (event.code != 3000) {
			setTimeout(connect, 2000);
		}
	}
	document.getElementById("disconnect").onclick = () => {
		ws.close(3000, "user clicked disconnect");
	}
};

document.getElementById("connect").onclick = connect;
