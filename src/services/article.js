import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'fefbf208cfmshedcccc107f741c6p15aef7jsn27b370276f9a',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   };

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'rapidApiKey');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
})