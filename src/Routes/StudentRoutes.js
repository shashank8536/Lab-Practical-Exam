import express from 'express';

const router = express.Router();

let students = [];
let currentId = 1;

router.post("/", (req, res) => {
    const { name, marks } = req.body;

    if (!name || marks <= 0) {
        return res.status(400).json({
            message: "Invalid input (name required, marks > 0)"
        });
    }

    const newStudent = {
        id: currentId++,
        name,
        marks
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.get("/", (req, res) => {
    res.status(200).json(students);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, marks } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (!name || marks <= 0) {
        return res.status(400).json({
            message: "Invalid input (name required, marks > 0)"
        });
    }

    student.name = name;
    student.marks = marks;

    res.status(200).json(student);
});

// DELETE
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);


});

export default router;