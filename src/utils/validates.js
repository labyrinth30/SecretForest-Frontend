import * as yup from 'yup'

export const extractErrors = error => { // 추가
  return error.inner.reduce((acc, error) => {
    return {...acc, [error.path]: error.message}
  }, {})
}

export const loginValidate = yup.object().shape({
  formEmail: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 잘못되었습니다.').label('이메일'),
  formPassword: yup.string().required('비밀번호를 입력해주세요.').label('패스워드'),
})

export const registerValidate = yup.object().shape({
  formEmail: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 잘못되었습니다. '),
  formPassword: yup.string().required('비밀번호를 입력해주세요.'),
  formPasswordConfirm: yup.string().required('비밀번호 확인을 입력해주세요.').oneOf([yup.ref('formPassword'), null ],'비밀번호와 비밀번호 확인이 일치하지 않습니다.').label('패스워드 확인'),
  formName: yup.string().required('이름을 입력해주세요.'),
})