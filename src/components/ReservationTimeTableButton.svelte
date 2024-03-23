<script>
    export let time;
    export let isReserved;
</script>

<button 
    class="time-table-button" 
    style="background-color: {isReserved ? 'grey' : 'rgb(240, 175, 185)'};" 
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
    .time-table-button:disabled {
        cursor: default;
    }
</style>
