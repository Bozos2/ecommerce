import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcryptjs";
import { connectToMongoDB } from "@/app/lib/mongodb";
import { RUser } from "@/app/types";
import mongoose from "mongoose";
import User from "@/app/models/user";
interface BodyResponseProp {
  email: string;
  fullName: string;
  password: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  connectToMongoDB().catch((err) =>
    NextResponse.json({ err }, { status: 500 })
  );
  const data: BodyResponseProp = await req.json();

  if (req.method === "POST") {
    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    console.log(data);

    const { email, fullName, password } = data;

    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return NextResponse.json(
          { error: "User Already exists" },
          { status: 409 }
        );
      } else {
        if (password.length < 5)
          return NextResponse.json(
            { error: "Password should be 5 characters long" },
            { status: 409 }
          );

        const hashedPassword = await hash(password, 12);

        try {
          const data: RUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
          });

          const user = {
            email: data.email,
            fullName: data.fullName,
            _id: data._id,
          };

          return NextResponse.json(
            {
              success: true,
              user,
            },
            { status: 201 }
          );
        } catch (error) {
          if (error instanceof mongoose.Error.ValidationError) {
            const errors = Object.values(error.errors).map(
              (err) => err.message
            );
            return NextResponse.json(
              { errors },
              {
                status: 403,
              }
            );
          }

          return NextResponse.json(
            { error: "Problem with user create" },
            { status: 400 }
          );
        }
      }
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 });
    }
  } else {
    return console.log("method not allowed");
  }
}
