<script>
  import { date } from "../stores";
  import { themes } from "../model/themes";
  import { onMount } from "svelte";
  import { router } from "tinro";

  export let handleSubmit;
  export let theme;
  export let timeNum;

  const MAX_PERSON = 5;

  let personCount = 2;

  function findThemeTitleById(id) {
    const theme = themes.find((theme) => theme.id === id);
    return theme ? theme.title : "Unknown";
  }

  function findThemePriceById(id) {
    const theme = themes.find((theme) => theme.id === id);
    return theme ? theme.price : "Unknown";
  }

  let price;
  $: currentPrice = price * personCount;

  onMount(() => {
    const themeTitle = findThemeTitleById(theme);
    if (themeTitle === "Unknown") {
      alert("잘못된 접근입니다");
      router.goto("/reservation");
    }
    price = findThemePriceById(theme);
  });
</script>

<form on:submit={handleSubmit}>
  <div class="form-item">
    <label>테마명:</label>
    <p>{findThemeTitleById(theme)}</p>
  </div>
  <div class="form-item">
    <label>예약일:</label>
    <p>{$date}</p>
  </div>
  <div class="form-item">
    <label>예약시간:</label>
    <p>{timeNum}</p>
  </div>
  <div class="form-item">
    <label for="personCount">인원:</label>
    <select bind:value={personCount} id="personCount">
      {#each Array(MAX_PERSON) as _, i (i)}
        <option value={i + 1}>{i + 1}명</option>
      {/each}
    </select>
  </div>
  <div class="form-item">
    <label>테마가격:</label>
    <p>{currentPrice.toLocaleString("ko-KR")}</p>
  </div>
  <div class="form-item">
    <label>할인정보:</label>
    <p>없음</p>
  </div>
  <div class="form-item">
    <label>결제방식:</label>
    <p>무통장 입금</p>
  </div>

  <button type="submit">예약하기</button>
</form>

<style>
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
  .form-item select{
    width: 100px;
  }

  p {
    color: #333;
    margin-left: 10px;
  }

  select {
    width: 60px;
    height: 30px;
    border-radius: 5px;
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
