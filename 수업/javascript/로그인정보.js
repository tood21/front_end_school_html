let 회원정보 = [
  {
    아이디: "jjang",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun1@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang2",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun2@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang3",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun3@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang4",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun4@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
];
// 1번 남자인사람2021년도에 가입하신분
회원정보.filter(el => el.성별 === '남')

1번 남자인사람이면서 2021년도에 가입하신분

회원정보.filter((el) => el.성별 === "남" && el.가입연도.split("-")[0] === "2021")
