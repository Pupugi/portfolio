import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ClickedId } from "../atoms";
import imgOne from "../img/1.jpg";
import imgTwo from "../img/2.jpg";
import imgThree from "../img/3.jpg";
import imgFour from "../img/4.jpg";

const Wrapper = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 30vh);
  gap: 10px;
  padding: 10px;
  width: 80vw;
  max-width: 1000px;
`;

const Preview = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 20%;
  background-color: #2f2f2f;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  opacity: 0;
`;

const Project = styled(motion.div)<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  :hover {
    scale: 1.2;
    transition: ease-in-out 0.2s;
    border: 1px solid black;
    ${Preview} {
      opacity: 1;
      transition: ease-in-out 0.2s;
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

const projectAray = [
  {
    name: "포트폴리오",
    id: "portfolio",
    url: imgOne,
    adress: "https://pupugi.github.io/portfolio",
    github: "https://github.com/Pupugi/portfolio",
    summary: `사용기술 : react, framer-motion

핵심기능 : framer-motion을 이용한 animation효과

후기
이번 프로젝트는 지금껏 경험이 쌓여서 새로운
라이브러리나 기능을 사용하는데에 이전
프로젝트보다 훨씬 쉬워진 것을 느꼈다.
작더라도 계속 무언가 만드는게 많은 도움이 되는 것 같다.`,
  },
  {
    name: "십이장기",
    id: "twelveJanggi",
    url: imgTwo,
    adress: "https://Pupugi.github.io/Twelve-Janggi",
    github: "https://github.com/Pupugi/Twelve-Janggi",
    summary: `사용기술 : react, typescript, beautiful-dnd

핵심기능 : 말들의 이동과 잡기, 승리 등 규칙 구현

후기
작은 게임이지만 생각보다 많은 기능을 만들어야 했다.
그렇게 여러가지 기능들이 얽히며 일어나는 에러도 많았다.
덕분에 리액트와 라이브러리 사용에 많은 공부가 되었다.`,
  },
  {
    name: "리액트 투두리스트",
    id: "reactTodolist",
    url: imgThree,
    adress: "https://Pupugi.github.io/react-todolist",
    github: "https://github.com/Pupugi/react-todolist",
    summary: `사용기술 : react, typescript, beautiful-dnd

핵심기능 : beautiful-dnd를 이용한 드래그앤드롭

후기
새로운 프레임워크를 배웠지만 이것을 더 잘 활용하기
위해서도 javascript를 많이 공부해야하는 것을 느꼈다.`,
  },
  {
    name: "코드다이어리",
    id: "codeDiary",
    url: imgFour,
    adress: "https://code-diary.fly.dev",
    github: "https://github.com/Pupugi/codediary",
    summary: `사용기술 : node.js, mongoDB, express, pug, fly.io

핵심기능 : javascript를 이용한 CRUD 구현

후기
javascript 기초에 대해 많이 배운 프로젝트였다.
실행력과 자신감, 흥미와 개발자 진로의 확신을 얻었다.`,
  },
];

const Detail = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 60vh;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #2f2f2f;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  a {
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 10px;
      margin-bottom: 10px;
    }
  }
  a:first-child {
    padding: 0px;
    margin-bottom: 5px;
  }
`;

const Cover = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
`;

const Title = styled.span`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
  font-size: 26px;
  @media (max-width: 767px) {
    padding-left: 10px;
    font-size: 16px;
  }
`;

const Summary = styled.pre`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  overflow: auto;
  @media (max-width: 767px) {
    padding-left: 10px;
    font-size: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const [clickedId, setClickedId] = useRecoilState(ClickedId);
  const onProjectClick = (projectId: string) => {
    setClickedId(projectId);
  };
  const onOverlayClick = () => {
    setClickedId("default");
  };
  const foundObj = projectAray.find((obj) => obj.id === clickedId);
  return (
    <>
      <Wrapper>
        <AnimatePresence>
          {projectAray.map((project, index) => (
            <Project
              url={project.url}
              key={index}
              layoutId={project.id}
              onClick={() => onProjectClick(project.id)}
            >
              <Preview>
                <motion.span>{project.name}</motion.span>
              </Preview>
            </Project>
          ))}
        </AnimatePresence>
      </Wrapper>
      {clickedId === "default"
        ? null
        : foundObj && (
            <>
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <Detail layoutId={clickedId}>
                <Cover url={foundObj.url} />
                <Title>{foundObj.name}</Title>
                <Summary>{foundObj.summary}</Summary>
                <Links>
                  <a href={foundObj.adress}>{foundObj.adress}</a>
                  <a href={foundObj.github}>{foundObj.github}</a>
                </Links>
              </Detail>
            </>
          )}
    </>
  );
};

export default Projects;
