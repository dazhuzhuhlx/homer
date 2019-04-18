import { data as COURSE_SCHEMA } from "./course_schema.json";
const images = require.context("./images", true, /\.(png|jpe?g|svg)$/);

const store = {};
export default function imageByUrl(url0, url1, _id) {
    const store_key = `${url0}::${url1}::${_id}`;
    if (store[store_key]) return store[store_key];

    const image = COURSE_SCHEMA[url0][url1].find(({ id }) => id === _id);
    // console.log("%o", { store_key, image });
    const image_url = images(`./${image.image}`)
    store[store_key] = image_url;
    return image_url;
}
