const database = require("../database/database");
const ObjectId = require("mongodb").ObjectId;

const setupCollection = async () => {
	const dBase = await database;

	const collection = dBase.collection(`students`);
	return collection;
};

class StudentsStore {
	constructor(collection) {
		this.collection = collection;
	}

	async getStudent(id) {
		const objID = new ObjectId(id);
		return (await this.collection).findOne({ _id: objID });
	}

	async getAllStudents() {
		return (await this.collection).find();
	}

	async saveStudent(studentData) {
		return (await this.collection).insertOne(studentData);
	}

	async deleteStudent(id) {
		const objID = new ObjectId(id);
		return (await this.collection).deleteOne({ _id: objID });
	}

	async deleteManyStudents(data) {
		const objIdArray = data.map(id => new ObjectId(id));
		return (await this.collection).deleteMany({ _id: { $in: objIdArray } });
	}
}

module.exports = new StudentsStore(
	setupCollection().catch(err =>
		console.log(`Failed to set up "students" collection: ${err}`)
	)
);
