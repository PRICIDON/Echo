// @ts-ignore
import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx: {
    db: {
      query: (arg0: string) => {
        (): any;
        new (): any;
        collect: { (): any; new (): any };
      };
    };
  }) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx: {
    auth: { getUserIdentity: () => any };
    db: { insert: (arg0: string, arg1: { name: string }) => any };
  }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    return await ctx.db.insert("users", {
      name: "Yuri",
    });
  },
});
