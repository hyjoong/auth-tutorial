import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import type { NextAuthConfig } from "next-auth";
import Credintials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Credintials({
      async authorize(credentials) {
        const validateFields = await LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const passwordsmatch = await bcrypt.compare(password, user.password);

          if (passwordsmatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
