import { Dialog } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CircleIcon from '@mui/icons-material/Circle'
import { Inputs, LoginModalProps, IFormProps } from './LoginModal.model'
import styled from 'styled-components'
import Image from 'next/image'
import loginBanner from '../../images/loginBanner.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import { useEffect } from 'react'

const LoginModal: React.FC<LoginModalProps> = ({ isPopup, showLoginModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  })

  const [input, setInput] = useState({
    userName: '',
    password: '',
  })

  useEffect(() => {
    if (input.password) {
      setIsPasswordHover(false)
    }
    if (input.userName) {
      setIsUserCircle(false)
    } else {
      setIsPasswordHover(true)
      setIsUserCircle(true)
    }
  }, [input])

  const [isUserCircle, setIsUserCircle] = useState(true)
  const [isPasswordHover, setIsPasswordHover] = useState(true)

  const handlePasswordHover = () => {
    if (!input.password) {
      setIsPasswordHover(!isPasswordHover)
    }
  }

  const hideCircleIcon = () => {
    if (!input.userName) {
      setIsUserCircle(!isUserCircle)
    }
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement

    setInput((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const error = await signIn('credentials', {
      name: input.userName,
      password: input.password,
      redirect: false,
      callbackUrl: '/',
    }).then((res) => {
      if (res?.error) {
        console.log(res.error)
      }
      return res
    })

    setInput({
      userName: '',
      password: '',
    })
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
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="Sso_Container">
              <GoogleBtn
                style={{ width: '100%' }}
                onClick={() => signIn('google')}
              >
                Continue with Google
              </GoogleBtn>
            </div>
            <div>
              <AppleBtn style={{ width: '100%' }}>
                Continue with Reddit
              </AppleBtn>
            </div>
            <SsoDivider>
              <span className="Sso_dividerLine"></span>
              <span className="Sso_dividerText">OR</span>
              <span className="Sso_dividerLine"></span>
            </SsoDivider>
            <div className="formWrapper">
              <FieldSet
                onMouseEnter={hideCircleIcon}
                onMouseLeave={hideCircleIcon}
              >
                <Input
                  {...register('userName', {
                    required: 'username is required',
                  })}
                  id="username"
                  type="phone"
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="off"
                  className="box1"
                ></Input>
                <AnimateLabel className="box2">
                  username
                  {isUserCircle && (
                    <CircleIcon
                      sx={{
                        color: '#2e75e0',
                        fontSize: '.4rem',
                        position: 'relative',
                        cursor: 'text',
                        marginLeft: '.4rem',
                      }}
                    />
                  )}
                </AnimateLabel>
              </FieldSet>
              <FieldSet
                onMouseEnter={handlePasswordHover}
                onMouseLeave={handlePasswordHover}
              >
                <Input
                  {...register('password', { required: true, minLength: 7 })}
                  id="password"
                  type="password"
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="off"
                ></Input>
                <AnimateLabel
                  password={input.password}
                  username={input.userName}
                >
                  password
                  {isPasswordHover && !input.password ? (
                    <CircleIcon
                      sx={{
                        color: '#2e75e0',
                        fontSize: '.4rem',
                        position: 'relative',
                        cursor: 'text',
                        marginLeft: '.4rem',
                      }}
                    />
                  ) : null}
                </AnimateLabel>
              </FieldSet>
              <LoginBtn onClick={handleSubmit(onSubmit)}>Log In</LoginBtn>
              <p>
                Forgot your <a href="">username</a> or <a href="">password</a>?
              </p>
              <p>
                New to Reddit?{' '}
                <a href="">
                  <b>SIGN UP</b>
                </a>
              </p>
            </div>
          </StyledForm>
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
  padding: 24px;
  width: 100%;
  & a {
    text-decoration: none;
    font-size: 12px;
    color: #0076d0;
  }

  & a:hover {
    color: #53a4e1;
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
const StyledForm = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  /* row-gap: 2rem; */
  margin-top: 4rem;
  & .formWrapper {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    height: 100%;
  }

  & .Sso_Container {
    margin: 0.5rem 0;
  }
`

const FieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  cursor: input;
  position: relative;
`

const AnimateLabel = styled.label<IFormProps>`
  cursor: input;
  color: #a5a4a4;
  top: 1rem;
  left: 0.5rem;
  font-weight: bold;
  font-size: 0.7rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  position: absolute;
  cursor: text;
  ${FieldSet}:hover & {
    top: 0.3rem;
    left: 0.5rem;
    font-size: 0.6rem;
  }
`
const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: #fcfcfb;
  height: 48px;
  padding: 22px 12px 10px;
  outline: none;
  &:focus ~ ${AnimateLabel} {
    top: 0.3rem;
    left: 0.5rem;
    font-size: 0.6rem;
  }
`

const SsoDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0;
  justify-content: center;

  & .Sso_dividerText {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #878a8c;
    text-transform: uppercase;
    padding: 0 0.5rem;
  }

  & .Sso_dividerLine {
    border-top: 1px solid #edeff1;
    width: 40%;
  }
`

const Button = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  text-transform: unset;
  font-size: 14px;
  font-weight: 700px;
  letter-spacing: unset;
  line-height: 18px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fffbfb;
  }
`

const GoogleBtn = styled(Button)`
  background-color: white;
  color: #3b3b3b;
  font-size: 12px;
  font-weight: 400px;
  border: 1px solid lightgray;
`
const AppleBtn = styled(Button)`
  background-color: white;
  color: #3b3b3b;
  font-size: 12px;
  font-weight: 400px;
  border: 1px solid lightgray;
  text-align: center;
`
const LoginBtn = styled(Button)`
  background-color: #0079d3;
  color: white;
  text-align: center;
  &:hover {
    background-color: #0383e5;
  }
`
