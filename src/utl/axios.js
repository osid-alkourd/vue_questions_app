import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmQ4YTQ0YWQyNjc5Y2M4YjYxZmE0ODFmMmY0ZGZiZjJlZDhkYzA1YzczYmU2YmM3NDQ3ZjMwZTE2MTY2Yjk4NzAxZmYwZGI3ZDQ0Yzk3YTciLCJpYXQiOjE2OTEwMDQzMDYuMDkzNzE2LCJuYmYiOjE2OTEwMDQzMDYuMDkzNzMxLCJleHAiOjE3MjI2MjY3MDYuMDY1NTA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Guhu2LtCSg8aX7X06fmAY_mmpVxkmx5173FDBpivINBo3mcr1O5i2ZLHNfRXLfe_DON1hVlGjLpX4SkljVfPZdBbqJP0kF5rSk_4LK17Y3b-t-prNjeWf3OppNTigcxlfSA41Ehc_GcGYqALfI47lDhFiQALQx-x6Jt9NQo3BBJDUpjFJzQof-lFHN7WG2BB-2JvcxzRf492RJCX91AkdeOTv7k2qNwiBEaFpercF-VoyBIuNyOkf_0pwJ5tT5JRKG9f8_uhakTt3c4s9WReCiwNKnKe4bkfsbugmhJaEMiuYeRPjHgocwxTtjhrfDYhix7luMBxEWRPG3D-U7KdwJDdWl_8VlmJ8sFxx9HDN0aEeeYFI2jDONX8seryYnes_GzBJSgabHWMhRHDC52Spu4HNns2tvXfjFObNDE8k6bPFuE5cbLY_m-QIX8ZyTo_cJvq4kIh3SFPwm6UgWCyM6GLs7Ypq0sdQPuhjvhQdQDX91HcA5vGugs_i8_STucrOo3QNECv9w-CJFiAL0Mplm0wTv7CNSDJi7QFVwlzhQtKZnXRsJDBjDzuaBf4wbwHorIgrE2vlwtYO2pV2KhOuqrusE7VlOcPNBP8RAkqNcCJvimmlGC4cJK7b4Z5ZezkTVTlk1dg-z86R-AGCXazbXP_W26xha6RZEUyaTSkkbQ'
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

//export default axiosInstance
export {axiosInstance}
//   function makeApiRequest(method, url, data, token) {
//     return axios({
//       method,
//       url: baseURL + url,
//       data,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   }