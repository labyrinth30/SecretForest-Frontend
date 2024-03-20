<script>
  import { loginValidate, extractErrors } from '../utils/validates';
  import { auth } from '../stores';

  let errors = {}

	let values = {
    formEmail: '',
    formPassword: '',
  }

	const resetValues = () => {
    values.formEmail = ''
    values.formPassword = ''
  }

	const onLogin = async () => {
    try {
      await auth.login(values.formEmail, values.formPassword);
      await loginValidate.validate(values, {abortEarly: false});
      resetValues();
    }
    catch(error) {
      alert('로그인에 실패하였습니다. 다시 시도해주세요');
      errors = extractErrors(error);
      if(errors.formEmail) alert(errors.formEmail);
      if(errors.formPassword) alert(errors.formPassword);
    }
  }

</script>

<div class="auth-content-box " >        
  <div class="auth-box-main">
    <div class="auth-input-box">
      <input type="email" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder=" " bind:value={values.formEmail} class:wrong={errors.formEmail} />
      <label for="floating_email" class="auth-input-label">이메일</label>
    </div>      
    <div class="auth-input-box">
      <input type="password" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder=" " bind:value={values.formPassword} class:wrong={errors.formPassword} />
      <label for="floating_email" class="auth-input-label">비밀번호</label>
    </div>    
  </div>
  <div class="content-box-bottom">
    <div class="button-box">
      <button class="button-base" on:click={onLogin}>로그인</button>
    </div>
  </div>
</div>
<style>
	.wrong {
	  border-bottom: 3px solid red;
	}
</style>