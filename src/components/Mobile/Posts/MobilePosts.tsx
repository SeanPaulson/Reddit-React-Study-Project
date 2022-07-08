import styled from "styled-components";
import PostHeader from './PostHeader';
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Posts : React.FC = () => {
  return (
    <Container>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: ${({ theme }) => theme.app.colors.post_bg};
  margin-top: .2rem;
  padding: .4rem .7rem;
`;
// const ShowMore = styled.div``

export default Posts;
