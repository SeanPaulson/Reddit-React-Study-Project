import styled from "styled-components";

import { Comments } from "../../PostUtils/Comments";
import ShareSVG from "../../../images/ShareSVG";
import { Votes } from "../../PostUtils/Votes";
import { Awards } from "../../PostUtils/Awards";

const PostFooter : React.FC = () => {
  return (
    <Footer>
      <MobileVotes count={7} />
      <Awards count={3} />
      <MobileComments count={8} />
      <ShareButton>
        <ShareSVG color="grey" />
      </ShareButton>
    </Footer>
  );
};

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

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default PostFooter;
