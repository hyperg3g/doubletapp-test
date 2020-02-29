const StudentsStore = require("./students.store");
const ObjectId = require("mongodb").ObjectId;
const Joi = require("joi");

const cursorConvert = async (cursor, limit = 25) => {
	return {
		data: await cursor.limit(limit).toArray(),
		limit,
		total: await cursor.count()
	};
};

const dataSchema = {
	name: Joi.string()
		.min(3)
		.required(),
	surname: Joi.string()
		.min(3)
		.required(),
	rating: Joi.number()
		.integer()
		.min(0)
};

class StudentsController {
	static async apiGetStudents(req, res) {
		const cursor = await StudentsStore.getAllStudents();
		res.send(await cursorConvert(cursor));
	}

	static async apiGetStudentById(req, res) {
		try {
			let student;

			if (ObjectId.isValid(req.params.id)) {
				student = await StudentsStore.getStudent(req.params.id);
			} else {
				res.status(400).json({ error: "Bad Request" });
				return;
			}

			if (!student) {
				res.status(404).json({ error: "Not Found" });
				return;
			}

			res.json(student);
		} catch (err) {
			console.log(`apiGetStudentById error: ${err}`);
			res.status(500).json({ error: err });
		}
	}

	static async apiAddStudent(req, res) {
		const validateBody = Joi.validate(req.body, dataSchema);

		if (validateBody.error) {
			res.status(400).send(validateBody.error.details[0].message);
			return;
		}

		const name = req.body.name;
		const surname = req.body.surname;
		const rating = req.body.rating;

		const addResponse = await StudentsStore.saveStudent({
			name: name,
			surname: surname,
			rating: rating
		});

		res.json(addResponse);
	}

	static async apiDeleteStudentById(req, res) {
		try {
			let student;

			if (ObjectId.isValid(req.params.id)) {
				student = await StudentsStore.deleteStudent(req.params.id);
			} else {
				res.status(400).json({ error: "Bad Request" });
				return;
			}

			if (!student) {
				res.status(404).json({ error: "Not Found" });
				return;
			}

			res.json(student);
		} catch (err) {
			console.log(`apiDeleteStudentById error: ${err}`);
			res.status(500).json({ error: err });
		}
	}

	static async apiDeleteStudents(req, res) {
		try {
			let students;

			if (req.body.ids.every(id => ObjectId.isValid(id))) {
				students = await StudentsStore.deleteManyStudents(req.body.ids);
			} else {
				res.status(400).json({ error: "Bad Request" });
				return;
			}

			if (!students) {
				res.status(404).json({ error: "Not Found" });
				return;
			}

			res.json(students);
		} catch (err) {
			console.log(`apiDeleteStudents error: ${err}`);
			res.status(500).json({ error: err });
		}
	}
}

module.exports = StudentsController;
