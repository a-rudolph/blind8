import { z } from "zod";

export const userSchema = z.object({
  cell: z.string(),
  dob: z.object({
    date: z.string(),
    age: z.number(),
  }),
  bio: z.string(),
  email: z.string(),
  gender: z.string(),
  id: z.object({
    name: z.string(),
    value: z.string(),
  }),
  location: z.object({
    street: z.object({
      name: z.string(),
      number: z.number(),
    }),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postcode: z.coerce.string(),
  }),
  login: z.object({
    uuid: z.string(),
    username: z.string(),
    password: z.string(),
    salt: z.string(),
    md5: z.string(),
  }),
  name: z.object({
    title: z.string(),
    first: z.string(),
    last: z.string(),
  }),
  nat: z.string(),
  phone: z.string(),
  picture: z.object({
    large: z.string(),
    medium: z.string(),
    thumbnail: z.string(),
  }),
  registered: z.object({
    date: z.string(),
    age: z.number(),
  }),
});

export type User = z.infer<typeof userSchema>;
