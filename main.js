document.getElementById("connect").onclick = () => {
	const url = document.getElementById("url").value;
	const user = document.getElementById("user").value;
	const password = document.getElementById("password").value;
	const ws = new WebSocket(`ws://${user}:${password}@${url}`);
};
