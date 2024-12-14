import { makeRequestNoAuth } from '@helpers/apiUtils'

// const { API_URL } = process.env
const { API_URL } = process.env;
// console.log(API_URL)

const getBlogList = async (
    path: string,
    params?: {
        limit?: number
        is_hero?: boolean
        is_most_read?: boolean
        is_market_information?: boolean
        title?: any
    }
) => {
    // console.log(API_URL)
    const res = await makeRequestNoAuth({
        method: 'GET',
        url: `${API_URL}${path}`,
        params,
    })
    const data = res.data.results
    return data
}

const getBlogDetail = async (path: string, slug: string) => {
    console.log('check api', `${API_URL}${path}/${slug}`)
    const res = await makeRequestNoAuth({
        method: 'GET',
        url: `${API_URL}${path}/${slug}`,
    })
    const data = res.data
    return data
}

export { getBlogList, getBlogDetail }
