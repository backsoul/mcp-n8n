import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface UserInput {}

class UserTool extends MCPTool<UserInput> {
  name = "User";
  description = "User tool About Information";

  schema = {};

  async execute(input: UserInput) {
    //fetch
    //axios
    // -> microservice
    return {
      name: "Backsoul",
      channel: "Backsoul",
      subs: 256,
      goalSubs: 300,
    };
  }
}

export default UserTool;
