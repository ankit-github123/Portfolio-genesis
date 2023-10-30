import Profiles from '@models/Profiles';
import { connectToDB } from '@utils/database/database';
import * as fs from 'fs';
import path from 'path';

export const POST = async (req, res) => {
    try {
        const data = await req.formData();
        console.log(data.get('file'), 'data4')
        const file = data.get('file');
        const id = data.get('id')
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        console.log(id, 'buffer1')
        const filename = 'ankit' + '.png'; // You can choose a different file format
        const filePath = path.join(__dirname, 'temp', filename);
        console.error(filePath, 'filepath1')
        // fs.writeFile(filePath, buffer,)
        fs.writeFile(filePath, buffer, async (err) => {
            if (err) {
                console.log(err.message, 'buffer2')
                return res.status(500).send('Error saving image.');
            }
            await connectToDB();
            await Profiles.create({
                userId: id,
                image: filePath,
            })

            return new Response('success', { status: 200 })
        });
    }
    catch (err) {
        console.error(err.message, 'message1')
        return new Response('success', { status: 500 })

    }
};

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const data = await Profiles.find({});
        console.log(data, 'dt1');
        const filePath = path.join(__dirname, 'temp', 'ankit.png');
        // fs.readFile(filePath, async (err, buff) => {
        //     if (err) {
        //         return res.status(404).send('Image not found.');
        //     }
        //     console.log(buff, 'buff1');
        //     const result = data[0];
        //     result.img = buff;
        //     return new Response(JSON.stringify({ result }), { status: 200 });
        // });
        const arrayres = [];
        for (let i = 0; i < data.length; i++) {
            const buff = await fs.readFileSync(filePath);
            let result = { data: data[0], img: buff };
            arrayres.push(result);
        }

        return new Response(JSON.stringify({ result: arrayres }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ msg: err.message }), { status: 500 })
    }
}