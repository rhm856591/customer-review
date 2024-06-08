import {connectToDb} from '@/lib/mongodb.js'
import model from '@/model/rating.model.js'

export async function POST(req, res) {
    const { safetyRating, communicationRating, recommend, praise } = await req.json();
    console.log(safetyRating, communicationRating, recommend, praise);
   try {
    await connectToDb()
    const response = await model.create({
      safetyRating,
      communicationRating,
      recommend,
      praise
    })
    await response.save();
    return Response.json({
      message: 'Thank you for your feedback!',
      status: 200,
      // data: response
    })
   } catch (error) {
    console.log(error)
   }
   
  
}
