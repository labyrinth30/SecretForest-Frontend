<script>
    export let activeId;
</script>

<div class="progress-bar">
    <div class="progress-bar__item" class:active={activeId === "1"}>
        <div class="progress-bar__item__text">01.날짜/룸 선택</div>
    </div>
    <div class="progress-bar__item" class:active={activeId === "2"}>
        <div class="progress-bar__item__text">02.예약정보 입력</div>
    </div>
    <div class="progress-bar__item" class:active={activeId === "3"}>
        <div class="progress-bar__item__text">03.예약완료</div>
    </div>
</div>

<style>
    .progress-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        color: white;
    }

    .progress-bar__item {
        width: 100%;
        text-align: center;
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background-color: rgb(73, 73, 73);

        /* 활성 상태일 때의 스타일 */
        &.active {
            background-color: rgb(240, 175, 185);
            border-color: #000;
        }
    }
</style>
