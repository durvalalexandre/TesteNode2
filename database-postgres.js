import { randomUUID } from "node:crypto"
import { url } from "./sql.js";

export class DatabasePostgres {
    #videos = new Map()

    async list(search) {

        let videos

        if (search) {
            videos = await url`select * from videos where title iLike ${'%' + search + '%'}`
        } else {
            videos = await url`select * from videos`
        }
        return videos

    }

    async create(video) {
        const videoID = randomUUID()
        const { title, description, duration } = video
        await url`insert into videos (id, title, description, duration) values (${videoID}, ${title}, ${description}, ${duration})`
    }

    async update(id, video) {

        const { title, description, duration } = video
        await url`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id};`

    }

    async delete(id) {
        await url`delete from videos where id = ${id}`

    }
}