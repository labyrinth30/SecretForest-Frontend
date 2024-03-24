<script>
    let showModal = false;
    let contact = "01050479453";
    let profileImage = null;
    let userName = "이윤하";
    let tempName = "";

    function handleShowModal() {
        tempName = userName;
        showModal = true;
    }

    function handleSave() {
        userName = tempName;
        showModal = false;
    }
</script>

<div class="box">
    <img src="/images/기본프로필.png" alt="프로필" />

    <p>{userName}님 안녕하세요</p>

    <button on:click={handleShowModal}>수정하기</button>

    {#if showModal}
        <div class="modal">
            <div class="modal-content">
                <h2>개인 정보 수정하기</h2>

                <form on:submit|preventDefault={handleSave}>
                    <label for="email">이메일</label>
                    <input
                        id="email"
                        type="email"
                        value="user1@user1.com"
                        readonly
                    />

                    <label for="name">이름</label>
                    <input id="name" type="text" bind:value={tempName} />

                    <label for="contact">연락처</label>
                    <input id="contact" type="tel" bind:value={contact} />

                    <label for="profileImage">프로필 사진</label>
                    <input
                        id="profileImage"
                        type="file"
                        bind:files={profileImage}
                    />

                    <button class="cancel-btn" type="button" on:click={() => (showModal = false)}
                        >취소하기</button
                    >
                    <button type="submit">저장하기</button>
                </form>
            </div>
        </div>
    {/if}
</div>

<style>
    #email {
        background-color: #d5dee8;
    }
    .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 700px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #f5f5f5;
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
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    label {
        font-weight: bold;
    }
    input:not([type="submit"]) {
        padding: 5px;
    }
    button[type="submit"] {
        margin-top: 10px;
    } /* Profile Box */
    .profile-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #f8f9fa;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .profile-box img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .profile-box h2 {
        color: #333;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .profile-box p {
        color: #555;
        font-size: 1.1rem;
    }
    .profile-box button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .profile-box button:hover {
        background-color: #0056b3;
    } /* Modal */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    label {
        font-weight: bold;
    }
    input[type="text"],
    input[type="tel"],
    input[type="email"],
    input[type="file"] {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }
    button[type="submit"] {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    button[type="submit"]:hover {
        background-color: #0056b3;
    }
    input[type="file"] {
        border: none;
        outline: none;
    }
    .cancel-btn {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .cancel-btn:hover{
        background-color: #0056b3;
    }
</style>
