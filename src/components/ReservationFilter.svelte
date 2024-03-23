<script>
    import { themes } from "../model/themes";
    import { date, theme } from "../stores/index.js";

    let minDate = new Date();
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
</script>

<div class="filter-container">
    <span>예약 날짜</span>
    <div class="date-input">
        <div class="date-input">
            <input
                type="date"
                bind:value={$date}
                min={minDate.toISOString().substring(0, 10)}
                max={maxDate.toISOString().substring(0, 10)}
                on:keydown|preventDefault={e => {}} 
            />
        </div>
    </div>
    <label
        >테마 선택
        <select bind:value={$theme}>
            <option value="0">전체 테마</option>
            {#each themes as theme (theme.title)}
                <option value={theme.id}>{theme.title}</option>
            {/each}
        </select>
    </label>
</div>

<style>
    .filter-container {
        display: flex;
        align-items: center;
        margin-left: 2%;
    }
    .filter-container > * {
        margin-right: 10px;
    }
    select {
        width: 100px;
        height: 25px;
        border: 1px solid #ccc;
    }
</style>
