<script>
  import { router } from "tinro";
    let currId = 0;
    const images = [
  '/images/어비스.jpg',
  '/images/오버킬.jpg',
  '/images/리플레이.jpg',
  '/images/드림레일.jpg',
  '/images/베스트셀러.jpg',
  ];
    const imgLen = images.length;
    let positionLeft = 0;
  
    const moveSlider = () => {
      positionLeft = currId * 100;
    };
  
    const next = () => {
      currId = currId === imgLen - 1 ? 0 : currId + 1;
      moveSlider();
    };
      
    const prev = () => {
      currId = currId === 0 ? imgLen - 1 : currId - 1;
      moveSlider();
    };
  
    const getIndex = (index) => {
      currId = index;
      moveSlider();
    };
  
      let interval = setInterval(next, 2000);
      const autoPlay = () => {
          interval = setInterval(next, 2000)
      }
  
      const stopPlay = () => {
          clearInterval(interval)
      }
      const goTheme = (event) => {
      event.stopPropagation(); // 이벤트 전파 중지
      router.goto('/theme');
  };

  const handleButtonClick = (event, action) => {
      event.stopPropagation(); // 버튼 클릭 이벤트에서도 이벤트 전파 중지
      action();
  };

      
  </script>
  
  <main>

    <div on:mouseover={stopPlay} on:mouseleave={autoPlay} class="container" on:click={goTheme}>
      <div class="slider" style="left: -{positionLeft}%;" >
        {#each images as img}
          <img src={img} alt=""/>
        {/each}
      </div>
      <div class="arrow">
        <button on:click={(event) => handleButtonClick(event, prev)} class="prev">Prev</button>
        <button on:click={(event) => handleButtonClick(event, next)} class="next">Next</button>
      </div>
      <div class="papagination">
        {#each images as _, i}
          <button
            class={currId === i ? 'active' : ''}
            on:click={(event) => handleButtonClick(event, () => getIndex(i))}
          />
        {/each}
      </div>
    </div>

  </main>
  
  <style>
    main {
      padding: 15px;
      text-align: center;
    }
    .container {
      position: relative;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
      overflow: hidden;
    }
    .slider {
      display: flex;
      position: relative;
      transition: left 0.5s;
    }
    .slider img {
      width: 100%;
      height: auto;
      object-fit: cover;
      flex-shrink: 0;
    }
    .arrow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
    .arrow button {
      margin-bottom: 0;
      padding: 12px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  
    .papagination {
      position: absolute;
      bottom: 0;
      padding-bottom: 8px;
      width: 100%;
    }
  
    .papagination button {
      margin: 0 4px;
      width: 14px;
      height: 14px;
      border: 0;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      cursor: pointer;
    }
    .papagination .active {
      background-color: rgba(255, 0, 0, 0.8);
    }
  </style>