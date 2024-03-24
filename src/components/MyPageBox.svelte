<script>

</script>
<div class="box reservation">
    <div class="info-section">
        <img src="/images/어비스.jpg" alt="어비스" />
        <div>
            <h4>어비스 / 12:00</h4>
            <p class="detail">2023-03-23</p>
            <p>56,000원</p>
        </div>
    </div>
    <span class="status">예약완료</span>
</div>
<br />

<style>
    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        width: 700px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    .reservation {
        justify-content: space-between;
    }

    .info-section {
        display: flex;
        align-items: center;
    }

    .box img {
        width: 120px;
        height: 120px;
        margin-right: 10px;
    }

    h4 {
        color: #333;
        font-weight: bold;
    }

    p {
        color: #333;
    }
    .detail{
        color: grey;
    }

    .status {
        background-color: rgb(13 70 133);
        color: #ffffff;
        padding: 5px;
        border-radius: 5px;
    }
</style>
