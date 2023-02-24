import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers;
    try {
      this.listAllUsersUseCase.execute(user_id);
      const allUsers = this.listAllUsersUseCase;

      return response.status(201).json(allUsers);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
