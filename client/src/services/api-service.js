export default class ApiService {
	_apiBase = "http://localhost:5000/api";

	async getResource(url) {
		const result = await fetch(`${this._apiBase}${url}`);

		if (!result.ok) {
			throw new Error(
				`Could not fetch ${url}, recieved ${result.status}`
			);
		}

		return await result.json();
	}

	async getAllStudents() {
		const result = await this.getResource(`/students/`);
		return result;
	}

	async createStudent(data) {
		const result = await fetch(`${this._apiBase}/students/`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		return result;
	}

	async deleteStudent(id) {
		const result = await fetch(`${this._apiBase}/students/${id}`, {
			method: "DELETE"
		});
		return result;
	}

	async deleteStudents(idArray) {
		const result = await fetch(`${this._apiBase}/students/`, {
			method: "DELETE",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ ids: idArray })
		});
		return result;
	}
}
