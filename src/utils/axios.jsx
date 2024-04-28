import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmJlZDMyMDRhMDhlNzliZGYzZjgwYmM0OGMwZmFjMCIsInN1YiI6IjY2MjQyNDk4ZTI5NWI0MDE0YTk5NGRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c52lEdiBd4a7jxirkTOcjITCSFLsliUHP40GZurLBAM'
    }
})

export default instance