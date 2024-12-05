"use client";
import { useEffect } from "react";
// import { getEnvVariables } from "./api/helper";
// import axios from "axios";
export default function Home() {
  useEffect(() => {
    console.log("API_URL", process.env.API_URL);
    // getEnvVariables();
    // async function fetchData() {
    //   fetch(
    //     "https://houze-portal-api.houze.io/portal/blogs?offset=0&limit=20&is_hero=false&is_most_read=false&section_id=1&ordering=-publish_time"
    //   )
    //     .then((res) => res.json())
    //     .then((response) => {
    //       console.log(response.results);
    //     });
    // }
    // fetchData();
    // axios
    //   .get(
    //     "https://houze-portal-api.houze.io/portal/blogs?offset=0&limit=20&is_hero=false&is_most_read=false&section_id=1&ordering=-publish_time"
    //   )
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  }, []);
  return (
    <div>
      <h1 className="test">HelloWorld</h1>
    </div>
  );
}
