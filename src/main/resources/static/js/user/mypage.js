{
    const dataElem = document.querySelector('#globalConst');
    const iuser = dataElem.dataset.iuser;
    const uid = dataElem.dataset.u_id;
    const nickname = dataElem.dataset.u_nickname;
    const email = dataElem.dataset.u_email;
    const nm = dataElem.dataset.u_nm;
    const profileImg = dataElem.dataset.u_profileimg


    const profileFileElem = document.querySelector('#profile-file');
    if (profileFileElem) {
        profileFileElem.addEventListener('change', function () {
            const img = profileFileElem.files[0];
            if (img != null) {
                uploadProfileImg(img);
            }
        })
    }

    const profileViewElem = document.querySelector('#profile-view');
    if (profileViewElem) {
        const divElem = document.createElement('div');
        profileViewElem.appendChild(divElem);
        divElem.innerHTML = `<img src="C:/upload/images/user/${iuser}/${profileImg}" >`;
        profileViewElem.addEventListener('click', function () {
            if (profileFileElem) {
                profileFileElem.click();
            }
        })
    }
    //이미지 업로드
    const uploadProfileImg = (img) => {
        const fData = new FormData();
        fData.append('u_profileimg', img);

        fetch('/user/mypage', {
            'method': 'post',
            'body': fData
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setProfileImg(data);
            }).catch((e) => {
            console.log(e);
        });
    }
    const setProfileImg = (data) => {
        if(!data.result) { return; }
        const src = `/images/user/${iuser}/${data.result}`;

        const profileImgElem = profileViewElem.querySelector('img');
        profileImgElem.src = src;


        //헤더 이미지
        const headerProfileImgElem = document.querySelector('#header-profileimg');
        headerProfileImgElem.src = src;
    }





    const myProfileElem = document.querySelector('#myProfile');
    if(myProfileElem) {
        const divElem = document.createElement('div')
        myProfileElem.appendChild(divElem);
        divElem.innerHTML = `<div>아이디 : ${uid}</div>
                         <div>이름 : ${nm}</div>
                         <div>이메일 : ${email}</div>`;
    }
    const myNicknameElem = document.querySelector('#myNickname');
    if(myNicknameElem){
        const divElem = document.createElement('div')
        myNicknameElem.appendChild(divElem);
        if(nickname == null){
            divElem.innerHTML = `닉네임을 설정해보세요!`;
        }else {
            divElem.innerHTML = `닉네임 : ${nickname}`;
        }

    }




    const zzim = (data) => {
        const zzimElem = document.querySelector('#zzim');

        data.forEach((item) => {
            const divElem = document.createElement('div')
            zzimElem.appendChild(divElem);
            divElem.innerHTML = `${item.f_nm}`;
        })

    }
    const zzimList = (data) => {
        fetch(`/user/zzim/${iuser}`)
            .then(res => res.json())
            .then((data) => {
                zzim(data);
            }).catch((e) => {
            console.log(e);
        });
    }
    zzimList();


    if (dataElem.dataset.u_pfnum == 1) {
        const passwordChangeElem = document.querySelector('#passwordChange');
        passwordChangeElem.innerHTML = `<a href=/user/password>비밀번호 변경</a>`;
    }

}