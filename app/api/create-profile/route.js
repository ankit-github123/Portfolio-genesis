import Profiles from "@models/Profiles";
import { connectToDB } from "@utils/database/database";
import * as fs from "fs";
import path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
export const POST = async (req, res) => {
  try {
    const formdata = await req.formData();
    console.log("path1", serverRuntimeConfig);
    console.log("path2", `${process.cwd()}/app/api/create-profile/temp`);
    // console.log(data.get("file"), "data4");
    const firstname = formdata.get("firstname");
    const lastname = formdata.get("lastname");
    const username = formdata.get("username");
    const email = formdata.get("email");
    const description = formdata.get("description");
    const profileimage = formdata.get("profileimage");
    const userId = formdata.get("userId");
    // const file = data.get('file');
    // const id = data.get('id')
    const bytes = await profileimage.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // console.log(id, "buffer1");
    const filename = "ankit" + ".png"; // You can choose a different file format
    const filePath = path.join(
      `${process.cwd()}/app/api/create-profile/`,
      "temp",
      filename
    );
    console.error(filePath, "filepath1");
    // fs.writeFile(filePath, buffer,)
    fs.writeFile(filePath, buffer, async (err) => {
      if (err) {
        console.log(err.message, "buffer2");
        return res.status(500).send("Error saving image.");
      }
      await connectToDB();
      const ProfileData = new Profiles({
        firstname,
        lastname,
        description,
        username,
        email,
        userId,
        profileimage: filePath,
      });

      await ProfileData.save();

      return new Response("success", { status: 200 });
    });
    return new Response("success", { status: 200 });
  } catch (err) {
    console.log(err.message, "message1");
    return new Response("success", { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const data = await Profiles.find({});
    console.log(data, "dt1");
    const filePath = path.join(__dirname, "temp", "ankit.png");
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
    return new Response(JSON.stringify({ msg: err.message }), { status: 500 });
  }
};
