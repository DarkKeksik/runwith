import {ModelGuest, ModelContentPages} from "../models";

/** Пишем гостевой визит на сайт */
const recordBDGuestVisit = async (
    remoteAddress: string,
    originalUrl: string
) => {
    const guest = new ModelGuest({
        ip: remoteAddress,
        date: new Date(),
        page: originalUrl
    })
    await guest.save()
}


const getPageContent = (page: string) => (
    ModelContentPages.findOne({ page }).exec()
)

export { recordBDGuestVisit, getPageContent }