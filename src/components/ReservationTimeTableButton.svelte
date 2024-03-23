<script>
    import { router } from "tinro";
    export let time; // 시간
    export let themeId; // 테마
    export let isReserved;
    function goInfo(){
        router.goto(`/reservation/${themeId}/${time}`);
    }
</script>

<button 
on:click={goInfo}
    class="time-table-button {isReserved ? 'reserved' : 'available'}" 
    disabled={isReserved}>
    
    {time}
    <br />
    
    {#if isReserved} 
        예약마감 
    {:else} 
        예약가능 
    {/if}
</button>

<style>
    .time-table-button {
        width: 145px;
        border:none;
        margin-top: auto;
        border-radius: 5px;
        padding: 10px;
        color: #fff;
        cursor: pointer;
        text-align: center;
    }
    .time-table-button.reserved {
        background-color: grey;
        cursor: default;
    }
    .time-table-button.available {
        background-color: rgb(240, 175, 185);
    }
</style>