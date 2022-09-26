import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/:burgerId', this.getAllBurgers)

  }


  async getAllBurgers(req, res, next) {
    console.log('whats good')
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

}