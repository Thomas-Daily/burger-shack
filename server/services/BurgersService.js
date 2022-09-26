import { fakeDb } from "../db/fakeDb"

class BurgersService {
  async getBurgers() {
    const res = await fakeDb
    return res.burgers
  }


}

export const burgersService = new BurgersService()