import styled from "styled-components";
import { Comments } from "../../Posts/Comments";
import ShareSVG from "../../../images/ShareSVG";
import { Votes } from "../../Posts/Votes";
import { Awards } from "../../Posts/Awards";

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ShareButton = styled.button`
  border: 1px solid #edeff1;
  border-radius: 15px;
  background-color: transparent;
  font-size: 15px;
  margin-left: auto;
`;

const PostFooter = (props) => {
  return (
    <Footer>
      <Votes voteCount={7} />
      <Awards awardsCount={3} />
      <Comments commentsCount={8} />
      <ShareButton>
        <ShareSVG color="grey" />
      </ShareButton>
    </Footer>
  );
};

export default PostFooter;
