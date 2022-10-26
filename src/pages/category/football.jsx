import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import img from "../../images/q.jpg";

export const Football = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=football&from=2022-10-01&to=2022-10-30&sortBy=popularity&apiKey=de2621bf7b244829905edff4d766a932"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {data?.articles?.results?.map((items, index) => (
        <div key={index}>
          <Card className="card-wrapper">
            <img
              src={items.image_url === null || "" ? img : items.image_url}
              width={220}
              height={130}
              alt="imag1"
            />
            <h1>{items?.title?.substring(0, 20)}</h1>
            <p>
              Author:{" "}
              {items.author === null || ""
                ? "no author"
                : items?.creator?.substring(0, 20)}
            </p>
            <Button
              onClick={() => (window.location.href = items.link)}
              className="read-more"
              type="primary"
            >
              Read more
            </Button>
          </Card>
        </div>
      ))}
    </>
  );
};
