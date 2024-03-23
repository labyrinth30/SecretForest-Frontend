<script>
  import { date } from "../stores";
  import { themes } from "../model/themes";
  export let handleSubmit;
  export let theme;
  export let timeNum;

  const MAX_PERSON = 5;

  let personCount = 2;

  function findThemeTitleById(id){
    const theme = themes.find(theme => theme.id === id);
    return theme ? theme.title : 'Unknown';
  }
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin: 0 auto;
}

.form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

select {
    width: 60px;
}
</style>

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