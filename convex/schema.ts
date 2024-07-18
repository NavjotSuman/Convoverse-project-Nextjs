import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users:defineTable({
    name:v.optional(v.string()),
    email:v.string(),
    image:v.string(),
    tokenIdentifier:v.string(),
    isOnline:v.boolean(),
  }).index("by_tokenIdentifier",["tokenIdentifier"])
});





// learning first
// export default defineSchema({
//   tasks: defineTable({
//     text: v.string(),
//     completed: v.boolean(),
//   }),

//   products: defineTable({
//     name: v.string(),
//     price: v.number(),
//   }),
// });
