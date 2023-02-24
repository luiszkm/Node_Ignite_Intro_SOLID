import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.params;

    try {
      if (!user_id) {
        throw new Error("User ID not found");
      }
      this.showUserProfileUseCase.execute(user_id);
      const userDetails = this.showUserProfileUseCase;

      return response.status(201).json(userDetails);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
