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
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
  border-radius: 15px;
  background-color: transparent;
  font-size: 15px;
  margin-left: auto;
`;

const MobileVotes = styled(Votes)`
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
`

const MobileComments = styled(Comments)`
border: 1px solid ${({ theme }) => theme.app.colors.gray};
padding: 0em 0.5em;
font-weight: 500;
font-size: 14px;
`

const PostFooter = (props) => {
  return (
    <Footer>
      <MobileVotes voteCount={7} />
      <Awards awardsCount={3} />
      <MobileComments commentsCount={8} />
      <ShareButton>
        <ShareSVG color="grey" />
      </ShareButton>
    </Footer>
  );
};

export default PostFooter;
