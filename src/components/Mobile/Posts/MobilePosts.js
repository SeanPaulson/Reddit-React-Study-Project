import styled from "styled-components";
import PostHeader from './PostHeader';
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: white;
  margin-top: .4rem;
  padding: .4rem .7rem;
`;
// const ShowMore = styled.div``

function Posts() {
  return (
    <Container>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </Container>
  );
}

export default Posts;
