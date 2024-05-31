// 테마 정보를 담은 배열
// 서버에서 데이터를 받아오는 것으로 변경하는 코드
// api 주소는 GET /themes

export const themes = [
    {
        id: "1",
        title: "어비스",
        imageUrl: "/images/어비스.jpg",
        difficulty: "VERY HARD",
        genre: "공포",
        content: "알 수 없는 심연 속으로",
        price:"25000"
    },
    {
        id: "2",
        title: "오버킬",
        imageUrl: "/images/오버킬.jpg",
        difficulty: "HARD",
        genre: "잠입",
        content: "여기는 N.A.C. 연구소 외곽에 도착했다.\n잠입 및 제거임무를 시작한다.",
        price:"22000"
    },
    {
        id: "3",
        title: "리플레이",
        imageUrl: "/images/리플레이.jpg",
        difficulty: "EASY",
        genre: "스릴러",
        content: "어느 날 갑자기 친구가 나에게 카세트 테이프를 남겼다...",
        price:"17000"
    },
    {
        id: "4",
        title: "드림레일",
        imageUrl: "/images/드림레일.jpg",
        difficulty: "EASY",
        genre: "감성",
        content: "따뜻한 바람에 휩쓸려서 도착한 잡화점.\n많은 물건들 속 '드림레일'의 이야기가 보여진다.",
        price:"25000"
    },
    {
        id: "5",
        title: "베스트셀러",
        imageUrl: "/images/베스트셀러.jpg",
        difficulty: "NORMAL",
        genre: "미스터리",
        content:"이 이야기의 결말은 말이지...",
        price:"25000"
    }
];
