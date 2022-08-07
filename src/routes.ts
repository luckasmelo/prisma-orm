import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory.ts";
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();

const findProductController = new FindProductController();
const findCategoryController = new FindCategoryController();

router.post("/product", createProduct.handle); 
router.post("/productWithCategory", createProductCategoryExist.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", createProductCategoryController.handle);

router.get("/product/:id", findProductController.handle);
router.get("/category/:id", findCategoryController.handle);

export { router }
