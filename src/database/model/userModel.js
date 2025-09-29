import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class User extends Model {
  static table = "users";

  @field("name") name;
  @field("email") email;
  @field("deviceName") deviceName;
  @field("token") token;
  @field("senha_hash") senha_hash;
  @field("is_logged_in") is_logged_in;
  @field("created_at") created_at;
  @field("updated_at") updated_at;
}
