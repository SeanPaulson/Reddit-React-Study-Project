import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem 0;
`;

const ContentTitle = styled.p`
  margin: 0px;
  font-weight: 600;
  align-self: flex-start;
  color: ${({ theme }) => theme.app.colors.lightgray};
`;

const ContentImage = styled.img`
  width: 70px;
  height: 50px;
  border: 1px solid lightgray;
  text-align: center;
`;

const PostBody = (props) => {
  return (
    <Content>
      <ContentTitle>Title</ContentTitle>
      <ContentImage alt="picture" src="" />
    </Content>
  );
};

export default PostBody;
