import { ConvexError, v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const createUser = internalMutation({
  args: {
    tokenIdentifier: v.string(),
    email: v.string(),
    name: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      tokenIdentifier: args.tokenIdentifier,
      email: args.email,
      name: args.name,
      image: args.image,
      isOnline: true,
    });
  },
});

// update user
export const updateUser = internalMutation({
  args: { tokenIdentifier: v.string(), image: v.string() },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, {
      image: args.image,
    });
  },
});

// user online
export const setUserOnline = internalMutation({
  args: { tokenIdentifier: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, { isOnline: true });
  },
});

// user offline
export const setUserOffline = internalMutation({
  args: { tokenIdentifier: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, { isOnline: false });
  },
});

// get all users
export const getUser = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const users = await ctx.db.query("users").collect();
    return users;
  },
});

// get me
export const getMe = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new ConvexError("user not found");
    }
    return user;
  },
});

// TODO: add getGroupMembers query -- later
