import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id = request.headers;

    this.listAllUsersUseCase.execute(user_id);
    const allUsers = this.listAllUsersUseCase;

    return response.status(201).json(allUsers);
  }
}

export { ListAllUsersController };
