<script>
  import { router } from "tinro";
  import { createEventDispatcher } from 'svelte';
  export let title;
  export let content;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close'); // 부모 컴포넌트에게 'close' 이벤트 전달
  }
  function goReservation() {
    router.goto('/reservation');
  }
</script>

<div class="modal-background" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <button class="close-button" on:click={closeModal}>X</button>
    <h2>{title}</h2>
    <p>{content}</p>
    <button class="reservation-button" on:click={goReservation}>예약하기</button>
  </div>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
  }

  .reservation-button {
    width: 100%; /* 버튼을 modal-content의 너비에 맞게 조절 */
    padding: 10px 0; /* 상하 패딩으로 버튼 높이 조절 */
    background-color: #007bff; /* 파란색 배경 */
    color: white; /* 글자색은 흰색으로 */
    border: none; /* 테두리 없애기 */
    border-radius: 5px; /* 버튼 모서리를 약간 둥글게 */
    cursor: pointer; /* 마우스 오버 시 커서 변경 */
    font-size: 16px; /* 글자 크기 조절 */
    margin-top: 20px; /* 내용과의 간격 */
  }

  .reservation-button:hover {
    background-color: #0056b3; /* 버튼 호버 시 색상 변경 */
  }
</style>
