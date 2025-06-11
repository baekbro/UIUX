$(document).ready(function () {
    const singerInfo = {
        "공민지": { name: "공민지", bio: "2NE1 출신, 솔로 활동 중" },
        "윤딴딴": { name: "윤딴딴", bio: "싱어송라이터, '니가 보고 싶은 밤' 등" },
        "팔로알토": { name: "팔로알토", bio: "힙합 뮤지션, Hi-Lite Records 설립자" },
        "이재환": { name: "이재환", bio: "K-POP 교수, 전 JYP 트레이너" }
    };

    $(".circle").hover(
        function () {
            const $circle = $(this);
            const $img = $circle.find("img");
            const id = $img.attr("id");
            const info = singerInfo[id];

            $img.css("opacity", "0.5");

            if ($circle.find(".info-text").length === 0) {
                $circle.append(`
                    <div class="info-text">
                        이름 : ${info.name}<br>
                        이력 : ${info.bio}
                    </div>
                `);
            }
        },
        function () {
            const $circle = $(this);
            const $img = $circle.find("img");

            $img.css("opacity", "1");

            $circle.find(".info-text").remove();
        }
    );
});
