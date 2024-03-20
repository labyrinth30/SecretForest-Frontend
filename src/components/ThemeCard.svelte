<script>
  import ThemeModal from "./ThemeModal.svelte";
  export let title;
  export let imageUrl;
  export let difficulty;
  export let genre;
  export let content;
  
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="theme-card">
  <div class="image-container" on:click={openModal}>
    <img src={imageUrl} alt={title} />
  </div>
  <div class="text-container">
    <p class="title">{title}</p>
    <div class="tags">
      <span class="difficulty">{difficulty}</span>
      <span class="genre">{genre}</span>
    </div>
  </div>
</div>

{#if showModal}
  <ThemeModal title={title} content={content} on:close={closeModal} />
{/if}


<style>
  .theme-card {
    font-family: 'Arial', sans-serif;
    max-width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 20px;
  }

  .theme-card .image-container img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .theme-card .text-container {
    padding: 15px;
    background-color: #fff;
  }

  .theme-card .title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px 0;
  }

  .theme-card .tags {
    display: flex;
    gap: 10px;
  }

  .theme-card .difficulty, .theme-card .genre {
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
  }

  .theme-card .difficulty {
    background-color: #007bff;
  }

  .theme-card .genre {
    background-color: #28a745;
  }
</style>
