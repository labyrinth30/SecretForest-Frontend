<script>
	import { registerValidate, extractErrors } from '../utils/validates' 
  import { auth } from '../stores';

  let errors = {}

	let values = {
    formEmail: '',
    formPassword: '',
    formPasswordConfirm: '',
    formName: '',
  };

  const onRegister = async () => {
    try {
      await registerValidate.validate(values, {abortEarly: false}); 
      await auth.register(values.formEmail, values.formPassword, values.formName);
    } 
    catch(error) {
      errors = extractErrors(error);
      if(errors.formEmail) alert(errors.formEmail);
      if(errors.formPassword) alert(errors.formPassword);
      if(errors.formPasswordConfirm) alert(errors.formPasswordConfirm);
      if(errors.formName) alert(errors.formName);
    }
  }
</script>

<div class="auth-content-box" >        
  <div class="auth-box-main">
    <div class="auth-input-box">
      <input type="email" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder="이메일" bind:value={values.formEmail} class:wrong={errors.formEmail} />
    </div>      
    <div class="auth-input-box">
      <input type="password" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder="비밀번호" bind:value={values.formPassword} class:wrong={errors.formPassword} />

    </div>      
    <div class="auth-input-box">
      <input type="password" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder="비밀번호 확인" bind:value={values.formPasswordConfirm} class:wrong={errors.formPasswordConfirm} />
    </div>
    <div class="auth-input-box">
      <input type="text" name="floating_email" id="floating_email" class="auth-input-text peer" placeholder="이름" bind:value={values.formName} class:wrong={errors.formName} />
    </div>           
  </div>
  <div class="content-box-bottom">
    <div class="button-box">
      <button class="button-base" on:click={onRegister}>회원가입</button>
    </div>
  </div>
</div>

<style>
	.wrong {
	  border-bottom: 3px solid red;
	}
</style>