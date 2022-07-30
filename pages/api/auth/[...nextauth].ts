import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'username' },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password is password',
        },
      },
      async authorize(credentials, req) {
        if (credentials?.password === 'password') {
          return credentials
        }
        return null
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        return token
      }
      return token
    },
    session: ({ session, token }) => {
      return session
    },
  },
  secret: 'test',
  pages: {
    signIn: '/login',
  },
})
