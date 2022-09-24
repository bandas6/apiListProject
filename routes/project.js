const { Router } = require('express');
const { getProjects, postProjects } = require('../controllers/projects');

const router = Router();

router.get('/',getProjects);

router.post('/:id', postProjects);



module.exports = router;