import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { User } from "../../component/User";

import { PageComments } from "../PageComments";

//#region

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});
const Wrapper = styled.div({
  border: "5px solid #1C6EA4",
  marginTop: "30px",
  width: "1200px",
});

//#endregion

interface TPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const PageHome = () => {
  // const navigate = useNavigate();
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "50px", padding: "10px" }}>
        MetaFake!
      </div>
      <Container>
        {posts.map((post) => (
          <>
            <Wrapper>
              <User userId={post.userId} />
              <div key={post.id}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {post.title}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",

                      padding: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {post.body}
                    </p>
                  </div>
                </div>
              </div>
              <PageComments idPost={post.id} />
            </Wrapper>
          </>
        ))}
      </Container>
    </>
  );
};
