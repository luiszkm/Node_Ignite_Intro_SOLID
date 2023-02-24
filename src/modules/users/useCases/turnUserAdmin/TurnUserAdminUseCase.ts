import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existsUser_id = this.usersRepository.findById(user_id);

    if (!existsUser_id) {
      throw new Error("User not found");
    }
    this.usersRepository.turnAdmin(existsUser_id);

    return existsUser_id!;
  }
}
export { TurnUserAdminUseCase };
