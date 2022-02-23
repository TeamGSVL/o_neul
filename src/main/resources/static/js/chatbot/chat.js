{
    // chatbot on / off 기능
    const chatBtnElem = document.querySelector('#chat_btn');
    const chatMainElem = document.querySelector('#chat_main');
    const chatMainCloseElem = document.querySelector('#chat_main_close');
    const chatSentence = document.querySelector('#sentence');

    const firstSentence = chatSentence.innerHTML;

    chatBtnElem.addEventListener('click', e => {
        chatBtnElem.style.display = "none";
        chatMainElem.style.display = "block";
    });

    chatMainCloseElem.addEventListener('click', e => {
        chatSentence.innerHTML = firstSentence;
        makeEvent();
        chatBtnElem.style.display = "block";
        chatMainElem.style.display = "none";
    });



    function makeEvent() {
        // 맛집 질문지.
        const foodJmtElem = document.querySelector('#food_jmt');
        foodJmtElem.addEventListener('click', e => {
            let foodJmtMainElem = document.querySelector('#food_jmt_main');
            foodJmtMainElem.style.border = "solid 1px #000";
            foodJmtMainElem.innerHTML = "맛집중에는 오늘의 맛집과 방송 맛집이 있습니다. 둘중 하나를 선택해주세요.";
            let foodJmt = document.createElement('div');
            let tvJmt = document.createElement('div');
            foodJmt.innerHTML = "오늘의 맛집";
            tvJmt.innerHTML = "방송 맛집";
            foodJmtMainElem.append(foodJmt);
            foodJmtMainElem.append(tvJmt);

            // 오늘의 맛집 클릭시 오늘의 맛집 페이지 이동.
            foodJmt.addEventListener('click', e => {
                location.href = "/jmt";
            });

            // 방송 맛집 클릭시 질문지 생성.
            tvJmt.addEventListener('click', e => {
                let tvMainElem = document.querySelector('#tv_main');
                tvMainElem.innerHTML = "요즘 영자로드 모르는 사람 있어?? 하지만 다양한 프로그램이 있으니 원하는 프로그램을 선택해주세요.";
                let deliciousMens = document.createElement('div');
                let threeKings = document.createElement('div');
                let liveInformation = document.createElement('div');
                let wednesdayParty = document.createElement('div');
                let youngJaLoad = document.createElement('div');
                let tastyRoad = document.createElement('div');

                deliciousMens.innerHTML = "맛있는 녀석들";
                threeKings.innerHTML = "백종원의 3대천왕";
                liveInformation.innerHTML = "생생정보통";
                wednesdayParty.innerHTML = "수요미식회";
                youngJaLoad.innerHTML = "영자로드";
                tastyRoad.innerHTML = "테이스티로드";

                tvMainElem.append(deliciousMens);
                tvMainElem.append(threeKings);
                tvMainElem.append(liveInformation);
                tvMainElem.append(wednesdayParty);
                tvMainElem.append(youngJaLoad);
                tvMainElem.append(tastyRoad);

                // 맛있는 녀석들 이동
                deliciousMens.addEventListener('click', e => {
                    location.href = "/tv/1";
                });

                // 백종원의 3대천왕 이동
                threeKings.addEventListener('click', e => {
                    location.href = "/tv/2";
                });

                // 생생정보통 이동
                liveInformation.addEventListener('click', e => {
                    location.href = "/tv/3";
                });

                // 수요미식회 이동
                wednesdayParty.addEventListener('click', e => {
                    location.href = "/tv/4";
                });

                // 영자로드 이동
                youngJaLoad.addEventListener('click', e => {
                    location.href = "/tv/5";
                });

                // 테이스티로드 이동
                tastyRoad.addEventListener('click', e => {
                    location.href = "/tv/6";
                });
            });
        });


        // 메뉴 질문지.
        let chatMenuElem = document.querySelector('#chat_menu');
        chatMenuElem.addEventListener('click', e => {
            let chatMenuMainElem = document.querySelector('#chat_menu_main');
            chatMenuMainElem.innerHTML = "메뉴 고르는게 이 세상에서 제일 힘든것같아요 ... 저도 항상 고민중입니다." +
                "당신의 선택을 쉽게 도아드릴게요. 아래중 하나를 선택해주세요.";

            let todayFood = document.createElement('div');
            let seasonMenu = document.createElement('div');
            let alcoholMenu = document.createElement('div');
            todayFood.innerHTML = "오늘의 음식";
            seasonMenu.innerHTML = "계절 메뉴";
            alcoholMenu.innerHTML = "술 페어링";

            chatMenuMainElem.append(todayFood);
            chatMenuMainElem.append(seasonMenu);
            chatMenuMainElem.append(alcoholMenu);

            todayFood.addEventListener('click', e => {
                location.href = "/food";
            });

            seasonMenu.addEventListener('click', e => {
                let chatSeasonElem = document.querySelector('#chat_season');
                let spring = document.createElement('div');
                let summer = document.createElement('div');
                let fail = document.createElement('div');
                let winter = document.createElement('div');

                chatSeasonElem.innerHTML = "저는 사계절중에 봄 / 가을을 좋아해요. 선선한 바람을 느끼며 자유롭게 날아가고싶어요~" +
                    "당신은 어떤 계절을 좋아하나요?";
                spring.innerHTML = "봄";
                summer.innerHTML = "여름";
                fail.innerHTML = "가을";
                winter.innerHTML = "겨울";

                chatSeasonElem.append(spring);
                chatSeasonElem.append(summer);
                chatSeasonElem.append(fail);
                chatSeasonElem.append(winter);

                chatSeasonElem.addEventListener('click', e => {
                    location.href = "/season";
                });

                alcoholMenu.addEventListener('click', e => {
                    let chatAlcoholElem = document.querySelector('#chat_alcohol');
                    let soju = document.createElement('div');
                    let beer = document.createElement('div');
                    let makgeolli = document.createElement('div');
                    let westernAlcohol = document.createElement('div');

                    chatAlcoholElem.innerHTML = "술은 역시 소맥이죠!!! 그렇지만 당신의 취향을 존중합니다.";
                    soju.innerHTML = "소주";
                    beer.innerHTML = "맥주";
                    makgeolli.innerHTML = "막걸리";
                    westernAlcohol.innerHTML = "양주";

                    chatAlcoholElem.append(soju);
                    chatAlcoholElem.append(beer);
                    chatAlcoholElem.append(makgeolli);
                    chatAlcoholElem.append(westernAlcohol);

                    chatAlcoholElem.addEventListener('click', e => {
                        location.href = "/alc";
                    });
                });
            });
        });


        // 고객 질문.
        let chatCustomerElem = document.querySelector('#chat_customer');
        chatCustomerElem.addEventListener('click', e => {
            let customerMainElem = document.querySelector('#customer_main');
            let tel = document.createElement('div');
            let notice = document.createElement('div');

            customerMainElem.innerHTML = "저를 찾으셨나요? 무엇이 궁금하신가요?";

            tel.innerHTML = "고객센터전화번호";
            notice.innerHTML = "공지사항";

            customerMainElem.append(tel);
            customerMainElem.append(notice);

            tel.addEventListener('click', e => {
                let chatTelELem = document.querySelector('#chat_tel');
                let telNumber = document.createElement('div');
                chatTelELem.innerHTML = "문의 사항이 있으시면 아래번호로 전화주세요.";
                telNumber.innerHTML = "010-5185-8980 손동윤";

                chatTelELem.append(telNumber);
            });

            notice.addEventListener('click', e => {
                location.href = "/notice";
            });
        });
    }
    makeEvent();
}
