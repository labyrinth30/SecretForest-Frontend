<script>
  import { date } from "../stores";
  import { themes } from "../model/themes";
  import { onMount } from 'svelte';
  import { router } from 'tinro';
  onMount(() => {
    const themeTitle = findThemeTitleById(theme);
    if (themeTitle === 'Unknown') {
      alert('잘못된 접근입니다');
      router.goto('/reservation');
    }
  });

  export let handleSubmit;
  export let theme;
  export let timeNum;

  const MAX_PERSON = 5;

  let personCount = 2;

  function findThemeTitleById(id) {
    const theme = themes.find((theme) => theme.id === id);
    return theme ? theme.title : "Unknown";
  }
</script>

<form on:submit={handleSubmit}>
  <h2>테마명: {findThemeTitleById(theme)}</h2>
  <h2>예약일: {$date}</h2>
  <h2>
    예약시간:
    {timeNum}
  </h2>

  <div class="form-item">
    <label for="personCount">인원:</label>
    <select bind:value={personCount} id="personCount">
      {#each Array(MAX_PERSON) as _, i (i)}
        <option value={i + 1}>{i + 1}</option>
      {/each}
    </select>명
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

  h2 {
    color: #333;
  }

  .form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
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