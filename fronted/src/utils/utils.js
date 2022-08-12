export function saveinLocalStorage(identifier, data) {
	localStorage.setItem(identifier, data);
	alert(`Token ${identifier} generado. Iniciando Sessión!`);
} 

export function getDataFromLocalStorage(identifier) {
	return localStorage.getItem(identifier);
}

export function generateHeaderForRequest(identifier) {
	const tokenAcces = getDataFromLocalStorage(identifier);
	return {Authorization: `Bearer ${tokenAcces}`}
}

export function deleteItemFromLSByIdent(identifier) {
	localStorage.removeItem(identifier);
}

export function generateDateToday() {
	return new Date().toISOString().slice(0, 10);
}

export function formatDate(date) {
	return date.toISOString().slice(0, 10);
}
