import { getStudent } from '../models/studentModel.js';

const studentPage = (req, res) => {
    const student = getStudent();
    res.render('student', {
        title: 'Student Information',
        student,
    });
};

export { studentPage };
