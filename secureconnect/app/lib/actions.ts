'use server';
 
import { signIn } from '@/auth';
import { AuthError, User } from 'next-auth';
import postgres from 'postgres';
import bcrypt from "bcrypt";
import { z } from 'zod';

const FormSchema = z.object({
  id:z.string(),
  username: z.string(),
  password: z.string(),
});
 
const CreateUser = FormSchema.omit({ id: true});
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function RegisterUser( prevState: string | undefined,formData:FormData)
{
  const { username, password } = CreateUser.parse({
    username: formData.get('username'),
    password: formData.get('password'),
  });


  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

  try {
    // Check if user already exists
    const existingUser: User[] = await sql<User[]>`
    SELECT * FROM users WHERE username = ${username}
  `;
    if (existingUser.length > 0) {
      return "Username already taken!";
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database
    await sql<User[]>`INSERT INTO users (username, password) VALUES (${username}, ${hashedPassword})
    `;
  } catch (error) {
    console.error("Signup error:", error);
    return "An error occurred. Please try again.";
  }

  await signIn('credentials', formData);
}