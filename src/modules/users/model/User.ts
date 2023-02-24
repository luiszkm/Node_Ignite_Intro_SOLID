import { randomUUID } from "node:crypto";

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = "1"; // randomUUID();
      this.admin = false;
    }
  }
}

export { User };
