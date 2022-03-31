import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
      }
    
      try {

        const conatactData = req.body
        
        const saveContact = await prisma.contact.create({
            data: conatactData
        })

        res.status(200).json(saveContact)
    } catch (err) {
        console.log("from API error", err)
        res.status(400).json({ message: 'Something went wrong' });
    }
  }