import Users from "@models/Users";
import { connectToDB } from "@utils/database/database";
import NextAuth from "next-auth/next";
import Googleprovider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    redirect: false,

    callbacks: {

        async session({ session }) {
            // store the user id from MongoDB to session
            try {
                const sessionUser = await Users.findOne({ email: session.user.email });
                session.user.id = sessionUser._id.toString();
                session.user.username = sessionUser.username;
                return session;
            } catch (err) {
                console.error(err.message)
            }

        },
        async signIn({ account, user, profile }) {
            // console.error(user)
            try {
                await connectToDB();
                const userExists = await Users.findOne({ email: profile?.email });
                if (userExists === null) {
                    await Users.create({
                        email: profile?.email,
                        name: profile?.name.replace(/\s+/g, '').toLowerCase(),
                        image: profile?.picture,
                        username: "",
                    })
                }
                return true
            } catch (err) {
                console.error(err.message);
                return false
            }

        },
    },
})

export { handler as GET, handler as POST };