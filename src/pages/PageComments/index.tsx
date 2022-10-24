import styled from "@emotion/styled";
import { useEffect, useState } from "react";

//#region
const Container = styled.div({
  border: "5px double #CACCCC",
  margin: "30px",
});

const Wrapper = styled.div({
  border: "5px double #1C6EA4",
  borderRadius: "0px 17px 17px 17px",
  margin: "15px",
});

//#endregion

type TComment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};
interface Props {
  idPost: number;
}
export const PageComments = ({ idPost }: Props) => {
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <>
      <Container>
        <div style={{ padding: "20px", fontSize: "30px" }}>Comments</div>
        {comments.map((comment) => (
          <>
            <Wrapper key={comment.id}>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "20px",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {comment.name}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {comment.body}
                </p>
              </div>
            </Wrapper>
          </>
        ))}
      </Container>
    </>
  );
};
