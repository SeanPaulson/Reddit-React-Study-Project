import { Dialog } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Inputs, LoginModalProps } from './LoginModal.model'
import styled from 'styled-components'
import Image from 'next/image'
import loginBanner from '../../images/loginBanner.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'

const LoginModal: React.FC<LoginModalProps> = ({ isPopup, showLoginModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <Dialog
      open={isPopup}
      disableEscapeKeyDown={true}
      sx={{
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
          maxWidth: 'fit-content',
        },
      }}
    >
      <Main>
        <Image src={loginBanner} height="650" width="130" />
        <ContentFlexWrap>
          <StyledBtn onClick={showLoginModal}>
            <CloseIcon color="disabled" />
          </StyledBtn>
          <div>
            <h1>Log in</h1>
            <p>
              By continuing, you agree to our{' '}
              <a href="https://www.redditinc.com/policies/user-agreement">
                User Agreement{' '}
              </a>{' '}
              and{' '}
              <a href="https://www.redditinc.com/policies/privacy-policy">
                Privacy Policy{' '}
              </a>
              .
            </p>
          </div>
          <form
            style={{ width: 280, backgroundColor: 'lightgray' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <button onClick={() => signIn('google')}>Google Log in</button>
            </div>
            <div>
              <button>Apple Log in</button>
            </div>
          </form>
        </ContentFlexWrap>
      </Main>
    </Dialog>
  )
}

export default LoginModal

const Main = styled.main`
  display: flex;
  height: 650px;
  width: 850px;
`
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
`

const StyledBtn = styled.button`
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  width: 100%;
  text-align: end;
`
