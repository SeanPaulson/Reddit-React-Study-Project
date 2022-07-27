import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LoginModalProps } from "./LoginModal.model";
import styled from "styled-components";
import Image from "next/image";
import loginBanner from "../../images/loginBanner.png";
import { FormEvent } from "react";

const Main = styled.main`
  display: flex;
  height: 650px;
  width: 850px;
`;
const ContentFlexWrap = styled.div`
  margin: 2rem;
  flex-grow: 1;
  & a {
    text-decoration: none;
    font-size: 12px;
  }

  & h1 {
    font-size: 1rem;
  }

  & p {
    font-size: 12px;
  }
`;

const StyledBtn = styled.button`
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  width: 100%;
  text-align: end;
`;

// #0079d3
const LoginModal: React.FC<LoginModalProps> = ({ isPopup, showLoginModal }) => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    target.preventDefault();
  }


  return (
    <Dialog open={isPopup} disableEscapeKeyDown={true} sx={{
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
          maxWidth: 'fit-content'
        }
    }} >
      <Main>
        <Image src={loginBanner} height="650" width="130" />
        <ContentFlexWrap>
          <StyledBtn onClick={showLoginModal}>
            <CloseIcon color="disabled" />
          </StyledBtn>
          <div>
            <h1>Log in</h1>
            <p>
              By continuing, you agree to our{" "}
              <a href="https://www.redditinc.com/policies/user-agreement">
                User Agreement{" "}
              </a>{" "}
              and{" "}
              <a href="https://www.redditinc.com/policies/privacy-policy">
                Privacy Policy{" "}
              </a>
              .
            </p>
          </div>
          <form style={{width: 280, backgroundColor: 'lightgray'}} onSubmit={handleSubmit}>
            <div>
              <div>
              <button>Google Log in</button>
              </div>
              <div>
              <button>Apple Log in</button>
              </div>
            </div>
          </form>
        </ContentFlexWrap>
      </Main>
    </Dialog>
  );
};

export default LoginModal;
