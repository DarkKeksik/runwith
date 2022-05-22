import { ModelGuest, ModelContentMainPage } from "../models";

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

const getPageContent = async (page: string) => {
    // @ts-ignore
    return await ModelContentMainPage.find({page}).then(data => data)
}

export { recordBDGuestVisit, getPageContent }