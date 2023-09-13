import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { connectToMongoDB } from "@/app/lib/mongodb";
import { RUser } from "@/app/types";
import mongoose from "mongoose";
import User from "@/app/models/user";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });

    const data = res.json;
    console.log(data);

    const { email, fullName, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: "User Already exists" });
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: "Password should be 6 characters long" });

      const hashedPassword = await hash(password, 12);

      try {
        await User.create(
          {
            fullName,
            email,
            password: hashedPassword,
          },
          (error: unknown, data: RUser) => {
            if (error && error instanceof mongoose.Error.ValidationError) {
              for (let field in error.errors) {
                const msg = error.errors[field].message;
                return res.status(409).json({ error: msg });
              }
            }

            const user = {
              email: data?.email,
              fullName: data?.fullName,
              _id: data?._id,
            };

            return res.status(201).json({
              success: true,
              user,
            });
          }
        );
      } catch {
        return res.status(400).json({ error: "problem with user create" });
      }
    }
  } else {
    return console.log("method not allowed");
  }
}
