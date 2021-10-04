import { Router } from 'express';

//import { home } from '../controllers/pageController';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home );
router.get('/dogs', PageController.dogs );
router.get('/cats', PageController.cats );
router.get('/fishes', PageController.fishes );



export default router;