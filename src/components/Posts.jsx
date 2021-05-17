import React, { useEffect } from "react";
import { load_posts } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Alert } from "antd";
import "antd/dist/antd.css";
import { Card } from "antd";
import "./Posts.css";

export const Posts = () => {
  const styles = {
    with: "25%",
    textalign: "center",
  };
  const dispatch = useDispatch();

  const error = useSelector((state) => state.isError);
  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(load_posts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <b>Error: {error}</b>}
      {loading && (
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      )}

      {posts.map((el, id) => {
        return (
          <Card.Grid key={id} style={styles}>
            {el.title}
          </Card.Grid>
        );
      })}
    </div>
  );
};
