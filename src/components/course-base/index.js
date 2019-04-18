import { data as COURSE_SCHEMA } from "./course_schema.json";
import { data as post_raws } from "./post_raws.json";
import imageByUrl from "./image-by-url";

const post = post_raws.reduce(
    (result, _course) => Object.assign(result, { [_course.id]: _course }),
    {}
);

const store = {};
export default function courseBase(url0, url1) {
    const store_key = `${url0}::${url1}`;
    if (store[store_key]) return store[store_key];

    const base = COURSE_SCHEMA[url0][url1].map(course =>
        Object.assign({}, course, { ...post[course.id] }, { image_url: imageByUrl(url0, url1, course.id) })
    );

    store[store_key] = base;

    return base;
}
