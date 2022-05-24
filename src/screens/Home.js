import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
  // const { data } = useQuery(FEED_QUERY);
  // const { data } = useQuery(FEED_QUERY); // 백엔드 서버에 게시글 요청

  // 게시글 더미 데이터
  const data = {
    seeFeed: [
      {
        id: 1,
        user: {
          username: "강예영",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/LhotseMountain.jos.500pix.jpg/300px-LhotseMountain.jos.500pix.jpg",
        },
        file:
          "https://www.meteorologiaenred.com/wp-content/uploads/2020/09/caracteristicas-de-los-oceanos-1024x683.jpg.webp",
        caption: "설명",
        likes: 10,
        isLiked: true,
        commentNumber: 1,
        comments: [
          {
            id: 1,
            createdAt: new Date().toISOString(),
            isMine: false,
            payload: "kkkk",
            user: {
              username: "ksssss",
              avatar: "https://images.chosun.com/resizer/taI1PaMAxWVDBw3j1n0ZUoj0eB8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/DTPZSPJJJRAWXLDE66PUOIVAF4.jpg",
            },
          },
        ],
      },
      {
        id: 2,
        user: {
          username: "강예영",
          avatar:
            "https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill",
        },
        file:
          "https://www.meteorologiaenred.com/wp-content/uploads/2020/09/caracteristicas-de-los-oceanos-1024x683.jpg.webp",
        caption: "설명",
        likes: 10,
        isLiked: true,
        commentNumber: 1,
        comments: [
          {
            id: 1,
            createdAt: new Date().toISOString(),
            isMine: false,
            payload: "kkkk",
            user: {
              username: "ksssss",
              avatar: "",
            },
          },
        ],
      },
      {
        id: 3,
        user: {
          username: "강예영",
          avatar:
            "https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill",
        },
        file:
          "https://www.meteorologiaenred.com/wp-content/uploads/2020/09/caracteristicas-de-los-oceanos-1024x683.jpg.webp",
        caption: "설명",
        likes: 10,
        isLiked: true,
        commentNumber: 1,
        comments: [
          {
            id: 1,
            createdAt: new Date().toISOString(),
            isMine: false,
            payload: "kkkk",
            user: {
              username: "ksssss",
              avatar: "",
            },
          },
        ],
      },
      {
        id: 4,
        user: {
          username: "강예영",
          avatar:
            "https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill",
        },
        file:
          "https://www.meteorologiaenred.com/wp-content/uploads/2020/09/caracteristicas-de-los-oceanos-1024x683.jpg.webp",
        caption: "설명",
        likes: 10,
        isLiked: true,
        commentNumber: 1,
        comments: [
          {
            id: 1,
            createdAt: new Date().toISOString(),
            isMine: false,
            payload: "kkkk",
            user: {
              username: "ksssss",
              avatar: "",
            },
          },
        ],
      },
    ],
  };
  return (
    <div>
      <PageTitle title="Home" />
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}
export default Home;
