<script>
    import ReservationTimeTableButton from "./ReservationTimeTableButton.svelte";
    export let theme;
    let timeSlots = [
    {
        "time": "11:00",
        "isReserved": false
    },
    {
        "time": "12:00",
        "isReserved": true
    },
    {
        "time": "13:00",
        "isReserved": false
    },
    {
        "time": "14:00",
        "isReserved": false
    },
    {
        "time": "15:00",
        "isReserved": true
    },
    {
        "time": "16:00",
        "isReserved": false
    },
    {
        "time": "17:00",
        "isReserved": false
    },
    {
        "time": "18:00",
        "isReserved": true
    },
    {
        "time": "19:00",
        "isReserved": false
    },
    {
        "time": "20:00",
        "isReserved": true
    },
    {
        "time": "21:00",
        "isReserved": false
    },
];

</script>

<div class="card">
    <div class="container">
        <div>
            <h3><b>{theme.title}</b></h3>
            <div class="tags">
                <span class="difficulty">{theme.difficulty}</span>
                <span class="genre">{theme.genre}</span>
            </div>
            <br />
            <div class="card-content">
            <div class="card-image-container">
                <img class="card-image" src={theme.imageUrl} alt={theme.title} />
            </div>
            <div class="time-table-grid-container">
                <div class="time-table-grid">
                    {#each timeSlots as slot (slot.time)}
                        <ReservationTimeTableButton time={slot.time} isReserved={slot.isReserved} themeId="{theme.id}"/>
                    {/each}
                </div>
                
            </div>
            </div>
        </div>  
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: row; 
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 1000px;
        height: 1000px;
        border-radius: 5px;
    }
    .card-content{
        display:flex;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        display: flex;
        flex-direction: column;
        padding: 2px 16px;
    }
    .card-image-container {
        flex-grow: 1;
    }

    .card-image {
        max-width: 300px;
        max-height: 600px; 
        object-fit: cover; 
        margin-right: 10px;
    }

    .difficulty {
        background-color: #007bff;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 15px;
        color: #fff;
    }

    .genre {
        background-color: #28a745;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 15px;
        color: #fff;
    }

    .time-table-grid-container {
        flex-grow: 1;
    }

    .time-table-grid {
        display: grid; 
        grid-template-columns: repeat(4,1fr);
        grid-gap: 10px; 
        margin-top: auto; 
    }
</style>
