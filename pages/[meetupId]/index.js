import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://i.pinimg.com/564x/dd/2a/49/dd2a496c89e10478823e532a41b29adf.jpg"
      title="첫 모임"
      address="강서구"
      description="재밌겠다~~"
    />
  );
}
export async function getStaticPaths() {
  // 동적페이지에 필요한 함수이고 어떤 동적 매개변수 밸류의 어떤 페이지가 프리 제너레이트 되어야 하는지 말해준다.
  // 모든 페이지를 실행한다. 따라서 모든 미트 업 id 밸류가 데이터를 패치하고 미트업의 프랍을 리턴하도록 한다. 
  return {
    fallback: false, // 특정 path를 정의하는 것
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // 라우터는 컴포넌트 함수에서만 사용이 가능하다.
  // 여기서는 리액트 훅을 사용할 수 없다.
  // getStactic,getServerSideProps를 사용하지 않는다면 getStaticProps 사용해야한다.

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://i.pinimg.com/564x/dd/2a/49/dd2a496c89e10478823e532a41b29adf.jpg",
        id: meetupId,
        title: "첫모임",
        address: "강서구",
        description: "재밌겠다~~",
      },
    },
  };
}

export default MeetupDetails;
