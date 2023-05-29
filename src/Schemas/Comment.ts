import { User } from "./User";

export class Comment {
  id: number;
  text: string;
  User?: User;
}
