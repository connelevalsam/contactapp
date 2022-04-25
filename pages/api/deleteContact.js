import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
      }
      try {

        const { id } = req.body //JSON.parse(req.body);
        // console.log(req.body)
        const delContact = await prisma.contact.delete({
            where: {
              id: id,
            },
        })

        res.status(200).json(delContact)
    } catch (err) {
        console.log("from API error", err)
        res.status(400).json({ message: 'Could not delete contact' });
    }
  }