<script>
  export let reservationInfo;
  import { router } from "tinro";
  function goHome() {
    router.goto("/");
  }
</script>

<div class="container">
  <h1>예약이 완료되었습니다</h1>
  <form>
    <div class="form-item">
      <label>테마명:</label>
      <p>{reservationInfo.themeTitle}</p>
    </div>
    <div class="form-item">
      <label>예약 날짜:</label>
      <p>{reservationInfo.reservationDate}</p>
    </div>
    <div class="form-item">
      <label>결제 금액:</label>
      <p>{reservationInfo.themePrice}</p>
    </div>
    <button on:click={goHome}>홈으로</button>
  </form>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: #333;
    margin-left: 10px;
  }

  button {
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
