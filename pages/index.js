import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "숭어모임",
    image:
      "https://i.pinimg.com/564x/dd/2a/49/dd2a496c89e10478823e532a41b29adf.jpg",
    address: "서울 강서구",
    description: "놀자",
  },
  {
    id: "2",
    title: "붕어모임",
    image:
      "https://i.pinimg.com/564x/dd/2a/49/dd2a496c89e10478823e532a41b29adf.jpg",
    address: "서울 강남구",
    description: "놀자구",
  },
];
function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const req= context.req;
  const res = context.res;
  
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

//  export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//       //데이터가 자주 변한다면

//     },
//     revalidate:10
//     // 여기에 숫자가 설정되어 있으면 페이지는 빌드 프로세스 중에 바로 생성되지 않는다. 오래된 페이지를 대체한다. 데이터 업데이트 빈도에 따라서 설정하면 된다.

//   };
// }

export default HomePage;
